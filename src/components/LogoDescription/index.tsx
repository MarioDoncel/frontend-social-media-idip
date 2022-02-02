import React from 'react';
import { GiMightyForce } from 'react-icons/gi';

import { LogoDescriptionContainer } from './styles';

const LogoDescription: React.FC = () => {
  return (
    <LogoDescriptionContainer className="flex-center">
      <GiMightyForce />
      <h1>MOTIVATE </h1>
      <h1> SOCIAL</h1>
      <hr />
      <p>
        A social media to post encouraging texts and images that can help people
        reach their better version of themselves
      </p>
    </LogoDescriptionContainer>
  );
};

export default LogoDescription;
