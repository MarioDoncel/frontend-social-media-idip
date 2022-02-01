import React, { useContext } from 'react';
import AsideLeft from '../../components/AsideLeft';
import Header from '../../components/Header';
import Post from '../../components/Post';
import UserImage from '../../components/UserImage';

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
          <Post />
        </main>
      </div>
    </HomeContainer>
  );
};
