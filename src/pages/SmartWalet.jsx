import moneytransfer from '../imgs/mobile-bank-users-transferring-money-currency-conversion-tiny-people-online-payment-cartoon-illustration_74855-14454.webp'
import cardtowallet from '../imgs/flat-receiving-cashback-bonus-from-paying-online_88138-766.webp';
import atm from '../imgs/man-customer-standing-near-credit-card-reader-machine-withdraw-money_284092-2261.webp';
import billpayment from '../imgs/flat-design-installment-illustration_23-2149409058.webp';
import onlinepayment from '../imgs/hand-drawn-installment-illustration_23-2149397096 (1).webp';
import dashboard from '../imgs//hand-drawn-installment-illustration_23-2149397096 (1).webp'
import recharge from '../imgs/credit-card-transactions-payment-conditions-purchase-terms-online-banking-buyer-using-e-payment-technology-businesswoman-returning-money-loan_335657-850.webp';

import { NavLink } from 'react-router-dom';
import '../style/SmartWalet.css';
import Footer from './../component/Footer';

const SmartWalet = ()=>{
  return (
    <>
        <div className='intro' >Tap Cash  is an E-Wallet provided by Tap Cash to make your life easier and run all your errands with a Tap.</div>

    <div className="how-to">
    <div class="overlay"></div>
    <h3>How to create your Tap Cash wallet ?</h3>
      <div className="container">
        <div className="step">
        <i class="fa-solid fa-lock"></i>
          <div className="text">
            <h4> Sign In and Create your PIN</h4>
            <p>You will receive an SMS confirming your registration and asking you to create a 4 digits PIN for your account</p>
          </div>
        </div>
        <div className="step">
        <i class="fa-solid fa-file-circle-check"></i>
          <div className="text">
            <h4>Deposit/Withdraw your Money</h4>
            <p>Deposit/Withdraw money in your account ,exclusive dealers, Aman , Fawry branches or ATM machines and enjoy the different services of Tap Cash</p>
          </div>
        </div>
      </div>
    </div>



    <div className="articles" id="articles">
      <div className="container">
        <div className="box">
          <img decoding="async" src={moneytransfer} alt='Money Transfer'/>
          <div className="content">
            <h3>Money Transfer</h3>
            <p>
            Fast and secure money transfer services, Transfer money to any bank account in India, Transfer money to any bank account overseas
            </p>
          </div>
          <div className="info">
          <NavLink style={{textDecoration:'none'}} to='/Dashboard'> Go </NavLink>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="box">
          <img decoding="async" src={cardtowallet} alt="" />
          <div className="content">
            <h3> Card To Wallet Services</h3>
            <p>Secure card to e-wallet services, Easy transfer of funds from your card to e-wallet</p>
          </div>
          <div className="info">
          <NavLink style={{textDecoration:'none'}} to='/Dashboard'>Go</NavLink>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="box">
          <img decoding="async" src={atm} alt="/dashboard" />
          <div className="content">
            <h3>ATM Services</h3>
            <p> ATM services have had a significant impact on the banking industry and have become an essential part of modern-day financial services.</p>
          </div>
          <div className="info">
          <NavLink style={{textDecoration:'none'}} to='/Dashboard'> Go  </NavLink>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="box">
          <img decoding="async" src={billpayment} alt="" />
          <div className="content">
            <h3>Renew Your Bundle Any Time Any Where</h3>
            <p>Renewing your bundle any time, any where has become increasingly convenient with the advancement of technology.</p>
          </div>
          <div className="info">
          <NavLink style={{textDecoration:'none'}} to='/Dashboard'> Go  </NavLink>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="box">
          <img decoding="async" src={onlinepayment} alt="" />
          <div className="content">
            <h3>Utility Bill  Payment</h3>
            <p>Utility bill payment refers to the process of paying for essential services such as electricity, water, gas, and internet.</p>
          </div>
          <div className="info">
          <NavLink style={{textDecoration:'none'}} to='/Dashboard'> Go  </NavLink>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="box">
          <img decoding="async" src={recharge} alt="" />
          <div className="content">
            <h3>Online Payment </h3>
            <p>Online payment can be done through various channels, such as credit/debit cards, e-wallets, bank transfers, and mobile payment platforms.</p>
          </div>
          <div className="info">
          <NavLink style={{textDecoration:'none'}} to='/Dashboard'> Go </NavLink>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>


      </div>
    </div>




    <div className="limit">
    <h3 >What are the wallet limits ?</h3>
      <div className="container">
        <div className="Transactions ">
        <i class="fa-solid fa-user-group"></i>
          <div className="text">
            <p> Wallet Transactions limits</p>
            <p className='bold'> 30,000EGP</p>
            <p>Daily</p>
          </div>
        </div>
        <div className="Transactions ">
        <i class="fa-solid fa-globe"></i>
          <div className="text">
          <p> Wallet Transactions limits</p>
            <p className='bold'>100,000EGP</p>
            <p>Monthly</p>
            </div>
        </div>
      </div>
    </div>
    <Footer />

    
    </>
  );
};

export default SmartWalet;

