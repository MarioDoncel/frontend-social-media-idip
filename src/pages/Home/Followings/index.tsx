import React from 'react';
import UserListCard from '../../../components/UserListCard';
import { MOCKUSER } from '../../../MOCK DATA/user';

import { FollowingsContainer } from './styles';

const Followings: React.FC = () => {
  return (
    <FollowingsContainer>
      <UserListCard following user={MOCKUSER} />
      <UserListCard following user={MOCKUSER} />
      <UserListCard following user={MOCKUSER} />
    </FollowingsContainer>
  );
};

export default Followings;
