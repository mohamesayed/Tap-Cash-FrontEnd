import '../style/SmartCard.css';


import React, { useState } from 'react';
import card from '../imgs/smartphoneterminal-contactless-credit-card-application-accepting-payments-financial-transactions-online-mobile-paying-service-hand-transfers-money-phone-vector-concept_176411-4640.avif';

const SmartCard = () => {
  const [step, setStep] = useState(1);
  const [pin, setPin] = useState('');
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleExport = () => {
    setStep(2);
  };

  const handleStart = (event) => {
    event.preventDefault();
        if (pin.length >= 4) {
      setStep(3);
    }
  };


  const handleExportNow = (event) => {
    event.preventDefault();
    const maxAmount = 30000;
    if (amount <= maxAmount) {
          const newCardNumber = Math.floor(Math.random() * 9000000000000000) + 1000000000000000;
          const formattedCardNumber = newCardNumber.toString().replace(/(\d{4})/g, '$1-').slice(0, -1);
          setCardNumber(formattedCardNumber);
          setShowPopup(true);
        } else {
          alert(`The amount cannot exceed ${maxAmount} Egyptian pounds.`);
        }
  };


  const handleCopy = (event) => {
    event.preventDefault();
    const card = `Card Number: ${cardNumber}\nPIN: ${pin}\nAmount: ${amount}`;
    navigator.clipboard.writeText(card);
    setCopySuccess(true);
  };


  return (
    <div className="container">
      <div className="presentation">
        <div className="text">
        <h4>Export Tap Cash Daily Payment Online</h4>
          <p>A daily smart card is a type of electronic card that can be used to store and manage various types of information, such as financial transactions, personal identification, and access control. These cards are equipped with a microprocessor chip that allows them to store and process data securely, making them an ideal solution for applications that require high levels of security and convenience.</p>
        </div>
      <div className="card-image">
        <img src={card} alt={"card" }/>
      </div>
      </div>

    <div className="smart-card">
      {step === 1 && (
        <button className='button' onClick={handleExport}>Export Card</button>
      )}
      {step === 2 && (
        <form onSubmit={handleStart}>
          
          <label className='pin' htmlFor="pin">Enter your PIN</label>
          <input
            type="password"
            id="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            minLength={4}
            maxLength={4}
            required
          />
          <button className='button' type="submit">Continue</button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleExportNow}>
          <label htmlFor="amount">Enter the amount</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            max={30000}
            required
          />
          <button className='button' type="submit">Export Card</button>
        </form>
      )}
      
      {showPopup && (
        <div className="card-popup">
          <h3>Copy Card Details</h3>
          <p>
            Card Number :{' '}
            <span className="card-number" style={{ backgroundColor: 'white', zIndex: 1 }}>
              {cardNumber}
            </span>
          </p>
          <p>
            PIN : <span>{pin}</span>
          </p>
          <p>
            Amount : <span>{amount}</span>
          </p>
          <button className='button' onClick={handleCopy}>Copy Card</button>
          {copySuccess && <p className="success-message">Card copied successfully</p>}
        </div>
      )}
    </div>
    </div>
  );
};

export default SmartCard;

