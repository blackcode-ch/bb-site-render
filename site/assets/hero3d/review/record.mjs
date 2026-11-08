import {createServer} from 'node:http';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {fileURLToPath,pathToFileURL} from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';
const here=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(here,'../../..');
const {chromium}=await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE||'C:/Users/Andrew/Documents/lifenav/frontend/node_modules/playwright/index.mjs').href);
const server=createServer(async(req,res)=>{try{const route=decodeURIComponent(new URL(req.url,'http://localhost').pathname),file=path.resolve(root,'.'+route+(route.endsWith('/')?'index.html':''));if(!file.startsWith(root+path.sep))return res.writeHead(403).end();res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.css':'text/css','.mjs':'text/javascript','.js':'text/javascript','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png'})[path.extname(file)]||'application/octet-stream');res.end(await readFile(file));}catch{res.writeHead(404).end();}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const origin=`http://127.0.0.1:${server.address().port}`;
let browser;
try {
 browser=await chromium.launch({headless:true,args:['--disable-features=WebAuthenticationUseNativeWinApi','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const context=await browser.newContext({viewport:{width:540,height:700},recordVideo:{dir:here,size:{width:540,height:700}}});
 await context.route('**/*',r=>r.request().url().startsWith(origin)?r.continue():r.abort());
 const page=await context.newPage(),cdp=await context.newCDPSession(page);
 const source=await readFile(path.join(root,'index.html'),'utf8');
 const figure=source.match(/<figure class="hero-visual" id="hero-box">[\s\S]*?<\/figure>/)[0];
 const captureHTML='<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="/design.css"><link rel="stylesheet" href="/assets/hero3d/hero3d.css"><style>body{margin:0;padding:0;background:#f6f5f1}#hero-box{width:540px;height:700px;box-sizing:border-box;margin:0}</style><body>'+figure+'<script type="module" src="/assets/hero3d/player.mjs"></script></body></html>';
 await page.route(origin+'/?box-review=1',route=>route.fulfill({status:200,contentType:'text/html; charset=utf-8',body:captureHTML}));
 await cdp.send('WebAuthn.enable');await cdp.send('WebAuthn.addVirtualAuthenticator',{options:{protocol:'ctap2',transport:'internal',hasResidentKey:true,hasUserVerification:true,isUserVerified:true,automaticPresenceSimulation:true}});
 await page.goto(origin+'/?box-review=1',{waitUntil:'networkidle'});
 await page.waitForFunction(()=>window.brigitteHero?.inspect().frames>1);
 await page.evaluate(()=>window.brigitteHero.seek(17000));
 await page.waitForTimeout(25000);
 const video=page.video();await context.close();await video.saveAs(path.join(here,'box-loop-fr.webm'));await video.delete();
 console.log('Saved box-loop-fr.webm: full 24 s cycle, plus initial page load.');
} finally {await browser?.close();await new Promise(r=>server.close(r));}
