import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir, writeFile, readFile } from 'node:fs/promises';

if (process.platform === 'win32') throw new Error('Rendering is restricted to GitHub Actions; no Windows browser.');
const pages = ['/', '/?lang=en', '/?lang=de', '/comprendre-ia/', '/en/understanding-ai/', '/comprendre-ia/sources/', '/technologie/', '/sur-mesure/', '/cas-usage/', '/justitia/', '/demo/', '/videos/', '/confidentialite/'];
const sizes = [{width:390,height:844,isMobile:true,hasTouch:true},{width:1440,height:900,isMobile:false,hasTouch:false}];
const baseUrl = process.env.BASE_URL?.trim();
const origin = baseUrl ? new URL(baseUrl).href.replace(/\/$/, '') : 'http://127.0.0.1:8765';
if (!['http:', 'https:'].includes(new URL(origin).protocol)) throw new Error('BASE_URL must use HTTP or HTTPS.');
const server = baseUrl ? undefined : spawn('python3', ['-m','http.server','8765','--bind','127.0.0.1','--directory','site'], {stdio:'ignore'});
let browser;
const report = {mode:baseUrl?'live':'local', baseUrl:origin, sourceRef:baseUrl?origin:(await readFile('source-ref.txt','utf8')).trim(), results:[]};
await mkdir('out',{recursive:true});
try {
  if (!baseUrl) for (let i=0;i<100;i++) {
    try {if ((await fetch(origin)).ok) break;} catch {}
    if (i===99) throw new Error('Static server did not start');
    await new Promise(resolve=>setTimeout(resolve,100));
  }
  browser = await chromium.launch({headless:true});
  for (const size of sizes) for (const path of pages) {
    const context = await browser.newContext({viewport:{width:size.width,height:size.height},isMobile:size.isMobile,hasTouch:size.hasTouch,deviceScaleFactor:1});
    const page = await context.newPage();
    const result = {path,width:size.width,consoleErrors:[],pageErrors:[],failedRequests:[],httpErrors:[],overflow:0};
    const allowed = url => !new URL(url).pathname.startsWith('/investisseurs');
    page.on('console',m=>{if(m.type()==='error') result.consoleErrors.push(m.text());});
    page.on('pageerror',e=>result.pageErrors.push(e.message));
    page.on('requestfailed',r=>{if(allowed(r.url())) result.failedRequests.push({url:r.url(),method:r.method(),type:r.resourceType(),error:r.failure()?.errorText});});
    page.on('response',r=>{if(r.status()>=400&&allowed(r.url())) result.httpErrors.push({url:r.url(),status:r.status()});});
    try {
      await page.goto(origin+path,{waitUntil:'networkidle',timeout:45000});
      await page.evaluate(()=>document.fonts.ready);
      // Trigger lazy images and scroll animations before capturing the whole page.
      await page.addStyleTag({content:'html,body{scroll-behavior:auto!important}'});
      await page.evaluate(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=600){scrollTo({top:y,behavior:'instant'});await new Promise(r=>setTimeout(r,100));}scrollTo({top:0,behavior:'instant'});await Promise.race([Promise.all([...document.images].filter(i=>i.getClientRects().length).map(i=>i.decode().catch(()=>{}))),new Promise(r=>setTimeout(r,5000))]);});
      await page.waitForTimeout(600);
      Object.assign(result,await page.evaluate(()=>({overflow:Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)-innerWidth,overflowElements:[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+1||r.left< -1);}).slice(0,30).map(e=>({tag:e.tagName,class:e.className,id:e.id})),missingImages:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src)})));
      result.screenshot=`${size.width}-${path==='/'?'home':path.replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'')}.jpg`;
      await page.screenshot({path:'out/'+result.screenshot,fullPage:true,type:'jpeg',quality:80});
    } catch(e) { result.pageErrors.push(e.message); }
    report.results.push(result);
    console.log(`${size.width} ${path}: overflow=${result.overflow}, errors=${result.consoleErrors.length+result.pageErrors.length}, requests=${result.failedRequests.length+result.httpErrors.length}`);
    await context.close();
  }
} finally {
  await writeFile('out/report.json',JSON.stringify(report,null,2));
  const escape = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  await writeFile('out/index.html',`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Render review</title><style>body{font:16px system-ui;margin:24px;background:#eee}section{margin:32px 0}img{display:block;max-width:100%;height:auto}summary{cursor:pointer;padding:12px;background:white}pre{white-space:pre-wrap}</style><h1>Render review</h1><p>Source: ${escape(report.sourceRef)}</p>${report.results.map(r=>`<section><h2>${escape(r.path)} · ${r.width}px</h2><details><summary>Diagnostics</summary><pre>${escape(JSON.stringify(r,null,2))}</pre></details>${r.screenshot?`<a href="${r.screenshot}"><img loading="lazy" src="${r.screenshot}" alt="${escape(r.path)} at ${r.width}px"></a>`:''}</section>`).join('')}`);
  await browser?.close();
  server?.kill();
}
const issues = report.results.filter(r => r.overflow > 0 || r.consoleErrors.length || r.pageErrors.length || r.failedRequests.length || r.httpErrors.length || r.missingImages?.length);
console.log(`Captured ${report.results.filter(r=>r.screenshot).length}/${pages.length*sizes.length} views; ${issues.length} views with issues. Review out/index.html and out/report.json.`);
if (issues.length || report.results.length !== pages.length*sizes.length) process.exitCode = 1;
