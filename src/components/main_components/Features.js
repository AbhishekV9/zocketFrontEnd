import React from 'react'

const Features = (props) => {
    return (
        <div >
            {
            props.left ?
            <div className={props.c}>
                <img src={props.logo} style={{ position:"absolute",top:"150px", left:"75px"}}/>
                <img src={props.description} style={{ position:"absolute",top:"240px", left:"75px"}} />
                <img src={props.image} style={{ position:"absolute",left:"600px", height:"710px",width:"730px"}} />
            </div>
            :
            <div className={props.c}>
                <img src={props.logo} style={{ position:"absolute",top:"180px", left:"750px"}}/>
                <img src={props.description} style={{ position:"absolute",top:"260px", left:"750px"}} />
                <img src={props.image} style={{ position:"absolute",left:"50px"}} />
            </div>
        }
        </div>
    )
}

export default Features
