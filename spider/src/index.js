import { tBot } from './telegram-bot/bot';

const { parseOKFile, editOKFile } = require('./parser');
const okVote = require('./okVote');

const spider = async () => {
  const accounts = parseOKFile('accounts/ok.txt');

  for (const account of accounts) {
    console.log(`Vote for ${account.login}`);
    new tBot().sendMessage(null, `Vote for ${account.login}`);
    await okVote(account)
      .then(() => editOKFile('accounts/ok.txt', account.login, '|0'))
      .catch((e) => {
        console.error(e);
        if (e.status === 'blocked') {
          editOKFile('accounts/ok.txt', account.login, '|1');
        }
      });
    console.log('Done!');
    const timeout = 120 + Math.random() * 120;
    console.log(`Wait for ${timeout}s`);
    await new Promise((resolve) => setTimeout(resolve, timeout * 1000));
  }
};

export default spider;
