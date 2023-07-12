import JSEncrypt from 'jsencrypt';

const actionRSA = ({ data }) => new Promise((resolve, reject) => {
  if (data) {
    const decrypt = new JSEncrypt();
    decrypt.setPrivateKey(process.env.PRIVATE_KEY);
    const decrypted = decrypt.decrypt(data);
    if (decrypted) resolve(decrypted.toString());
    reject(new Error('Ошибка шифрования!'));
  }
  reject(new Error('Текст для шифрования не введен!'));
});
export default actionRSA;
