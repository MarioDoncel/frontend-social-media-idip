import React, { HTMLAttributes } from 'react';
import { IUser } from '../../../interfaces/User';
import { formatDateToPost } from '../../../utils/formatDateToPost';
import UserImage from '../../UserImage';

import { UserInfoContainer } from './styles';

interface IUserInfoProps extends HTMLAttributes<HTMLDivElement> {
  user: IUser;
  postData: string;
}

const UserInfo: React.FC<IUserInfoProps> = ({ user, postData }) => {
  return (
    <UserInfoContainer className="flex-center">
      <UserImage src={user.profileImage} alt={user.firstName} />
      <div className="info">
        <p>
          {user.lastName}, {user.firstName}
        </p>
        <span>{formatDateToPost(postData)}</span>
      </div>
    </UserInfoContainer>
  );
};

export default UserInfo;
