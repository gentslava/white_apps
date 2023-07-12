import JSEncrypt from 'jsencrypt';

const actionRSA = (data) => new Promise((resolve, reject) => {
  if (data) {
    const Encryptor = new JSEncrypt();
    Encryptor.setPublicKey(process.env.OPEN_KEY);
    const encrypted = Encryptor.encrypt(data);
    if (encrypted) resolve(encrypted.toString());
    reject(new Error('Ошибка шифрования!'));
  }
  reject(new Error('Текст для шифрования не введен!'));
});
export default actionRSA;
