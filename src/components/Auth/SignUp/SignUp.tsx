import React from "react";
import { mergeDeep } from "immutable";
import checkValidity from "../../../shared/validate";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "../styles";

import { withStyles } from "@material-ui/core/styles";
import { Props, State, Input } from "../types";

interface SignUpState extends State {
  confirmPassword: Input;
}

class SignUp extends React.Component<Props, SignUpState> {

  public state: SignUpState = {
    name: {
      value: "",
      validation: {
        required: true,
        minLength: 0
      },
      error: null,
      isTouched: false
    },
    password: {
      value: "",
      validation: {
        required: true,
        minLength: 6
      },
      error: null,
      isTouched: false
    },
    confirmPassword: {
      value: "",
      validation: {
        required: true,
        minLength: 0,
        isSame: true
      },
      error: null,
      isTouched: false
    }
  };

  private isSubmitDisable = (): boolean => {
    return ['name', 'password', 'confirmPassword'].some(
      field =>
        this.state[field].error !== null || !this.state[field].isTouched
    );
  };

  private handleChange = (field: keyof State) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.persist();
    const { value } = e.target;
    this.setState(
      (prevState: State): State =>
        mergeDeep(prevState, {
          [field]: {
            value: value,
            error: checkValidity(
              value,
              prevState[field].validation,
              prevState.password.value
            ),
            isTouched: true
          }
        })
    );
  };

  public render() {
    const { name, password, confirmPassword } = this.state;
    const {
      classes: { container, button }
    } = this.props;

    return (
      <form className={container} noValidate autoComplete="off">
        <TextField
          label="Name"
          value={name.value}
          onChange={this.handleChange("name")}
          margin="normal"
          variant="outlined"
          helperText={
            name.error === null ? "Please enter your name" : name.error
          }
          error={!!name.error}
        />
        <TextField
          label="Password"
          type="password"
          value={password.value}
          onChange={this.handleChange("password")}
          margin="normal"
          variant="outlined"
          helperText={
            password.error === null
              ? "Please enter your password"
              : password.error
          }
          error={password.error !== null}
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword.value}
          onChange={this.handleChange("confirmPassword")}
          margin="normal"
          variant="outlined"
          helperText={
            confirmPassword.error === null
              ? "Please repeat your password"
              : confirmPassword.error
          }
          error={confirmPassword.error !== null}
        />
        <Button
          variant="contained"
          color="primary"
          className={button}
          disabled={this.isSubmitDisable()}
        >
          Sign Up
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(SignUp);
