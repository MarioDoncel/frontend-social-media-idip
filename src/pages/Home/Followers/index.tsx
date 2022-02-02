import React from 'react';
import UserListCard from '../../../components/UserListCard';
import { MOCKUSER } from '../../../MOCK DATA/user';

import { FollowersContainer } from './styles';

const Followers: React.FC = () => {
  return (
    <FollowersContainer>
      <UserListCard following user={MOCKUSER} />
      <UserListCard user={MOCKUSER} />
      <UserListCard following user={MOCKUSER} />
    </FollowersContainer>
  );
};

export default Followers;
