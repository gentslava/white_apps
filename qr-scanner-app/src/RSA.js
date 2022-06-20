/* eslint-disable no-undef */
import JSEncrypt from 'jsencrypt';

const actionRSA = ({ data }, privateKey) => new Promise((resolve, reject) => {
    if (privateKey) {
        if (data) {
            const decrypt = new JSEncrypt();
            decrypt.setPrivateKey(privateKey);
            const decrypted = decrypt.decrypt(data);
            if (decrypted) resolve(decrypted.toString());
            reject(new Error('Ошибка шифрования!'));
        }
        reject(new Error('Текст для шифрования не введен!'));
    }
    reject(new Error('Ключи заполнены некорректно!'));
});
export default actionRSA;
