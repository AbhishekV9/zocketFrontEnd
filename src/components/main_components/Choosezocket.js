import React from 'react';
import Square from './Square';

import Logo1 from '../../assets/Group 13849.png';
import Logo2 from '../../assets/Group 13880.png';
import Logo3 from '../../assets/Group 13852.png';
import Logo4 from '../../assets/Group 13859.png';
import Logo5 from '../../assets/Group 13861.png';


const Choosezocket = () => {
  return (
    <div>
      <div className="choose-zocketHeading text-capitalize">
        <h2 className="why-choose"> Why choose Zocket?</h2>
        <p className="why-choose-des">Choose and build your business in few seconds</p>
      </div>

      <Square
        image={Logo1}
        c={'box1'}
        heading="Get more customer calls"
        description="Drive more phone calls to your business with the call campaign"
      />
      <Square
        image={Logo2}
        c={'box2'}
        heading="Recieve more enquiries"
        description="Instantly respond to customer enquiries and keep track of them."
      />
      <Square
        image={Logo3}
        c={'box3'}
        heading="Gain more followers"
        description="Increase your business' reach and gain more followers"
      />
      <Square
        image={Logo4}
        c={'box4'}
        heading="Track your Ad Results"
        description="Track and compare how well your ads are performing over time"
      />
      <Square
        image={Logo5}
        c={'box5'}
        heading="Earn rewards"
        description="Earn scratch cards every time you run ads."
      />
      <Square
        // image={Logo6}
        c={'box6'}
        last={true}
        heading="Take a step forward to make your business grow"
        description="Increase your business' reach and gain more followers"
      />
    </div>
  );
};

export default Choosezocket;
