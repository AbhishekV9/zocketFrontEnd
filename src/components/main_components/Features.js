import React from 'react'

const Features = (props) => {
    return (
        <div >
            {
            props.left ?
            <div className={props.c}>
                <img alt="logo" src={props.logo} style={{ position:"absolute",top:"150px", left:"75px"}}/>
                <img alt="description" src={props.description} style={{ position:"absolute",top:"240px", left:"75px"}} />
                <img alt="pic" src={props.image} style={{ position:"absolute",left:"625px"}} />
            </div>
            :
            <div className={props.c}>
                <img alt="logo" src={props.logo} style={{ position:"absolute",top:"180px", left:"750px"}}/>
                <img alt="description" src={props.description} style={{ position:"absolute",top:"260px", left:"750px"}} />
                <img  alt="pic" src={props.image} style={{ position:"absolute",left:"50px"}} />
            </div>
        }
        </div>
    )
}

export default Features
