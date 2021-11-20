import React from 'react'

import Copyright from "../assets/copyright.png"
import privacy from "../assets/Privacy.png";
import facebooklogo from "../assets/Vector-5.png";
import instalogo from "../assets/Vector-4.png";
import linkedinlogo from "../assets/Vector-3.png";
import border from "../assets/_.png";

const Footer = () => {
    return (
        <div className="footer">
            <img src={privacy} alt="privacy"  style={{ position:"absolute", left:"136px", top:"35px" }} />
            <img src={privacy} alt="privacy"  style={{ position:"absolute", left:"656px", top:"35px" }}   />
            <img src={facebooklogo} alt="fblogo" style={{ position:"absolute", left:"1193px", top:"35px" }} />
            <img src={border} alt="border" style={{ position:"absolute", left:"1223px", top:"35px" }} />
            <img src={instalogo} alt="instalogo" style={{ position:"absolute", left:"1238px", top:"35px" }} />
            <img src={border} alt="border" style={{ position:"absolute", left:"1267px", top:"35px" }} />
            <img src={linkedinlogo} alt="linkedinlogo" style={{ position:"absolute", left:"1282px", top:"35px" }} />
        </div>
    )
}

export default Footer
