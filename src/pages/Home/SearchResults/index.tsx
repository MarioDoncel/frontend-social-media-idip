import React from 'react';
import { useLocation } from 'react-router';
import UserListCard from '../../../components/UserListCard';
import { MOCKUSER } from '../../../MOCK DATA/user';

import { SearchResultsContainer } from './styles';

const SearchResults: React.FC = () => {
  const { state: filter } = useLocation();

  return (
    <SearchResultsContainer>
      <UserListCard following user={MOCKUSER} />
      <UserListCard user={MOCKUSER} />
      <UserListCard following user={MOCKUSER} />
      <UserListCard user={MOCKUSER} />
      <UserListCard user={MOCKUSER} />
      <UserListCard following user={MOCKUSER} />
    </SearchResultsContainer>
  );
};

export default SearchResults;
