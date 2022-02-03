/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { KeyboardEvent, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { theme } from '../../styles/theme';
import Button from '../Button';
import UserImage from '../UserImage';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const handleSearchEnter = (event: KeyboardEvent) => {
    const inputSearch = event.target as HTMLInputElement;
    if (event.key === 'Enter' || event.key === '13') {
      navigate('/searchResults', {
        state: inputSearch.value,
      });
    }
  };
  const handleLogout = () => {
    navigate('/signin');
  };
  const handleClickLogo = () => {
    navigate('/');
  };
  const handleClickUser = () => {
    navigate('/profile/123');
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
        src="https://github.com/MarioDoncel.png"
        alt="ProfileImage"
        onClick={handleClickUser}
      />
    </HeaderContainer>
  );
};

export default Header;
