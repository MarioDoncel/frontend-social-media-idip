import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import UserImage from '../UserImage';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 100);
    });
  });

  return (
    <HeaderContainer className={scroll ? 'fixed' : ''}>
      <h5>Motivate Social</h5>
      <div className="searchInput">
        <FiSearch />
        <input type="text" />
      </div>
      <UserImage src="https://github.com/MarioDoncel.png" alt="ProfileImage" />
    </HeaderContainer>
  );
};

export default Header;
