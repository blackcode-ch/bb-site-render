import {chromium} from 'playwright';
import {spawn} from 'node:child_process';
import {writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
if (process.platform === 'win32') throw new Error('Actions only; no Windows browser.');
const server = spawn('python3', ['-m', 'http.server', '8765', '--bind', '127.0.0.1', '--directory', 'site'], {stdio:'ignore'});
let browser;
const results = [];
try {
  for (let i=0;i<100;i++) { try { if ((await fetch('http://127.0.0.1:8765')).ok) break; } catch {} await new Promise(r=>setTimeout(r,100)); }
  browser = await chromium.launch({headless:true});
  for (const width of [390,1440]) {
    const page = await browser.newPage({viewport:{width,height:900}});
    await page.goto('http://127.0.0.1:8765/millennium/');
    assert.equal(await page.locator('meta[name=robots]').getAttribute('content'),'noindex,nofollow');
    assert.equal((await page.locator('body').innerText()).match(/Brigitte Box/g).length,1);
    await page.getByRole('link',{name:'Je souhaite participer'}).click();
    await page.locator('[name=prenom]').fill('Test');
    await page.locator('[name=nom]').fill('Visuel');
    await page.locator('[name=etude]').fill('<script>alert(1)</script>');
    await page.locator('[name=email]').fill('render@example.com');
    await page.locator('[name=consentement]').check();
    let count=0;
    await page.route('**/api/millennium-signup', async route => {
      count++;
      assert.equal(route.request().method(),'POST');
      assert.equal(route.request().postDataJSON().etude,'<script>alert(1)</script>');
      await route.fulfill({status:count===1?503:200,contentType:'application/json',body:JSON.stringify({ok:count!==1})});
    });
    await page.getByRole('button',{name:'Enregistrer mon intérêt'}).click();
    await page.waitForFunction(()=>document.querySelector('#status').dataset.error==='true');
    assert.equal(await page.locator('[name=prenom]').inputValue(),'Test');
    await page.locator('.registration').screenshot({path:`out/${width}-millennium-error.png`});
    await page.getByRole('button',{name:'Enregistrer mon intérêt'}).click();
    await page.waitForFunction(()=>document.querySelector('#status').textContent.startsWith('Merci'));
    assert.equal(await page.getByRole('button',{name:'Intérêt enregistré'}).isDisabled(),true);
    assert.equal(await page.locator('[name=prenom]').inputValue(),'');
    await page.locator('.registration').screenshot({path:`out/${width}-millennium-success.png`});
    results.push({width,checks:['noindex','one brand mention','anchor','error preserves input','retry succeeds','success disables duplicate submit']});
    await page.close();
  }
  const context = await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:8765/millennium/');
  assert.match(await page.locator('noscript').innerText(),/une page affichera/);
  assert.equal(await page.locator('form').getAttribute('method'),'post');
  await page.screenshot({path:'out/390-millennium-nojs.jpg',fullPage:true});
  results.push({check:'No-JS form retains POST action and visible instructions'});
} finally {
  await writeFile('out/millennium-interactions.json',JSON.stringify(results,null,2));
  await browser?.close(); server.kill();
}
