import React, {
  HTMLAttributes,
  KeyboardEvent,
  useLayoutEffect,
  useState,
} from 'react';
import { shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';
import { IUser } from '../../interfaces/User';
import { api } from '../../services/api';
import { theme } from '../../styles/theme';
import { updateUserState } from '../../utils/updateUserState';
import Button from '../Button';
import Loading from '../Loading';
import UserImage from '../UserImage';

import { UserListCardContainer } from './styles';

interface IUserListCardProps extends HTMLAttributes<HTMLDivElement> {
  userId: string;
  index?: number;
}

const UserListCard: React.FC<IUserListCardProps> = ({ userId, index }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user: loggedUser } = useAppSelector(
    (state) => state.currentUser,
    shallowEqual
  );
  const [following, setfollowing] = useState(false);
  const [user, setUser] = useState<IUser>();
  const handleClickUser = () => {
    navigate(`/profile/${userId}`);
  };
  const handlePressEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === '13') {
      navigate(`/profile/${userId}`);
    }
  };
  const handleFollowClick = async () => {
    if (following) {
      const updatedUser: IUser = await api
        .delete(`users/${userId}/unfollow`)
        .then((res) => res.data);
      updateUserState(updatedUser, dispatch);
      setfollowing(!following);
    } else {
      const updatedUser: IUser = await api
        .post(`users/${userId}/follow`)
        .then((res) => res.data);
      updateUserState(updatedUser, dispatch);
      setfollowing(!following);
    }
  };
  useLayoutEffect(() => {
    (async () => {
      try {
        const userFetch: IUser = await api
          .get(`users/findbyid/${userId}`)
          .then((res) => res.data);
        setUser(userFetch);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
    if (loggedUser.followings?.includes(userId)) setfollowing(true);
  }, [userId]);
  return (
    <UserListCardContainer className="flex-center card">
      {loading ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </UserListCardContainer>
  );
};

export default UserListCard;
