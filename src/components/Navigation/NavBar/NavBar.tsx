import React from "react";

import classes from "./NavBar.module.css";
import NavItem from "../NavItem/NavItem";

interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = props => {
  const { nav } = classes;

  return (
    <ul className={nav}>
      <NavItem link="/auth/sign-in">SignIn</NavItem>
      <NavItem link="/search">Search User</NavItem>
      <NavItem link="/chats">Chat List</NavItem>
      <NavItem link="/dialog">Dialog</NavItem>
    </ul>
  );
};

export default NavBar;
