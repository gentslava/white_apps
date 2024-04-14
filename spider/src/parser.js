const fs = require('fs');

function parseOKFile(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    const lines = data.split('\n');
    const accounts = [];

    lines.forEach((line) => {
      const [login, password, name, surname, url, status] = line.split('|');
      const account = {
        login,
        password,
        name,
        surname,
        url,
      };
      if (status != 0 && status != 1) accounts.push(account);
    });

    return accounts;
}

function editOKFile(filename, searchValue, addValue) {
  // Чтение файла
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка при чтении файла:', err);
      return;
    }

    // Разделение данных на строки
    const lines = data.replaceAll('\r', '').split('\n');

    // Поиск строки по значению
    const index = lines.findIndex(line => line.includes(searchValue));
    if (index === -1) {
      console.log('Строка с заданным значением не найдена.');
      return;
    }

    // Добавление addValue к найденной строке
    lines[index] += addValue;

    // Обновление файла с измененными данными
    fs.writeFile(filename, lines.join('\n'), 'utf8', (err) => {
      if (err) {
        console.error('Ошибка при записи файла:', err);
        return;
      }
    });
  });
}

module.exports = {
  parseOKFile,
  editOKFile,
};
