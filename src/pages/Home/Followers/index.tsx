import React from 'react';
import { shallowEqual } from 'react-redux';
import UserListCard from '../../../components/UserListCard';
import { useAppSelector } from '../../../hooks/redux.hooks';

import { FollowersContainer } from './styles';

const Followers: React.FC = () => {
  const { user } = useAppSelector((state) => state.currentUser, shallowEqual);

  return (
    <FollowersContainer>
      {user.followers && user.followers[0] ? (
        user.followers?.map((userId) => (
          <UserListCard userId={userId} key={userId} />
        ))
      ) : (
        <h2>No Followers</h2>
      )}
    </FollowersContainer>
  );
};

export default Followers;
