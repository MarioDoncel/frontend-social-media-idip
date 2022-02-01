import React from 'react';
import Button from '../../../components/Button';
import UserImage from '../../../components/UserImage';
import { theme } from '../../../styles/theme';

import { FollowersContainer } from './styles';

const Followers: React.FC = () => {
  return (
    <FollowersContainer>
      <div className="card flex-center follower">
        <div className="user flex-center">
          <UserImage
            src="https://github.com/MarioDoncel.png"
            alt="ProfileImage"
          />
          <div className="text">
            <p>Mario Doncel</p>
            <span>@mdoncel</span>
          </div>
        </div>
        <Button text="Follow" color={theme.color.success} type="button" />
      </div>
    </FollowersContainer>
  );
};

export default Followers;
