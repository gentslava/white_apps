const { parseOKFile, editOKFile } = require('./parser');
const okVote = require('./okVote');

const spider = async () => {
  const accounts = parseOKFile('accounts/ok.txt');

  for (const account of accounts) {
    console.log(`Vote for ${account.login}`);
    await okVote(account)
      .then(() => editOKFile('accounts/ok.txt', account.login))
      .catch(console.error);
    console.log('Done!');
    const timeout = 120 + Math.random() * 120;
    console.log(`Wait for ${timeout}s`);
    await new Promise((resolve) => setTimeout(resolve, timeout * 1000));
  }
};

spider();
