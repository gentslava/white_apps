const loginButton = '.login-landing-promo_login-form input[name="loginButton"]';
const emailInput = '#field_email,#field_login';
const passwordInput = '#field_password';
const submitButton = 'input[type="submit"]';
const blocked = '#hook_Block_MainContainer,[data-logloc="accountBlockedByAdminStub"]';
const captcha = '#boxPage[data-logloc="verifyCaptchaStart"]';

module.exports = (page, account) => new Promise(async (resolve, reject) => {
  await page.waitForSelector(
    loginButton,
    { visible: true }
  ).then(async (loginButton) => {
    await loginButton.tap();
  }).catch();

  await page.waitForSelector(
    emailInput,
    { visible: true, timeout: 0 }
  );

  await page.tap(emailInput),
  await page.type(emailInput, account.login, { delay: 300, })

  await page.tap(passwordInput),
  await page.type(passwordInput, account.password, { delay: 300, }),

  await Promise.all([
    page.tap(submitButton),
    page.waitForNavigation({ waitUntil: 'networkidle2' }),
    new Promise((resolve) => setTimeout(resolve, 5000)),
  ]);

  const blockedEl = await page.$(blocked);
  if (blockedEl) {
    return reject({ status: 'blocked', });
  }

  const captchaEl = await page.$(captcha);
  if (captchaEl) {
    return reject({ status: 'captcha', });
  }

  return resolve({
    img: 'yes',
    status: 'alive',
  });
});
