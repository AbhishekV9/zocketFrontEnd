import React from 'react';
import Rectangular from './Rectangular';

import Mobile from '../../assets/Group 16691.png';
import Logo1 from '../../assets/Group 16666.png';
import Logo2 from '../../assets/image 675.png';
import Logo3 from '../../assets/image 676.png';


const Purpose = () => {
  let Description =
    'Automated campaign optimization helps you get the best return on investment for your business';
  return (
    <div className="purpose">
      <h2 className="what ">What we do for you</h2>
      <h4 className="our">Our services for you</h4>

      <img src={Mobile} alt="mobile" className="mobile" />
      <Rectangular
        c={'active'}
        image={Logo1}
        active={true}
        heading="Campaign Optimization"
        Description={Description}
      />
      <Rectangular
        c={'logo2'}
        image={Logo2}
        active={false}
        heading="Create Thumb-stopping Ads"
        Description={Description}
      />
      <Rectangular
        c={'logo3'}
        image={Logo3}
        active={false}
        heading="Multi Platform Ads"
        Description={Description}
      />
    </div>
  );
};

export default Purpose;
