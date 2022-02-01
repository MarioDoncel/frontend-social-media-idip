import React from 'react';
import UserImage from '../../UserImage';

import { LoggedUserContainer } from './styles';

const LoggedUser: React.FC = () => {
  return (
    <LoggedUserContainer className="card flex-center">
      <UserImage src="https://github.com/MarioDoncel.png" alt="ProfileImage" />
      <div className="text">
        <p>Mario Doncel</p>
        <span>@mdoncel</span>
      </div>
    </LoggedUserContainer>
  );
};

export default LoggedUser;
