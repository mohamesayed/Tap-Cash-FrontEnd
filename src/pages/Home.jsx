import landing from '../imgs/landing.svg'
import '../style/Home.css';
// import { motion } from "framer-motion"
import About from '../component/About';
import Contact from '../component/Contact';
import Footer from '../component/Footer';
import { NavLink } from 'react-router-dom';
import dashboard from '../imgs/man-with-laptop-analyzing-infographics-diagram-bar-chart-report-flat-vector-illustration-analysis-marketing-project-manager_74855-8454.avif'
import childwallet from '../imgs/father-child-sitting-table-with-money-savings-parent-teaching-child-financial-literacy-flat-vector-illustration-family-budget-education-concept-banner-website-design-landing-web-page_179970-6546.avif'
const Home = ()=>{
  return (
    <>
    {/* start landing */}
    < div className="landing">
    <div   >
    <div className='container'>
      <div className="text">
        <h1>Welcome To Tap Cash </h1>
        <p>
        the ultimate solution for lightning-fast money transfers. With Cash App, you can easily send and receive funds, pay bills,with just a few taps on your mobile device.
        Say goodbye to long queues at banks and complicated payment systems. Cash App simplifies the process of sending money to anyone, anywhere, anytime.
        </p>
      </div>
      <div className="image">
        <img src={landing} alt="qr" />
      </div>
    </div>
    </div>
    </ div>
    {/* end landing */}


    {/* start features */}
<div className="services">
      <div className="container">
        <div className="text">
          <h5>Wallet Actions</h5>
        </div>
        <div className="icons">
          <div className="icon">
          <NavLink style={{textDecoration:'none'}} to='Dashboard'>
          <i class="fa-solid fa-plus"></i>
          </NavLink>
          
          <p>Add</p>
          </div>
          <div className="icon">
          <NavLink style={{textDecoration:'none'}} to='Dashboard'>
          <i class="fa-solid fa-paper-plane"></i>
          </NavLink>
          
          <p>Send</p>
          </div>
          <div className="icon">
          <NavLink style={{textDecoration:'none'}} to='SmartCard'>
          <i class="fa-solid fa-credit-card"></i>
          </NavLink>
          
          <p>Smart Card</p>
          </div>
        </div>
      </div>
    </div>
    {/* end features */}




    {/* start dashboard */}
    <div className="dashboard">
    <h2 class="main-heading">Dashboard</h2>
      <div className="container">

        <div className="go">
          <div className="text">
          <h5>Dashboard</h5>
          </div>
          <div className="link">
          <NavLink style={{textDecoration:'none'}} to='/Dashboard'>
          <p>See All</p>
          </NavLink>
        </div>
        </div>

        <div className="section">
        <div className="text">
          <p>The Tap Cash  dashboard is designed to be user-friendly and easy to navigate. It is accessible from the app's home screen and allows users to quickly view their account balance and recent transaction history. The dashboard also provides users with a range of tools and features to help them manage their finances, including the ability to add and withdraw funds, link bank accounts, and set up direct deposits.</p>
        </div>
        <div className="img">
          <img src={dashboard} alt="dashboard" />
        </div>
        </div>
      </div>
    </div>


    {/* end dashboard */}


    {/* start child wallet */}
    <div className="childwallet ">
    <h2 class="main-heading">children's wallet</h2>
      <div className="container">

      <div className="go">
          <div className="text">
          <h5>children's wallet</h5>
          </div>

          <div className="link">
          <NavLink style={{textDecoration:'none'}} to='/ChildrenWallet'>
          <p>See All</p>
          </NavLink>
        </div>

        </div>

        <div className="section">
        <div className="text">
          <p>With the Tap Cash  for Kids, parents can set up a digital wallet for their child, which can be accessed through a separate login on the parent's Cash App account. Parents can then transfer money to their child's digital wallet, which can be used to make purchases online and in stores. The child's spending can also be monitored through the parent's account, providing a valuable tool for teaching financial responsibility.</p>
        </div>
        <div className="img">
          <img src={childwallet} alt="childwallet" />
        </div>
        </div>
        
        
      </div>
    </div>
    {/* end child wallet  */}


    <About />

        {/* start services */}
        <div className="services">
      <div className="container">
        <div className="text">
          <h5>Services</h5>
          <NavLink style={{textDecoration:'none'}} to='/Dashboard'>
          <p>See All</p>
          </NavLink>
        </div>
        <div className="icons">
          <div className="icon">
          <NavLink  to='Dashboard'>
          <i class="fa-solid fa-wifi"></i>
          </NavLink>
          <p>Interenet</p>
          </div>
          <div className="icon">
          <NavLink to='Dashboard'>
          <i class="fa-solid fa-bag-shopping"></i>
          </NavLink>
          
          <p>Shopping</p>
          </div>
          <div className="icon">
          <NavLink to='Dashboard'>
          <i class="fa-solid fa-bolt"></i>
          </NavLink>
          
          <p>Elictricity</p>
          </div>
          <div className="icon">
          <NavLink to='Dashboard'>
          <i class="fa-solid fa-droplet"></i>
          </NavLink>
          <p>Water</p>
          </div>
        </div>
      </div>
    </div>
    {/* end  services */}
    <Contact />
    <Footer />
    </>
    
  );
};

export default Home;