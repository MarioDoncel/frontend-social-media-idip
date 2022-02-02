import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
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
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/followings" element={<Followings />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/theme" element={<Posts />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </HomeContainer>
  );
};
