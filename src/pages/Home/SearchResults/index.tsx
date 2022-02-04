import React, { useLayoutEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useLocation } from 'react-router';
import Loading from '../../../components/Loading';
import UserListCard from '../../../components/UserListCard';
import { useAppSelector } from '../../../hooks/redux.hooks';
import { IUser } from '../../../interfaces/User';
import { api } from '../../../services/api';

import { SearchResultsContainer } from './styles';

const SearchResults: React.FC = () => {
  const { state: filter } = useLocation();
  const [users, setUsers] = useState<IUser[]>();
  const { user: currentUser } = useAppSelector(
    (state) => state.currentUser,
    shallowEqual
  );

  useLayoutEffect(() => {
    (async () => {
      try {
        const usersFetch: IUser[] = await api
          .get('users')
          .then((res) => res.data);
        if (filter) {
          setUsers(
            usersFetch.filter(
              (user) =>
                new RegExp(filter as string, 'i').test(user.firstName) ||
                new RegExp(filter as string, 'i').test(user.lastName)
            )
          );
        } else {
          setUsers(usersFetch);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [filter]);
  return (
    <SearchResultsContainer>
      {users && users[0] ? (
        users.map((user: IUser) => {
          if (!user._id) return '';
          if (user._id === currentUser.id) return '';
          return (
            <UserListCard
              following={currentUser.followings?.includes(user._id)}
              userId={user._id}
              key={user._id}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </SearchResultsContainer>
  );
};

export default SearchResults;
