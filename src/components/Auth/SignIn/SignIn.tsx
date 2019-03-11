import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import classes from "./SignIn.module.css";

interface SignInProps {
  handleChange: Function;
  name: string;
  password: string;
}

const SignIn: React.FunctionComponent<SignInProps> = props => {
  const { handleChange, name, password } = props;
  const { container, button } = classes;

  return (
    <form className={container} noValidate autoComplete="off">
      <TextField
        label="Name"
        value={name}
        onChange={handleChange("name")}
        margin="normal"
        variant="outlined"
        helperText="Please enter your name"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handleChange("password")}
        margin="normal"
        variant="outlined"
        helperText="Please enter your password"
      />
      <Button variant="outlined" color="primary" className={button}>
        Sign In
      </Button>
    </form>
  );
};

export default SignIn;
