import React from 'react';
import Post from '../../../components/Post';
import UserImage from '../../../components/UserImage';
import { MOCKUSER } from '../../../MOCK DATA/user';
import { formatDateOfBirth } from '../../../utils/formatDateOfBirth';

import { ProfileContainer } from './styles';

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <div className="info flex-center card">
        <div className="flex-center header">
          <UserImage src={MOCKUSER.profileImage} alt="Profile" />
          <h2>
            {MOCKUSER.firstName} {MOCKUSER.lastName}
          </h2>
        </div>
        <div className="data">
          <div className="item">
            <p>Date Of Birth:</p>
            <span>{formatDateOfBirth(MOCKUSER.dateOfBirth)}</span>
          </div>
          <div className="item">
            <p>Telephone:</p>
            <span>{MOCKUSER.telephone}</span>
          </div>
          <div className="item">
            <p>Email:</p>
            <span>{MOCKUSER.email}</span>
          </div>
          <div className="item">
            <p>Followings:</p>
            <span>{MOCKUSER.followings.length}</span>
          </div>
          <div className="item">
            <p>Followers:</p>
            <span>{MOCKUSER.followers.length}</span>
          </div>
        </div>
      </div>
      <Post />
    </ProfileContainer>
  );
};

export default Profile;
