import React from 'react';
import { shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../hooks/redux.hooks';
import { theme } from '../../styles/theme';
import Button from '../Button';

import LoggedUser from './LoggedUser';
import Navbar from './Navbar';

import { AsideLeftContainer } from './styles';

const AsideLeft: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.currentUser, shallowEqual);
  console.log(user);
  const handleClickCreatePost = () => {
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
