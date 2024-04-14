const { parseOKFile, editOKFile } = require('./parser');
const okVote = require('./okVote');

const spider = async () => {
  const accounts = parseOKFile('./accounts/ok.txt');

  for (const account of accounts) {
    console.log(`Vote for ${account.login}`);
    await okVote(account)
      .then(() => editOKFile('./accounts/ok.txt', account.login))
      .catch(console.log);
    console.log('Done!');
    console.log('__________________');
    await new Promise((resolve) => setTimeout(resolve, 180 * 1000));
  }
};

spider();
