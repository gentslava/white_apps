const fs = require('fs');

function parseOKFile(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    const lines = data.split('\n');
    const accounts = [];

    lines.forEach((line) => {
      const [login, password, name, surname, url] = line.split('|');
      const account = {
        login,
        password,
        name,
        surname,
        url,
      };
      accounts.push(account);
    });

    return accounts;
}

module.exports = {
  parseOKFile,
};
