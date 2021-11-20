import React from 'react'

import image1 from "../../assets/Group 16748.png";
import heading from "../../assets/Group 16593.png";


const Runads = () => {
    return (
        <div className="run-ads">
            <img alt="Mobile" src={image1} style={{ position:"absolute" ,left:"93px"}} />
            <img alt="heading" src={heading} style={{ position:"absolute" ,left:"710px", top:"130px"}} />
        </div>
    )
}

export default Runads
