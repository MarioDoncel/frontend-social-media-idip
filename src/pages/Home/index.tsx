import React from 'react';
import { Outlet } from 'react-router-dom';
import AsideLeft from '../../components/AsideLeft';
import Header from '../../components/Header';

import { HomeContainer } from './style';

export const Home: React.FC = () => {
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
