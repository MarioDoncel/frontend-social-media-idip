import React, { AnchorHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

interface INavItem extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  text: string;
  Icon: IconType;
}

const NavItem: React.FC<INavItem> = ({ to, text, Icon }) => {
  return (
    <NavLink
      end
      to={to}
      className={({ isActive }) => `flex-center${isActive ? ' onPage' : ''}`}
    >
      <Icon /> <span>{text}</span>
    </NavLink>
  );
};

export default NavItem;
