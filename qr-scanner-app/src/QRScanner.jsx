/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import QrScanner from 'qr-scanner';

const videoStyle = {
    width: '100vmin',
    height: '100vmin',
    maxWidth: '100vw',
    maxHeight: '100vh',
    objectFit: 'cover',
    transform: 'scaleX(-1)',
    padding: '20px',
    boxSizing: 'border-box',
};

const QRScanner = ({ setTextQR, scanning }) => {
    const display = scanning ? 'initial' : 'none';

    useEffect(() => {
        if (scanning) {
            if (document.querySelector('.scan-region-highlight')) return;
            const video = document.querySelector('#qr-video');
            const scanner = new QrScanner(
                video,
                (result) => setTextQR(result),
                {
                    highlightScanRegion: true,
                    highlightCodeOutline: true,
                },
            );
            scanner.setInversionMode('both');
            scanner.start();
            window.scanner = scanner;
        } else if (window.scanner) {
            const { scanner } = window;
            scanner.stop();
            scanner.destroy();
            window.scanner = null;
        }
    });

    return (
        <video id='qr-video' style={{ ...videoStyle, display }} />
    );
};
export default QRScanner;
