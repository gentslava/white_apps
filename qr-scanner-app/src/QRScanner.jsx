import QrScanner from 'qr-scanner';
import { useEffect } from 'react';

const videoStyle = {
    maxWidth: '100vw',
    transform: 'scaleX(-1)',
}

const QRScanner = () => {
    useEffect(() => {
        if (document.querySelector('.scan-region-highlight')) return;
        console.log('Init')
        const video = document.querySelector('#qr-video');
        const scanner = new QrScanner(
            video,
            (result) => console.log(result),
            {
                highlightScanRegion: true,
                highlightCodeOutline: true,
            }
        );
        scanner.setInversionMode('both');
        scanner.start();
    }, []);

    return (
        <video id='qr-video' style={videoStyle} />
    );
};
export default QRScanner;