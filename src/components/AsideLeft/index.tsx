import React from 'react';
import { theme } from '../../styles/theme';
import Button from '../Button';

import LoggedUser from './LoggedUser';
import Navbar from './Navbar';

import { AsideLeftContainer } from './styles';

const AsideLeft: React.FC = () => {
  return (
    <AsideLeftContainer>
      <LoggedUser />
      <Navbar />
      <Button
        type="button"
        text="+ POST"
        color={theme.color.primary}
        bgColor={theme.color.light}
      />
    </AsideLeftContainer>
  );
};

export default AsideLeft;
