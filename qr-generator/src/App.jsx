import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import './App.scss';
import actionRSA from './RSA';

const App = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [qrCodeDataURL, setQRCodeDataURL] = useState('');

  const generateQRCode = async () => {
    try {
      const dataURL = await QRCode.toDataURL(
        result,
        {
          errorCorrectionLevel: 'H',
          width: 266,
          color: {
            light: '#ffffff00',
            dark: '#000000ff',
          },
        },
      );
      setQRCodeDataURL(dataURL);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const downloadQRCode = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = qrCodeDataURL;
    downloadLink.download = text;
    downloadLink.click();
  };

  useEffect(() => {
    actionRSA(text)
      .then((decrypted) => setResult(decrypted))
      .catch(console.error);
  }, [text]);

  useEffect(() => {
    if (result) generateQRCode();
  }, [result]);

  return (
    <div className='App'>
      <input
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      {qrCodeDataURL && (
        <div>
          <img src={qrCodeDataURL} alt='QR Code' />
          <button onClick={downloadQRCode}>Скачать QR код</button>
        </div>
      )}
    </div>
  );
};
export default App;
