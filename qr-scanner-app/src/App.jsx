/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import './App.scss';
import keys from './keys';
import QRScanner from './QRScanner';
import actionRSA from './RSA';

const App = () => {
    const [textQR, setTextQR] = useState('');
    const [result, setResult] = useState(null);

    useEffect(() => {
        actionRSA(textQR, keys.privateKey)
            .then((decrypted) => setResult(decrypted))
            .catch((error) => console.log(error));
    }, [textQR]);

    return (
        <div className='App'>
            <p className='result'>{ result }</p>
            <QRScanner setTextQR={setTextQR} scanning={!result} />
        </div>
    );
};
export default App;
