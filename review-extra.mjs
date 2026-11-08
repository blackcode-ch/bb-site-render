import {chromium} from 'playwright';
import {spawn} from 'node:child_process';
import {writeFile} from 'node:fs/promises';
if(process.platform==='win32') throw new Error('Actions only');
const server=spawn('python3',['-m','http.server','8765','--bind','127.0.0.1','--directory','site'],{stdio:'ignore'});
const results=[];
let browser;
try {
 for(let n=0;n<100;n++){try{if((await fetch('http://127.0.0.1:8765')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
 browser=await chromium.launch({headless:true});
 for(const width of [390,1440]){
  const page=await browser.newPage({viewport:{width,height:900}});
  await page.goto('http://127.0.0.1:8765/technologie/?box-review',{waitUntil:'networkidle'});
  await page.waitForFunction(()=>window.brigitteHero?.inspect().frames>2);
  const state=await page.evaluate(()=>window.brigitteHero.inspect());
  if(state.static||state.frames<3)throw new Error('3D did not render');
  await page.locator('.motion-toggle').click();
  if(await page.locator('.motion-toggle').getAttribute('aria-pressed')!=='true')throw new Error('Pause failed');
  await page.locator('.tech-hero').screenshot({path:`out/${width}-technology-hero.png`});
  for(const pose of [0,9000,17000]){
   await page.evaluate(ms=>window.brigitteHero.seek(ms),pose);
   await page.waitForTimeout(300);
   await page.locator('#hero-box').screenshot({path:`out/${width}-technology-pose-${pose}.png`});
  }
  results.push({width,check:'3D rendered and paused',state});
  if(width===390){
   await page.locator('.menu-toggle').click();
   await page.locator('.primary-nav [data-questionnaire-cta]').scrollIntoViewIfNeeded();
   await page.screenshot({path:'out/390-menu-questionnaire.png'});
   await page.locator('.primary-nav [data-questionnaire-cta]').click();
   await page.waitForURL('**/sur-mesure/**');
   results.push({width,check:'Mobile menu questionnaire navigation works'});
  }
  for(const lang of ['fr','en','de','it','es']){
   await page.goto(`http://127.0.0.1:8765/?lang=${lang}`,{waitUntil:'networkidle'});
   const links=await page.locator('[data-questionnaire-cta]').evaluateAll(els=>els.map(e=>({text:e.textContent,href:e.href,width:e.getBoundingClientRect().width})));
   if(links.length<2||links.some(e=>!e.text||!e.href.includes('/sur-mesure/')))throw new Error('Missing questionnaire action');
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
   if(overflow>0)throw new Error(`Overflow: ${width} ${lang}`);
   await page.locator('.c-hero [data-questionnaire-cta]').hover();
   const hover=await page.locator('.c-hero [data-questionnaire-cta]').evaluate(e=>({color:getComputedStyle(e).color,paper:getComputedStyle(e).getPropertyValue('--paper').trim()}));
   if(hover.color==='rgb(187, 44, 44)'||hover.color==='rgb(189, 40, 45)')throw new Error('Low-contrast red hover text');
   await page.screenshot({path:`out/${width}-home-hover-${lang}.png`});
   await page.mouse.move(0,0);
   await page.locator('.c-hero').screenshot({path:`out/${width}-home-cta-${lang}.png`});
   results.push({width,lang,links,overflow});
  }
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto('http://127.0.0.1:8765/technologie/?box-review',{waitUntil:'networkidle'});
  if(!await page.locator('.box-still').isVisible()||await page.locator('.box-canvas').isVisible())throw new Error('Reduced-motion fallback failed');
  await page.locator('.tech-hero').screenshot({path:`out/${width}-technology-reduced-motion.png`});
  results.push({width,check:'Reduced-motion photo fallback visible'});
  await page.close();
 }
} finally {
 await writeFile('out/interaction-report.json',JSON.stringify(results,null,2));
 await browser?.close();server.kill();
}
