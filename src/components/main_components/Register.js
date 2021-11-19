import React from 'react'
import DontMiss from "../../assets/Group 12459.png";
import Men from "../../assets/Group 16750.png";
import Ads from "../../assets/Facebook Ads In 30 Seconds.png"
import Vector from "../../assets/Vector.png";
import Grow from "../../assets/grow.png";
import Group from "../../assets/Group88.png";
import Vector2 from "../../assets/Vector-2.png";
import Vector1 from "../../assets/Vector-1.png";

const Register = () => {
    return (
        <div>
            <img className="dont"src={DontMiss} alt="Don't Miss"></img>
            <img src={Men} className="men" alt="detail"/>
            <img src={Ads} className="ads" alt="heading"/>
            <img src={Vector} className="vector" alt="vector"/>
            <img src={Grow} className="grow" alt="Grow Your Buisness"/>
            <input type="email" placeholder="&nbsp;&nbsp;&nbsp;Your Email ID" className="ip"/>
            <img src={Group} className="b" alt="button"/>
            <img src={Vector2} className="vector2" alt="arrow" />
            <img src={Vector1} className="vector1" alt="circle" />
        </div>
    )
}

export default Register
