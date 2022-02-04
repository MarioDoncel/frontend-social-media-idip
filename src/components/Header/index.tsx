/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { KeyboardEvent, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../hooks/redux.hooks';
import { api } from '../../services/api';
import { theme } from '../../styles/theme';
import Button from '../Button';
import UserImage from '../UserImage';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const { user } = useAppSelector((state) => state.currentUser, shallowEqual);

  const handleSearchEnter = (event: KeyboardEvent) => {
    const inputSearch = event.target as HTMLInputElement;
    if (event.key === 'Enter' || event.key === '13') {
      navigate('/searchResults', {
        state: inputSearch.value,
      });
    }
  };

  const handleLogout = async () => {
    await api.delete('users/logout');
    navigate('/signin', {
      state: { status: 'error', message: 'User logged out' },
    });
  };
  const handleClickLogo = () => {
    navigate('/');
  };
  const handleClickUser = () => {
    navigate(`/profile/${user.id as string}`);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 100);
    });
  });

  return (
    <HeaderContainer className={scroll ? 'fixed' : ''}>
      <h5 onClick={handleClickLogo}>Motivate Social</h5>
      <div className="searchInput">
        <FiSearch />
        <input type="text" onKeyUp={handleSearchEnter} />
      </div>
      <Button color={theme.color.danger} text="Logout" onClick={handleLogout} />
      <UserImage
        src={user.profileImage}
        alt="ProfileImage"
        onClick={handleClickUser}
      />
    </HeaderContainer>
  );
};

export default Header;
