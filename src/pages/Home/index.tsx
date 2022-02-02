import React, { useContext } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import AsideLeft from '../../components/AsideLeft';
import Header from '../../components/Header';
import Post from '../../components/Post';

import NewContext from '../../providers/NewContextProvider';
import Feed from './Feed';
import Followers from './Followers';
import Followings from './Followings';
import Posts from './Posts';
import Settings from './Settings';

import { HomeContainer } from './style';

export const Home: React.FC = () => {
  const { user, setUser } = useContext(NewContext);

  const handleContext = () => {
    const newUser = { example: 'Mario' };
    setUser(newUser);
  };

  return (
    <HomeContainer>
      <Header />
      <div className="container">
        <AsideLeft />
        <Outlet />
      </div>
    </HomeContainer>
  );
};
