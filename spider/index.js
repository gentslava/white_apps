const puppeteer = require('puppeteer');

const url = 'https://ya.ru/';
const yaSearch = '[aria-label="Поиск в интернете"] #text';
const okSuggestion = '.mini-suggest__item_type_fulltext[data-text="одноклассники"]';
const okLink = 'a.OrganicTitle-Link[href="https://ok.ru/"]';

const spider = async (url) => {
    const browser = await puppeteer.launch({
        headless: false, // false: enables one to view the Chrome instance in action
        // defaultViewport: null, // (optional) useful only in non-headless mode
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.waitForSelector(yaSearch);
    await setTimeout(() => null, 1500);

    page.waitForSelector(
      okSuggestion,
      { visible: true, timeout: 0 }
    ).then(() => {
      setTimeout(() => {
        page.click(okSuggestion);
      }, 1000);
    });

    await page.hover(yaSearch);
    await page.click(yaSearch);
    page.type(yaSearch, 'одноклассники', { delay: 300, });

    page.waitForSelector(
      okLink,
      { visible: true, timeout: 0 }
    ).then(() => {
      setTimeout(() => {
        page.click(okLink);
      }, 1000);
    });
    browser.close();
};

spider(url);
