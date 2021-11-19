import React from 'react';
import Rectangular from './Rectangular';

import Mobile from "../../assets/Group 16691.png";
import What from "../../assets/what.png"
import Our from "../../assets/Our.png";
import Logo1 from "../../assets/Group 16666.png";
import Logo2 from "../../assets/image 675.png";
import Logo3 from "../../assets/image 676.png";
import Logo1heading from "../../assets/Campaign.png";
import Logo2heading from "../../assets/StoppingAds.png";
import Logo3heading from "../../assets/Group16671.png";




const Purpose = () => {
    return (
        <div className="purpose">
            <img src={What} alt="what we do for you" className="what"/>
            <img src={Our} alt="Our Services" className="our"/>
            <img src={Mobile} alt="mobile" className="mobile"/>
            <Rectangular c={"active"} image={Logo1} active={true} heading={Logo1heading} c2={"recHead"} />
            <Rectangular c={"logo2"} image={Logo2} active={false} heading={Logo2heading} c2={"recHead"} />
            <Rectangular c={"logo3"} image={Logo3} active={false} heading={Logo3heading} c2={"rec"}/>
        </div>
    )
}

export default Purpose
