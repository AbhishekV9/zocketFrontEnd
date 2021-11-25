import React from 'react';

const Features = (props) => {
  return (
    <div>
      {props.left ? (
        <div className={props.c}>
          <img
            alt="logo"
            src={props.logo}
            style={{ position: 'absolute', top: '150px', left: '75px' }}
          />
          <h3 style={{ position: 'absolute', top: '240px', left: '75px',fontSize:"30px" }}>
            {props.heading}
          </h3>
          <p style={{ position: 'absolute', top: '310px', left: '75px',fontSize:"18px", color:" rgba(0, 0, 0, 0.55)" }}>
            {props.description}
          </p>
          <img
            alt="pic"
            src={props.image}
            style={{ position: 'absolute', left: '625px' }}
          />
        </div>
      ) : (
        <div className={props.c}>
          <img
            alt="logo"
            src={props.logo}
            style={{ position: 'absolute', top: '180px', left: '750px' }}
          />
       
            <h3 style={{ position: 'absolute', top: '270px', left: '750px',fontSize:"30px",width:"500px" }}>
              {props.heading}
            </h3>
            <p style={{ position: 'absolute', top: '330px', left: '750px',fontSize:"18px", color:" rgba(0, 0, 0, 0.55)",width:"500px" }}>
              {props.description}
            </p>
        
          <img
            alt="pic"
            src={props.image}
            style={{ position: 'absolute', left: '50px' }}
          />
        </div>
      )}
    </div>
  );
};

export default Features;
