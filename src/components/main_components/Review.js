import React from 'react'

import quote from "../../assets/Group 13821.png";
import review from "../../assets/Group 16558.png";
import ceo from "../../assets/Group 16557.png";
import deco from "../../assets/Group 16559.png";
const Review = () => {
    return (
        <div>
            <img src={quote} alt="quote" style={{ position:"absolute",top:"6230px",left:"452px" }} />
            <img alt="decorator" src={deco} style={{ position:"absolute",top:"6325px",left:"1111px",transform:"rotate(180deg)" }} />
            <img src={review} alt="review" style={{ position:"absolute",top:"6390px",left:"145px" }} />
            <img src={ceo} alt="CEO'S" style={{ position:"absolute",top:"6841px",left:"572px" }} />
        </div>
    )
}

export default Review
