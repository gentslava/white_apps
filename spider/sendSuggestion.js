module.exports = (page, account) => new Promise(async (resolve, reject) => {
  await page.waitForSelector(
    '.votes-form__wrapper input',
    { visible: true, timeout: 0 }
  );
  await page.click('.votes-form__wrapper input');
  await page.type('.votes-form__wrapper input', 'WHITE provenance', { delay: 300, });
  await page.click('.votes-form__wrapper .votes-form__submit');

  await page.waitForSelector(
    '.answer-head .selected',
    { visible: true, timeout: 0 }
  );
  await page.evaluate(() => {
    document.querySelector('.answer-head').scrollIntoView();
  });
  await page.screenshot({
    path: `./screenshots/${account}.jpg`
  });
  resolve();
});
