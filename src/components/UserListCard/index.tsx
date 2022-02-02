import React, { HTMLAttributes } from 'react';
import { IUser } from '../../interfaces/User';
import { theme } from '../../styles/theme';
import Button from '../Button';
import UserImage from '../UserImage';

import { UserListCardContainer } from './styles';

interface IUserListCardProps extends HTMLAttributes<HTMLDivElement> {
  user: IUser;
  following?: boolean;
}

const UserListCard: React.FC<IUserListCardProps> = ({ user, following }) => {
  return (
    <UserListCardContainer className="flex-center card">
      <div className="user flex-center">
        <UserImage src={user.profileImage} alt="ProfileImage" />
        <div className="text">
          <p>
            {user.firstName} {user.lastName}
          </p>
          <span>{user.email}</span>
        </div>
      </div>
      <Button
        text={following ? 'Unfollow' : 'Follow'}
        color={following ? theme.color.danger : theme.color.success}
        type="button"
      />
    </UserListCardContainer>
  );
};

export default UserListCard;
