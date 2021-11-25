import React from 'react';
import Features from './Features';

import Logo1 from '../../assets/Group 13834.png';
import Logo2 from '../../assets/Group 13833.png';
import Logo3 from '../../assets/Group 13831.png';
import Image1 from '../../assets/Group 16707.png';
import Image2 from '../../assets/Group 16708.png';
import Image3 from '../../assets/Group 16747.png';

const Bestfeatures = () => {
  return (
    <div>
        <div className="h-o" >
          <h1 class="our-best">Our Best Features</h1>
        <p className="our-best-des">
          Choose and build your business in few seconds
        </p>
      </div>
      <Features
        c={'feature1'}
        left={true}
        logo={Logo1}
        heading="Localises Ad Campaigns"
        description="Get more in-store visits and bookings when you run localised ad campaigns and stand out from other local businesses in india and all over"
        image={Image1}
      />
      <Features
        c={'feature2'}
        left={false}
        logo={Logo2}
        heading="Attract new customers"
        description="Zocket helps you increase the number of calls by customers for scheduling or booking appointments and making on-call purchases."
        image={Image2}
      />
      <Features
        c={'feature3'}
        left={true}
        logo={Logo3}
        heading="No Expertise Required"
        description="Zocket is completely beginner friendly and doesn't require any previos marketing expertise to use. With easy-to-follow guides, you can instantly run ads across major platorms."
        image={Image3}
      />
    </div>
  );
};

export default Bestfeatures;
