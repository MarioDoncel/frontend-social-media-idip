import React, { HTMLAttributes, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router';
import { IUser } from '../../interfaces/User';
import { theme } from '../../styles/theme';
import Button from '../Button';
import UserImage from '../UserImage';

import { UserListCardContainer } from './styles';

interface IUserListCardProps extends HTMLAttributes<HTMLDivElement> {
  user: IUser;
  following?: boolean;
  index?: number;
}

const UserListCard: React.FC<IUserListCardProps> = ({
  user,
  following,
  index,
}) => {
  const navigate = useNavigate();
  const handleClickUser = () => {
    navigate('/profile/12');
  };
  const handlePressEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === '13') {
      navigate('/profile/12');
    }
  };
  return (
    <UserListCardContainer className="flex-center card">
      <div
        className="user flex-center"
        role="button"
        onClick={handleClickUser}
        onKeyDown={handlePressEnter}
        tabIndex={index}
      >
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
