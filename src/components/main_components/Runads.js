import React from 'react'

import image1 from "../../assets/Group 16748.png";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";

const Runads = () => {
    return (
        <div className="run-ads">
            <img alt="Mobile" src={image1} style={{ position:"absolute" ,left:"93px"}} />
            <div style={{
                height:"235px",
                width:"566px",
                position:"absolute" 
                ,left:"710px", 
                top:"130px"
            }}>
                <h1 style={{
                    fontSize:"50px",
                    color:"white",
                    position:"absolute",
                    top:"60px"
                }}>Run your ads in seconds</h1>
                <p style={{
                    position:"absolute",
                    top:"150px",
                    fontSize:"18px",
                    color:"white",
                    fontStyle:"normal",
                    width:"500px"
                }}>Download the Zocket App and run, manage and track all your ads in a single place.</p>
                <img style={{
                    height:"65px",
                    width:"200px",
                    borderRadius:"15px",
                    position:"absolute",
                    top:"250px",
                    left:"0"
                }}src={google} alt="Googgle Play Store"/>
                 <img style={{
                    height:"65px",
                    width:"200px",
                    borderRadius:"15px",
                    position:"absolute",
                    top:"250px",
                    left:"220px"
                }}src={apple} alt="Googgle Play Store"/>
            </div>

        </div>
    )
}

export default Runads
