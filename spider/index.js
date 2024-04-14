const puppeteer = require('puppeteer');
const okLogin = require('./okLogin');
const { parseOKFile, editOKFile } = require('./parser');
const sendSuggestion = require('./sendSuggestion');

const iPhone = puppeteer.KnownDevices['iPhone 13'];

const url = 'https://ya.ru/';
const yaSearch = '[aria-label="Поиск в интернете"] #text';
const okSuggestion = '.mini-suggest__item[data-text="одноклассники"]';
const okLink = 'a.OrganicTitle-Link[href="https://ok.ru/"]';

const spider = async (url) => {
  const browser = await puppeteer.launch({
    headless: false, // false: enables one to view the Chrome instance in action
    // defaultViewport: null, // (optional) useful only in non-headless mode
    defaultViewport: {
      width: 375,
      height: 667,
      isMobile: true,
    },
    args: [
      '--proxy-server=pproxy.site:10487',
    ],
  });
  let page = await browser.newPage();
  await page.authenticate({username:'ehKEG7', password:'KEk4atEz5DAd'});

  // await page.goto(url, { waitUntil: 'networkidle2' });
  // await page.waitForSelector(yaSearch);
  // await setTimeout(() => null, 1500);

  const accounts = parseOKFile('./accounts/ok.txt');

  // await page.hover(yaSearch);
  // await page.click(yaSearch);
  // await page.type(yaSearch, 'однокла', { delay: 300, });
  // await Promise.all([
  //   page.click(okSuggestion),
  //   page.waitForNavigation({waitUntil: 'networkidle2'})
  // ]);

  // await page.waitForSelector(
  //   okLink,
  //   { visible: true, timeout: 0 }
  // );
  // await Promise.all([
  //   page.click(okLink),
  //   page.waitForNavigation({waitUntil: 'networkidle2'})
  // ]);

  await page.goto('https://ok.ru/', { waitUntil: 'networkidle2' });
  await okLogin(page, accounts[0]);

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
    sendSuggestion(page, accounts[0].login).then(async () => {
      editOKFile('./accounts/ok.txt', accounts[0].login);
      await browser.close();
    }).catch((e) => console.log('Catched exception for sendSuggestion:', e));
  }).catch(async (e) => {
    console.log('Catched exception for waitForTarget:', e);

    await new Promise((resolve) => setTimeout(resolve, 4000));
    const page = await browser.newPage();
    await page.emulate(iPhone);

    await page.goto('https://ngs.ru/award/votes/medicine/', { waitUntil: 'networkidle2' });
    sendSuggestion(page, accounts[0].login).then(async () => {
      editOKFile('./accounts/ok.txt', accounts[0].login);
      await browser.close();
    }).catch((e) => console.log('Catched exception for sendSuggestion:', e));
  });

  await page.waitForSelector(
    '.social-list .social.ok',
    { visible: true, timeout: 0 }
  );
  await page.click('.social-list .social.ok');
};

spider(url);
