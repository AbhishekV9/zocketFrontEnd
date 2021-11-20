import React from 'react';

import logo from "../../assets/Group 12503.png";
import motive from "../../assets/Zocket12.png";
import heading1 from "../../assets/Quick Links.png";
import heading2 from "../../assets/Company.png";
import heading3 from "../../assets/Group 12505.png";
import link1 from "../../assets/Home-1.png";
import link2 from "../../assets/Blog-1.png";
import link3 from "../../assets/About Us.png";
import link4 from "../../assets/Jobs-1.png";
import vector from "../../assets/Vector 10.png";
import locationlogo from "../../assets/vuesax/bulk/location.png";
import calllogo from "../../assets/vuesax/bulk/call.png";
import maillogo from "../../assets/vuesax/bulk/sms.png";
import location from "../../assets/loca.png";
import call from "../../assets/+91 9876543210/+91 9765321454.png";
import mail from "../../assets/Group 13896.png";

const About = () => {
    return (
        <div className="about">
            <img src={logo} alt="company-logo" style={{position:"absolute", left:"136px", top:"50px"}} />
            <img src={motive} alt="Motive" style={{position:"absolute", left:"136px", top:"110px"}}/>
            <img src={heading1} alt="Motive" style={{position:"absolute", left:"661px", top:"50px"}}/>
            <img src={heading2} alt="Motive" style={{position:"absolute", left:"925px", top:"50px"}}/>
            <img src={heading3} alt="Motive" style={{position:"absolute", left:"1206px", top:"50px"}}/>
            <img src={link1} alt="Link" style={{position:"absolute", left:"661px", top:"110px", borderBottom:"1px solid slategrey" }} />
            <img src={link2} alt="Link" style={{position:"absolute", left:"661px", top:"155px" }} />
            <img src={link3} alt="Link" style={{position:"absolute", left:"925px", top:"110px", borderBottom:"1px solid slategrey" }} />
            <img src={link4} alt="Link" style={{position:"absolute", left:"925px", top:"155px", borderBottom:"1px solid slategrey" }} />
            <img src={vector} alt="border" style={{position:"absolute", top:"220px", left:"135px"}} />
            
            <img src={locationlogo} alt="location-logo" style={{position:"absolute", top:"245px", left:"135px"}} />
            <img src={location} alt="location" style={{position:"absolute", top:"250px", left:"169px"}} />
            <img src={calllogo} alt="call-logo" style={{position:"absolute", top:"245px", left:"618px"}} />
            <img src={call} alt="Phone-number" style={{position:"absolute", top:"250px", left:"652px"}} />
            <img src={maillogo} alt="mail-logo" style={{position:"absolute", top:"250px", left:"1081px"}} />
            <img src={mail} alt="Email" style={{position:"absolute", top:"245px", left:"1115px"}} />
        </div>
    )
}

export default About
