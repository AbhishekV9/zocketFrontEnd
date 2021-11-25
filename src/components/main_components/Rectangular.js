import React from 'react';
import Left from '../../assets/Rectangle 3753.png';

const Rectangular = (props) => {
  return (
    <div id="rectangle-box" className={props.c}>
      {props.active ? <img src={Left} alt="left border" /> : null}
      <img className="logo4" src={props.image} alt="logo" />
      <h4 className="recHead">{props.heading}</h4>
      <p className="des">{props.Description}</p>
    </div>
  );
};

export default Rectangular;
