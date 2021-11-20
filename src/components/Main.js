import React from 'react'
import Choosezocket from './main_components/Choosezocket'
import Purpose from './main_components/Purpose'
import Register from './main_components/Register'
import Bestfeatures from './main_components/Bestfeatures';

import Easy from "../assets/Group 13872.png";

const Main = () => {
    return (
        <div>
            <Register/>
            <Purpose/>
            <Choosezocket/>
            <img src={Easy} style={{ position:"absolute", top:"2512px", left:"53px"}} />
            <Bestfeatures/>
        </div>
    )
}

export default Main
