import React from 'react';
import Left from "../../assets/Rectangle 3753.png";
import Description from "../../assets/Automated.png";

const Rectangular = (props) => {
    return (
        <div id="rectangle-box"className={props.c}>
            {
                props.active ?
                <img src={Left} alt="left border" />
                : null
            }
            <img className="logo4" src={props.image} alt="logo" />
            <img className={props.c2} src={props.heading} alt="box-heading" />
            <img className="des" src={Description} alt="description"/>
        </div>
    )
}

export default Rectangular
