/* eslint-disable no-undef */
import JSEncrypt from 'jsencrypt';

const actionRSA = ({ data }, privateKey) => new Promise((resolve, reject) => {
    if (privateKey) {
        if (data) {
            // const cryptText = document.getElementById("CryptText");
            const decrypt = new JSEncrypt();
            decrypt.setPrivateKey(privateKey);
            const decrypted = decrypt.decrypt(data);
            if (decrypted) resolve(decrypted.toString());
            reject('Ошибка шифрования!');
        }
        reject('Текст для шифрования не введен!');
    }
    reject('Ключи заполнены некорректно!');
});
export default actionRSA;
