import React from 'react'

import review from "../../assets/Group 16558.png";
import ceo from "../../assets/Group 16557.png";
import deco from "../../assets/Group 16559.png";

const Review = () => {
    return (
        <div>
            <div className="people-header">
                <h3 style={{ textAlign:"center", fontSize:"50px"}} >What are people saying</h3>
                <p style={{ textAlign:"center",fontSize:"22px", color:" rgba(0, 0, 0, 0.55)"}}>Check and get inspired from people saying about us</p>
            </div>
            <img alt="decorator" src={deco} style={{ position:"absolute",top:"6325px",left:"1111px",transform:"rotate(180deg)" }} />
            <img src={review} alt="review" style={{ position:"absolute",top:"6390px",left:"145px" }} />
            <img src={ceo} alt="CEO'S" style={{ position:"absolute",top:"6841px",left:"572px" }} />
        </div>
    )
}

export default Review
