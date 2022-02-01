import React from 'react';

import LoggedUser from './LoggedUser';
import Navbar from './Navbar';

import { AsideLeftContainer } from './styles';

const AsideLeft: React.FC = () => {
  return (
    <AsideLeftContainer>
      <LoggedUser />
      <Navbar />
    </AsideLeftContainer>
  );
};

export default AsideLeft;
