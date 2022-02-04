import React from 'react';
import { MdOutlineRssFeed } from 'react-icons/md';
import { GiShadowFollower } from 'react-icons/gi';
import { RiUserFollowLine } from 'react-icons/ri';
import { BsFilePost } from 'react-icons/bs';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { FiSettings } from 'react-icons/fi';

import NavItem from './NavItem';

import { NavbarContainer } from './styles';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer className="card paddingZero">
      <NavItem to="/" text="Feed" Icon={MdOutlineRssFeed} />
      <NavItem to="/followers" text="Followers" Icon={GiShadowFollower} />
      <NavItem to="/followings" text="Followings" Icon={RiUserFollowLine} />
      <NavItem to="/posts" text="Posts" Icon={BsFilePost} />
      {/* <NavItem to="/theme" text="Theme" Icon={IoColorPaletteOutline} /> */}
      <NavItem to="/settings" text="Settings" Icon={FiSettings} />
    </NavbarContainer>
  );
};

export default Navbar;
