import React from 'react'
import Choosezocket from './main_components/Choosezocket'
import Purpose from './main_components/Purpose'
import Register from './main_components/Register'
import Bestfeatures from './main_components/Bestfeatures';
import Runads from './main_components/Runads';

import Easy from "../assets/Group 13872.png";
import Review from './main_components/Review';

const Main = () => {
    return (
        <div>
            <Register/>
            <Purpose/>
            <Choosezocket/>
            <img src={Easy} alt="3 Easy Steps" style={{ position:"absolute", top:"2512px", left:"53px"}} />
            <Bestfeatures/>
            <Runads/>
            <Review/>
        </div>
    )
}

export default Main
