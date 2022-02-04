import React from 'react';
import { shallowEqual } from 'react-redux';
import UserListCard from '../../../components/UserListCard';
import { useAppSelector } from '../../../hooks/redux.hooks';

import { FollowingsContainer } from './styles';

const Followings: React.FC = () => {
  const { user } = useAppSelector((state) => state.currentUser, shallowEqual);
  return (
    <FollowingsContainer>
      {user.followings && user.followings[0] ? (
        user.followings?.map((userId) => (
          <UserListCard
            following={user.followings?.includes(userId)}
            userId={userId}
            key={userId}
          />
        ))
      ) : (
        <h2>No Followings</h2>
      )}
    </FollowingsContainer>
  );
};

export default Followings;
