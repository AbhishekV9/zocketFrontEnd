import React from 'react';

import facebooklogo from '../assets/Vector-5.png';
import instalogo from '../assets/Vector-4.png';
import linkedinlogo from '../assets/Vector-3.png';

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-s"
        style={{
          left: '136px',
        }}
      >
        Copyright 2021Zocket. All Rights Reserved
      </p>
      <p className="footer-s"
        style={{
          left: '656px',
        }}
      >
        Privacy Policy
      </p>
      <p className="footer-s"
        style={{
          left: '755px',
        }}
      >
        |
      </p>
      <p className="footer-s"
        style={{
          left: '760px',
        }}
      >
        Terms and conditions
      </p>
        <img className="footer-s"
          src={facebooklogo}
          alt="fblogo"
          style={{ left: '1193px' }}
        />
        <div style={{
          position:"absolute",
          left:"1223px",
          top:"33px",
          height:"26px",
          width:"2px",
          border:"0.5px solid black",
          opacity:"0.3"
        }}></div>
     
        <img className="footer-s"
          src={instalogo}
          alt="instalogo"
          style={{ left: '1238px'}}
        />
        <div style={{
          position:"absolute",
          left:"1267px",
          top:"33px",
          height:"26px",
          width:"2px",
          border:"0.5px solid black",
          opacity:"0.3"
        }}></div>
        <img className="footer-s"
          src={linkedinlogo}
          alt="linkedinlogo"
          style={{left: '1282px'}}
        />
    </div>
  );
};

export default Footer;
