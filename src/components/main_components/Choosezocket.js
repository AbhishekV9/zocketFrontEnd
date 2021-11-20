import React from 'react';
import Square from './Square';

import Heading from "../../assets/Group 13871.png";
import Logo1 from "../../assets/Group 13849.png";
import Logo2 from "../../assets/Group 13880.png";
import Logo3 from "../../assets/Group 13852.png";
import Logo4 from "../../assets/Group 13859.png";
import Logo5 from "../../assets/Group 13861.png";
import Logo6 from "../../assets/Take.png"
import heading1 from "../../assets/Get.png";
import heading2 from "../../assets/Receives.png";
import heading3 from "../../assets/Gain.png";
import heading4 from "../../assets/Group 13858.png";
import heading5 from "../../assets/Group 13862.png";
import description1 from "../../assets/Drive.png";
import description2 from "../../assets/Instantly.png";
import description3 from "../../assets/Increase.png";
import heading6 from "../../assets/Group 13881.png";




const Choosezocket = () => {
    return (
        <div>
            <img className="choose-zocketHeading"src={Heading} alt="Heading"/>
            <Square image={Logo1} c={"box1"} heading={heading1} description={description1} />
            <Square image={Logo2} c={"box2"} heading={heading2} description={description2} />
            <Square image={Logo3} c={"box3"} heading={heading3} description={description3} />
            <Square image={Logo4} c={"box4"} heading={heading4} description={""} />
            <Square image={Logo5} c={"box5"} heading={heading5} description={""} />
            <Square image={Logo6} c={"box6"} heading={heading6} description={""} />
        </div>
    )
}

export default Choosezocket
