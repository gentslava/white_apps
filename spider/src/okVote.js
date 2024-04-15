const puppeteer = require('puppeteer');
const okLogin = require('./okLogin');
const sendSuggestion = require('./sendSuggestion');
const { logger } = require('./logger');

const devices = Object.keys(puppeteer.KnownDevices).filter((device) => /iPhone|Pixel|Galaxy/.test(device) && !/landscape/.test(device));

module.exports = (account) => new Promise(async (resolve, reject) => {
  let browser = null;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--proxy-server=pproxy.site:10487',
        '--lang=ru-RU,ru'
      ],
    });
    const device = puppeteer.KnownDevices[devices[Math.floor(devices.length * Math.random())]];

    let page = await browser.newPage();
    await page.emulate(device);
    await page.authenticate({username:'ehKEG7', password:'KEk4atEz5DAd'});

    await page.goto('https://myip.ru/', { waitUntil: 'domcontentloaded' });
    const element = await page.waitForSelector('#ipcontent td', { visible: true });
    const ip = await page.evaluate((el) => el.textContent, element);
    logger(`${device.name} ${ip}`);

    await page.goto('https://ya.ru/', { waitUntil: 'networkidle2' });

    await page.goto('https://ok.ru/', { waitUntil: 'networkidle2' }).catch(async () => await page.reload());
    await okLogin(page, account);

    page = await browser.newPage();
    await page.emulate(device);

    await page.goto('https://ngs.ru/award/votes/medicine/', { waitUntil: 'load' }).catch(async () => await page.reload());
    await page.tap('.auth__btn');

    browser.waitForTarget(
      (target) => /connect\.ok\.ru\//.test(target.url())
    ).then(async (target) => {
      let page = await target.page();
      await page.emulate(device);
      await page.reload();
      await page.tap('button.form-actions_yes[name="button_accept_request"]');

      await new Promise((resolve) => setTimeout(resolve, 4000));
      page = await browser.newPage();
      await page.emulate(device);

      await page.goto('https://ngs.ru/award/votes/medicine/', { waitUntil: 'load' });
      sendSuggestion(page, account.login).then(async () => {
        await browser.close();
        resolve();
      }).catch(reject);
    }).catch(async (e) => {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      const page = await browser.newPage();
      await page.emulate(device);

      await page.goto('https://ngs.ru/award/votes/medicine/', { waitUntil: 'load' });
      sendSuggestion(page, account.login).then(async () => {
        await browser.close();
        resolve();
      }).catch(reject);
    });

    await page.waitForSelector(
      '.social-list .social.ok',
      { visible: true, timeout: 0 }
    );
    await page.tap('.social-list .social.ok');
  } catch (e) {
    browser && await browser.close();
    reject(e);
  }
});
