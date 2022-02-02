import React from 'react';
import { useNavigate } from 'react-router';
import { theme } from '../../styles/theme';
import Button from '../Button';

import LoggedUser from './LoggedUser';
import Navbar from './Navbar';

import { AsideLeftContainer } from './styles';

const AsideLeft: React.FC = () => {
  const navigate = useNavigate();

  const handleClickCreatePost = () => {
    console.log('hi');
    navigate('/createpost');
  };
  return (
    <AsideLeftContainer>
      <LoggedUser />
      <Navbar />
      <Button
        type="button"
        text="+ POST"
        color={theme.color.primary}
        bgColor={theme.color.light}
        onClick={handleClickCreatePost}
      />
    </AsideLeftContainer>
  );
};

export default AsideLeft;
