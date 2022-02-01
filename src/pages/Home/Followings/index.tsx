import React from 'react';
import Button from '../../../components/Button';
import UserImage from '../../../components/UserImage';
import { theme } from '../../../styles/theme';

import { FollowingsContainer } from './styles';

const Followings: React.FC = () => {
  return (
    <FollowingsContainer>
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
        <Button text="Unfollow" color={theme.color.danger} type="button" />
      </div>
    </FollowingsContainer>
  );
};

export default Followings;
