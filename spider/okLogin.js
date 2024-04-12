const emailInput = '#field_email';
const passwordInput = '#field_password';
const submitButton = 'input[value="Log in to OK"][type="submit"]';

module.exports = (page, account) => new Promise(async (resolve, reject) => {
  await page.waitForSelector(
    emailInput,
    { visible: true, timeout: 0 }
  );

  await page.click(emailInput),
  await page.type(emailInput, account.login, { delay: 300, })

  await page.click(passwordInput),
  await page.type(passwordInput, account.password, { delay: 300, }),

  await page.click(submitButton);
  resolve({
    img: 'yes',
  });
});
