import React, {
  HTMLAttributes,
  KeyboardEvent,
  useLayoutEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router';
import { IUser } from '../../interfaces/User';
import { api } from '../../services/api';
import { theme } from '../../styles/theme';
import Button from '../Button';
import UserImage from '../UserImage';

import { UserListCardContainer } from './styles';

interface IUserListCardProps extends HTMLAttributes<HTMLDivElement> {
  userId: string;
  following?: boolean;
  index?: number;
}

const UserListCard: React.FC<IUserListCardProps> = ({
  userId,
  following,
  index,
}) => {
  const [user, setUser] = useState<IUser>();
  const navigate = useNavigate();
  const handleClickUser = () => {
    navigate(`/profile/${userId}`);
  };
  const handlePressEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === '13') {
      navigate(`/profile/${userId}`);
    }
  };
  const handleFollowClick = () => {};
  useLayoutEffect(() => {
    (async () => {
      try {
        const userFetch: IUser = await api
          .get(`users/findbyid/${userId}`)
          .then((res) => res.data);
        setUser(userFetch);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [userId]);
  return (
    <UserListCardContainer className="flex-center card">
      <div
        className="user flex-center"
        role="button"
        onClick={handleClickUser}
        onKeyDown={handlePressEnter}
        tabIndex={index}
      >
        <UserImage src={user?.profileImage} alt="ProfileImage" />
        <div className="text">
          <p>
            {user?.firstName} {user?.lastName}
          </p>
          <span>{user?.email}</span>
        </div>
      </div>
      <Button
        text={following ? 'Unfollow' : 'Follow'}
        color={following ? theme.color.danger : theme.color.success}
        type="button"
        onClick={handleFollowClick}
      />
    </UserListCardContainer>
  );
};

export default UserListCard;
