import React from "react";
import { mergeDeep } from "immutable";
import TextField from "@material-ui/core/TextField";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import styles from "../styles";

import { Input } from "../types";
import checkValidity from "../../../shared/validate";
import { signUp, SignUpType } from "../../../store/auth/actions";
import { AppState } from "../../../store/store";
import { ThunkDispatch } from "redux-thunk";
import { AuthActionTypes } from "../../../store/auth/types";
import { RequestStatus } from "../../../store/store";
import { bindActionCreators } from "redux";

interface SignUpState {
  name: Input;
  password: Input;
  confirmPassword: Input;
  [key: string]: Input;
}

export interface SignUpProps extends WithStyles<typeof styles> {
  signUp: SignUpType;
  requestStatus: RequestStatus;
}

class SignUp extends React.Component<SignUpProps, SignUpState> {
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
    return ["name", "password", "confirmPassword"].some(
      field => this.state[field].error !== null || !this.state[field].isTouched
    );
  };

  private handleChange = (field: keyof SignUpState) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.persist();
    const { value } = e.target;
    this.setState(
      (prevState: SignUpState): SignUpState =>
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

  private handleSignUpButton = () => {
    const { name, password } = this.state;
    const userData = {
      name: name.value,
      password: password.value
    };
    this.props.signUp(userData);
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
          error={name.error !== null}
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
          onClick={this.handleSignUpButton}
        >
          Sign Up
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  requestStatus: state.auth.reqSignUpStatus
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, null, AuthActionTypes>) =>
  bindActionCreators({ signUp }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignUp));
