import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/NavigationBar.css';


function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // the links that will appear in the navbar
  const links = [
    { title: 'Home', path: '/' },
    { title: 'Dashboard', path: '/Dashboard' },
    { title: 'Smart Wallet', path: '/SmartWalet' },
    { title: 'Smart Card', path: '/SmartCard' },
    { title: 'Children\'s Wallet', path: '/ChildrenWallet' },
    { title: 'Download App', path: '/Download' },
    { title: 'Sign In', path: '/SignIn' },
  ];

  return (
    <div className="navigation-container">
      <nav className="navigation-bar">
        <div className="logo">Tap Cash</div>
        <div className="menu-button" onClick={toggleMenu}>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </div>
        {/* looping in the links  */}
        <ul className={`menu ${showMenu ? 'show-menu' : ''}`}>
          {links.map((link, index) => (
            // links must have key 
            <li className= {index} key={index} onClick={toggleMenu}>
              <NavLink  to={link.path}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;