const puppeteer = require('puppeteer');
const okLogin = require('./okLogin');
const sendSuggestion = require('./sendSuggestion');

const iPhone = puppeteer.KnownDevices['iPhone 13'];

module.exports = (account) => new Promise(async (resolve, reject) => {
  let browser = null;
  try {
    browser = await puppeteer.launch({
      headless: true, // false: enables one to view the Chrome instance in action
      defaultViewport: {
        width: 375,
        height: 667,
        isMobile: true,
      },
      args: [
        '--no-sandbox',
        '--proxy-server=pproxy.site:10487',
      ],
    });
    let page = await browser.newPage();
    await page.authenticate({username:'ehKEG7', password:'KEk4atEz5DAd'});

    await page.goto('https://ok.ru/', { waitUntil: 'networkidle2' });
    await okLogin(page, account);

    page = await browser.newPage();
    await page.emulate(iPhone);

    await page.goto('https://ngs.ru/award/votes/medicine/', { waitUntil: 'networkidle2' });
    await page.click('.auth__btn');

    browser.waitForTarget(
      (target) => /connect\.ok\.ru\/oauth\/authorize/.test(target.url())
    ).then(async (target) => {
      let page = await target.page();
      await page.click('button.form-actions_yes[name="button_accept_request"]');

      await new Promise((resolve) => setTimeout(resolve, 4000));
      page = await browser.newPage();
      await page.emulate(iPhone);

      await page.goto('https://ngs.ru/award/votes/medicine/', { waitUntil: 'networkidle2' });
      sendSuggestion(page, account.login).then(async () => {
        await browser.close();
        resolve();
      }).catch((e) => reject('Catched exception for sendSuggestion:', e));
    }).catch(async (e) => {
      // console.log('Catched exception for waitForTarget:', e);

      await new Promise((resolve) => setTimeout(resolve, 4000));
      const page = await browser.newPage();
      await page.emulate(iPhone);

      await page.goto('https://ngs.ru/award/votes/medicine/', { waitUntil: 'networkidle2' });
      sendSuggestion(page, account.login).then(async () => {
        await browser.close();
        resolve();
      }).catch((e) => reject('Catched exception for sendSuggestion:', e));
    });

    await page.waitForSelector(
      '.social-list .social.ok',
      { visible: true, timeout: 0 }
    );
    await page.click('.social-list .social.ok');
  } catch (e) {
    browser && await browser.close();
    reject(e);
  }
});
