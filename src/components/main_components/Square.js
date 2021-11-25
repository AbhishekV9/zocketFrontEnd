import React from 'react';

const Square = (props) => {
  const classes = `square ${props.c}`;
  return (
    <>
      {props.last ? (
        <div className={classes}>
          <h4 style={{ position: 'absolute', top: '45px', left: '35px' }}>
            {props.heading}
          </h4>

          <button
            type="button"
            className="btn btn-primary btn-lg col-10 rounded-pill"
            style={{ position: 'absolute', top: '130px', left: '35px' }}
          >
            Check the App
          </button>
        </div>
      ) : (
        <div className={classes}>
          <img
            alt="logo"
            src={props.image}
            style={{ position: 'absolute', top: '35px', left: '35px' }}
          />
          <h4 style={{ position: 'absolute', top: '120px', left: '35px', fontSize:"24px" }}>
            {props.heading}
          </h4>
          <p style={{ position: 'absolute', top: '165px', left: '35px', fontSize:"16px", color:"rgba(0, 0, 0, 0.5)" }}>
            {props.description}
          </p>
        </div>
      )}
    </>
  );
};

export default Square;
