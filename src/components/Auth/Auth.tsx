import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

import classes from "./Auth.module.css";
import { Paper } from "@material-ui/core";

interface AuthProps {}

const Auth: React.FunctionComponent<AuthProps> = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper className={classes.root} elevation={20}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={(e: React.ChangeEvent<{}>, value: any) => setValue(value)}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="sign in" />
          <Tab label="sign up" />
        </Tabs>
      </AppBar>
      {value === 0 && <SignIn />}
      {value === 1 && <SignUp />}
    </Paper>
  );
};

export default Auth;
