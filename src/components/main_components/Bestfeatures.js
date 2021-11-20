import React from 'react';
import Features from './Features';

import Heading from "../../assets/Group 16738.png";
import Logo1 from "../../assets/Group 13834.png";
import Logo2 from "../../assets/Group 13833.png";
import Logo3 from "../../assets/Group 13831.png";
import Description1 from "../../assets/Group 16745.png";
import Description2 from "../../assets/Group 12479.png";
import Description3 from "../../assets/Group 16744.png";
import Image1 from "../../assets/Group 16707.png";
import Image2 from "../../assets/Group 16708.png";
import Image3 from "../../assets/Group 16747.png";


const Bestfeatures = () => {
    return (
        <div>
            <img src={Heading} alt="Heading" style={{ position:"absolute", top:"3408px", left:"500px"}}/>
            <Features c={"feature1"}  left={true} logo={Logo1} description={Description1} image={Image1}/>
            <Features c={"feature2"} left={false} logo={Logo2} description={Description2} image={Image2} />
            <Features c={"feature3"}  left={true} logo={Logo3} description={Description3} image={Image3} />
        </div>
    )
}

export default Bestfeatures
