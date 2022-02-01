import React, { useContext } from 'react';
import { MdOutlineRssFeed } from 'react-icons/md';
import AsideLeft from '../../components/AsideLeft';
import Header from '../../components/Header';
import NewComponent from '../../components/NewComponent';
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
          <div className="post card">
            <p>POST</p>
          </div>
        </main>
      </div>
    </HomeContainer>
  );
};
