import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AsideLeft from '../../components/AsideLeft';
import Header from '../../components/Header';
import Post from '../../components/Post';

import NewContext from '../../providers/NewContextProvider';

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
        <main>
          <Routes>
            <Route path="/" element={<Post />} />
            <Route path="/followers" element={<Post />} />
          </Routes>
        </main>
      </div>
    </HomeContainer>
  );
};
