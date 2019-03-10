import React from 'react';
import { NavLink } from "react-router-dom";
import classes from './NavItem.module.css';

interface NavItemProps {
  children: string,
  link: string
}

const NavItem: React.FunctionComponent<NavItemProps> = props => {
  const { link, children } = props;
  const { item } = classes;

  return (
    <NavLink to={link} className={item}>
      {children}
    </NavLink>
  );
};

export default NavItem;