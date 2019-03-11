import React from "react";
import classes from "./SignUp.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface SignUpProps {
  handleChange: Function;
  name: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FunctionComponent<SignUpProps> = props => {
  const { handleChange, name, password, confirmPassword } = props;
  const { container } = classes;

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
      <TextField
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={handleChange("confirmPassword")}
        margin="normal"
        variant="outlined"
        helperText="Please repeat your name"
      />
      <Button variant="outlined" color="primary" >
        Sign Up
      </Button>
    </form>
  );
};

export default SignUp;
