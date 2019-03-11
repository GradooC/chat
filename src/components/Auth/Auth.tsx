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
  const [inputValue, setInputValue] = useState({
    name: {
      value: "",
      validation: {
        required: true
      }
    },
    password: {
      value: "",
      validation: {
        required: true,
        minLength: 6
      }
    },
    confirmPassword: {
      value: "",
      validation: {
        required: true,
        isTheSame: true
      }
    }
  });

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // const newState = { ...inputValue, [field]: { ...inputValue[field], value: e.target.value } };
    setInputValue({ ...inputValue, [field]: e.target.value });
  };

  return (
    <Paper className={classes.root} elevation={10}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={( e: React.ChangeEvent<{}>, value: any) => setValue(value)}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="sign in" />
          <Tab label="sign up" />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <SignIn
          handleChange={handleChange}
          password={inputValue.password.value}
          name={inputValue.name.value}
        />
      )}
      {value === 1 && (
        <SignUp
          handleChange={handleChange}
          password={inputValue.password.value}
          confirmPassword={inputValue.confirmPassword.value}
          name={inputValue.name.value}
        />
      )}
    </Paper>
  );
};

export default Auth;
