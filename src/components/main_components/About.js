import React from 'react';

import logo from '../../assets/Group 12503.png';
import locationlogo from '../../assets/vuesax/bulk/location.png';
import calllogo from '../../assets/vuesax/bulk/call.png';
import maillogo from '../../assets/vuesax/bulk/sms.png';

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img
          src={logo}
          alt="company-logo"
          style={{ position: 'absolute', left: '136px', top: '50px' }}
        />
        <p
          style={{
            position: 'absolute',
            left: '140px',
            top: '110px',
            width: "351px",
            height: "90px",
            fontSize:"18px",
            lineHeight:"30px",
            color: "rgba(0, 0, 0, 0.5)"
          }}
        >
          Zocket will help businesses to ceate and manage their digital assets,
          create and run ad campaigns
        </p>
      </div>
      <h4 style={{ position: 'absolute', left: '661px', top: '57px',fontSize:"20px",fontWeight:"bold"}}>
        Quick Links
      </h4>{' '}
      <h5
        className="link-tags"
        style={{
          left: '661px',
          top: '110px',
        }}
      >
        Home
      </h5>
      <h5
        className="link-tags"
        style={{
          left: '661px',
          top: '155px',
        }}
      >
        Blog
      </h5>
      <h4 style={{ position: 'absolute', left: '925px', top: '57px',fontSize:"20px",fontWeight:"bold" }}>
        Company
      </h4>
      <h5
        className="link-tags"
        style={{
          left: '925px',
          top: '110px', 
        }}
      >
        About Us
      </h5>
      <h5
        className="link-tags"
        style={{
          left: '925px',
          top: '155px',
        }}
      >
        Jobs
      </h5>
      <h4 style={{ position: 'absolute', left: '1206px', top: '57px',fontSize:"20px",fontWeight:"bold" }}>
        Support
      </h4>{' '}
      <h5
        className="link-tags"
        style={{
          left: '1206px',
          top: '110px',
        }}
      >
        FaQ's
      </h5>
      <h5
        className="link-tags"
        style={{
          left: '1206px',
          top: '155px',
        }}
      >
        Contact Us
      </h5>
      <div style={{
        position:"absolute",
        border: "1px solid #E2EEFD",
        width:"1168px",
        height:"0px",
        left:"135px",
        top:"220px"
      }}></div>
      <img
        src={locationlogo}
        alt="location-logo"
        style={{ position: 'absolute', top: '245px', left: '135px' }}
      />
      <p className="link-tag" style={{
        top: '243px', 
        left: '169px',
      }}> Workafella, nungambakam, Chennai</p>

      <img
        src={calllogo}
        alt="call-logo"
        style={{ position: 'absolute', top: '245px', left: '618px' }}
      />
       <p className="link-tags" style={{
        top: '243px', 
        left: '652px',
      }}> +919876543210/ +919765321454</p>
      <img
        src={maillogo}
        alt="mail-logo"
        style={{ position: 'absolute', top: '250px', left: '1081px' }}
      />
        <p className="link-tags" style={{
        top: '247px', 
        left: '1115px',
      }}> Support@zocket.com</p>
    </div>
  );
};

export default About;
