import React from 'react'

import logo from "../assets/Group 12428.png";
import home from "../assets/Home.png";
import about from "../assets/About.png";
import blog from "../assets/Blog.png";
import jobs from "../assets/Jobs.png";
import faq from "../assets/FAQ’s.png";
import contact from "../assets/Contact.png";
import vector from "../assets/Vector 3.png";
import selected from "../assets/Rectangle 3547.png";

const Header = () => {
    return (
        <div>
            <img className="logo" src={logo} alt="zocket-logo" />
            <img className="nav" src={home} alt="home" style={{ left:"850px" }} />
            <img className="nav" src={about} alt="about" style={{ left:"923px" }} />
            <img className="nav" src={blog} alt="blog" style={{ left:"996px" }} />
            <img className="nav" src={jobs} alt="jobs" style={{ left:"1059px" }} />
            <img className="nav" src={faq} alt="faq" style={{ left:"1122px" }} />
            <img className="nav" src={contact} alt="contact" style={{ left:"1193px" }} />
            <img className="bar" src={vector} alt="vector" style={{ left:"81px" }} />
            <img className="bar" src={selected} alt="selected" style={{ left:"841px" }} />
        </div>
    )
}

export default Header
