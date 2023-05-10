import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import '../style/QrCode.css';

function QRCodeGenerator() {
  const [qrValue, setQrValue] = useState('');

  return (
    <div>
      <input type='text' value={qrValue} onChange={(e) => setQrValue(e.target.value)} placeholder='Enter text to generate QR code' />
      {qrValue &&
        <QRCode value={qrValue} />
      }
    </div>
  );
}

export default QRCodeGenerator;