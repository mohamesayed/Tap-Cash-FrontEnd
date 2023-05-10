import moneytransfer from '../imgs/mobile-bank-users-transferring-money-currency-conversion-tiny-people-online-payment-cartoon-illustration_74855-14454.webp'
import cardtowallet from '../imgs/flat-receiving-cashback-bonus-from-paying-online_88138-766.webp';
import billpayment from '../imgs/hand-drawn-credit-assessment-concept_23-2149171103.avif';
import dashboard from '../imgs//hand-drawn-installment-illustration_23-2149397096 (1).webp'
import { NavLink } from 'react-router-dom';

import '../style/About.css';

const About = ()=>{
  return (
    <div className="articles" id="articles">
      <h2 className="main-heading">Features</h2>
      <div className="container">
        <div className="box">
          <img decoding="async" src={moneytransfer} alt='Money Transfer'/>
          <div className="content">
            <h3>Smart Wallet</h3>
            <p>
            Fast and secure money transfer services, Transfer money to any bank account in India, Transfer money to any bank account overseas
            </p>
          </div>
          <div className="info">
          <NavLink style={{textDecoration:'none'}} to='SmartWalet'> Go To SmartWalet</NavLink>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="box">
          <img decoding="async" src={cardtowallet} alt="" />
          <div className="content">
            <h3>Smart Card</h3>
            <p>Secure card to e-wallet services, Easy transfer of funds from your card to e-wallet</p>
          </div>
          <div className="info">
          <NavLink style={{textDecoration:'none'}} to='/SmartCard'>Smart Card</NavLink>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="box">
          <img decoding="async" src={dashboard} alt="dashboard" />
          <div className="content">
            <h3>Dashboard</h3>
            <p>Dashboards can be used in a variety of settings, from business intelligence and analytics to project management and marketing. </p>
          </div>
          <div className="info">
          <NavLink style={{textDecoration:'none'}} to='SmartWalet'> Go To Dashboard </NavLink>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="box">
          <img decoding="async" src={billpayment} alt="" />
          <div className="content">
            <h3>children's wallet</h3>
            <p>A children's wallet is a small, portable container designed to hold money, coins, and other small items. It is specifically designed for children</p>
          </div>
          <div className="info">
          <NavLink style={{textDecoration:'none'}} to='ChildrenWallet'> Go To children's walle </NavLink>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>


      </div>
    </div>
  );
};

export default About;

