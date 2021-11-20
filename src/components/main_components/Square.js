import React from 'react'

const Square = (props) => {
    const classes=`square ${props.c}`;
    return (
        <div className={classes}>
            <img src={props.image} style={{ position:"absolute",top:"35px", left:"35px" }}/>
            <img src={props.heading} style={{ position:"absolute",top:"120px", left:"35px" }} alt="Heading"/>
            {props.description.length===0 ? null : <img src={props.description}  style={{ position:"absolute",top:"160px", left:"35px" }} alt="Description" /> }
        </div>
    )
}

export default Square
