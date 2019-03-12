import React from "react";
// import cn from "classnames";
import { mergeDeep } from "immutable";
import checkValidity from "../../../shared/validate";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      alignItems: "center"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200
    },
    dense: {
      marginTop: 20
    },
    menu: {
      width: 200
    },
    button: {
      width: 210,
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 3
    }
  });

export interface Props extends WithStyles<typeof styles> {}

export interface Validation {
  required?: boolean;
  isSame?: boolean;
  minLength: number;
}

export interface Input {
  value: string;
  validation: Validation;
  error: string | null;
}

export interface State {
  name: Input;
  password: Input;
  confirmPassword: Input;
  [key: string]: any;
}

class SignUp extends React.Component<Props, State> {
  state: State = {
    name: {
      value: "",
      validation: {
        required: true,
        minLength: 0
      },
      error: null
    },
    password: {
      value: "",
      validation: {
        required: true,
        minLength: 6
      },
      error: null
    },
    confirmPassword: {
      value: "",
      validation: {
        required: true,
        minLength: 0,
        isSame: true
      },
      error: null
    }
  };

  isSubmitDisable = (): boolean => {
    return !Object.keys(this.state).every(
      field =>
        this.state[field].error === null && this.state[field].value !== ""
    );
  };

  handleChange = (field: keyof State) => (
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
            )
          }
        })
    );
  };

  render() {
    console.log(this.state);
    const { name, password, confirmPassword } = this.state;
    const {
      classes: { container, textField, dense, button }
    } = this.props;

    return (
      <form className={container} noValidate autoComplete="off">
        <TextField
          label="Name"
          value={name.value}
          onChange={this.handleChange("name")}
          margin="normal"
          variant="outlined"
          helperText={!!name.error ? name.error : "Please enter your name"} // Исправить на явное преобразование
          error={!!name.error} // Исправить на явное преобразование
        />
        <TextField
          label="Password"
          type="password"
          value={password.value}
          onChange={this.handleChange("password")}
          margin="normal"
          variant="outlined"
          helperText={
            !!password.error ? password.error : "Please enter your password"
          } // Исправить на явное преобразование
          error={!!password.error} // Исправить на явное преобразование
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword.value}
          onChange={this.handleChange("confirmPassword")}
          margin="normal"
          variant="outlined"
          helperText={
            !!confirmPassword.error // Исправить на явное преобразование
              ? confirmPassword.error
              : "Please repeat your password"
          }
          error={!!confirmPassword.error} // Исправить на явное преобразование
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
