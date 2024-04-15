import { logger } from './logger';

const { parseOKFile, editOKFile } = require('./parser');
const okVote = require('./okVote');

const spider = async () => {
  const accounts = parseOKFile('accounts/ok.txt');

  for (const account of accounts) {
    logger(`Голосование с аккаунта ${account.login}`);
    await okVote(account)
      .then(() => {
        logger('Успех!');
        editOKFile('accounts/ok.txt', account.login, '|0');
      })
      .catch((e) => {
        logger(e);
        if (e.status === 'blocked') {
          editOKFile('accounts/ok.txt', account.login, '|1');
        }
        if (e.status === 'captcha') {
          editOKFile('accounts/ok.txt', account.login, '|2');
        }
      });

    const timeout = Math.round(120 + Math.random() * 240);
    console.log(`Wait for ${timeout}s`);
    await new Promise((resolve) => setTimeout(resolve, timeout * 1000));
  }
};

export default spider;
