import JSEncrypt from 'jsencrypt';

const actionRSA = (data, key) => new Promise((resolve, reject) => {
  if (key) {
    if (data) {
      const Encryptor = new JSEncrypt();
      Encryptor.setPublicKey(key);
      const encrypted = Encryptor.encrypt(data);
      if (encrypted) resolve(encrypted.toString());
      reject(new Error('Ошибка шифрования!'));
    }
    reject(new Error('Текст для шифрования не введен!'));
  }
  reject(new Error('Ключи заполнены некорректно!'));
});
export default actionRSA;
