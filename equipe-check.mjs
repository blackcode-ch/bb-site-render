import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
if (process.platform === 'win32') throw new Error('CI only; no Windows browser.');
const server = spawn('python3', ['-m', 'http.server', '8765', '--bind', '127.0.0.1', '--directory', 'site'], { stdio: 'ignore' });
let browser;
const results = [];
await mkdir('out', { recursive: true });
try {
  for (let n = 0; n < 100; n++) {
    try { if ((await fetch('http://127.0.0.1:8765/equipe/')).ok) break; } catch {}
    await new Promise(r => setTimeout(r, 100));
  }
  browser = await chromium.launch({ headless: true });
  for (const width of [390, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: width === 390 ? 844 : 900 }, isMobile: width === 390, hasTouch: width === 390 });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto('http://127.0.0.1:8765/equipe/', { waitUntil: 'networkidle' });
    assert.equal(await page.locator('input[type=password][name=code]').count(), 1);
    assert.equal(await page.locator('form').getAttribute('action'), '/equipe/');
    assert.equal(await page.locator('article').count(), 0);
    assert.equal(await page.locator('meta[name=robots]').getAttribute('content'), 'noindex,nofollow');
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    assert.equal(overflow, 0);
    assert.deepEqual(errors, []);
    await page.screenshot({ path: `out/${width}-equipe-locked.png`, fullPage: true });
    await page.locator('input').focus();
    await page.keyboard.press('Tab');
    assert.equal(await page.locator('button').evaluate(e => e === document.activeElement), true);
    results.push({ width, overflow, errors, state: 'locked', source: 'blackcode-ch/brigitte-box@e8fbab0, real middleware response fixture' });
    await page.close();
  }
} finally {
  await writeFile('out/equipe-report.json', JSON.stringify({ results, unlocked: 'Skipped: no GitHub secret available for the team code.' }, null, 2));
  await browser?.close();
  server.kill();
}
