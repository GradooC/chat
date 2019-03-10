import React from "react";
import classes from "./Layout.module.css";
import Navbar from "../Navigation/NavBar/NavBar";

interface LayoutProps {
  children: any;
}

const Layout: React.FunctionComponent<LayoutProps> = props => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
