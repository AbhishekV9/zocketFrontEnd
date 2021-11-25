import React from 'react';
import logo from '../assets/Group 12428.png';

const Header = () => {
  return (
    <>
      <nav>
        <div className="left-nav">
          <img className="logo" src={logo} alt="zocket-logo" />
        </div>
        <div className="right-nav">
          <div className="nav" style={{ left: '850px' }}>
            Home
          </div>
          <div className="nav" style={{ left: '923px' }}>
            About
          </div>
          <div className="nav" style={{ left: '996px' }}>
            Blog
          </div>
          <div className="nav" style={{ left: '1059px' }}>
            Jobs
          </div>
          <div className="nav" style={{ left: '1122px' }}>
            FaQ's
          </div>
          <div className="nav" style={{ left: '1193px' }}>
            Contact
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
