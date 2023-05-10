import { NavLink } from 'react-router-dom';
import '../style/Footer.css';
import qr from '../imgs/qr.png'


const Footer = ()=>{
  return (
    <div className="footer">
  <div className="container">
    <div className="box">
      <h3>Tap Cash</h3>
      <ul className="social">
        <li>
          <NavLink classNameName='facebook' to='https://www.facebook.com' >
          <i className="fa-brands fa-square-facebook"></i>
            </NavLink>
        </li>
        <li>
          <NavLink classNameName='twitter' to = 'https://www.twitter.com'>
          <i className="fa-brands fa-square-twitter"></i>
          </NavLink>
        </li>
        <li>
          <NavLink classNameName='youtube' to = 'https://www.youtube.com' >
          <i className="fa-brands fa-square-youtube"></i>
          </NavLink>
        </li>
      </ul>
      <p className="text">
      the easy and fast way to send and receive money online. With Cash App, you can send money to friends and family, pay bills,with few taps on your smartphone.
      </p>
    </div>
    <div className="box">
      <ul className="links">
        <li><NavLink to='Dashboard'> Go To Dashboard</NavLink></li>
        <li><NavLink to='SmartCard'> Go To SmartCard</NavLink></li>
        <li><NavLink to='SmartWalet'> Go To SmartWalet</NavLink></li>
        <li><NavLink to='BoyWalet'> Go To Boy's Walet</NavLink></li>
      </ul>
    </div>
    <div className="box">
      <div className="line">
        <i className="fas fa-map-marker-alt fa-fw"></i>
        <div className="info">Egypt, Giza, Inside The Sphinx, Room Number 220</div>
      </div>
      <div className="line">
        <i className="far fa-clock fa-fw"></i>
        <div className="info">Business Hours: From 10:00 To 18:00</div>
      </div>
      <div className="line">
        <i className="fas fa-phone-volume fa-fw"></i>
        <div className="info">
          <span>+20123456789</span>
          <span>+20198765432</span>
        </div>
      </div>
    </div>
    <div className="box footer-qr">
      <img src={qr} alt="" />
      <p> Scan And Download the App</p>
    </div>
  </div>
  <p className="copyright">Made With &lt;3 By Tap Cash</p>
</div>

  );
};

export default Footer;



