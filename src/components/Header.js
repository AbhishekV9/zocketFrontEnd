import React from 'react'
import logo from "../assets/Group 12428.png"

const Header = () => {
    return (
        <div>
            <img className="logo" src={logo} alt="zocket-logo" />
            <p id="home">Home</p>
            <p id="about" className="notSelected">About</p>
            <p id="blogs" className="notSelected">Blog</p>
            <p id="jobs" className="notSelected">Jobs</p>
            <p id="faq" className="notSelected">FAQ's</p>
            <p id="contact" className="notSelected">Contact</p>
            <p className="down"></p>
            <p className="selected"></p>
        </div>
    )
}

export default Header
