import React from "react";
import { mergeDeep } from "immutable";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import checkValidity from "../../../shared/validate";
import styles from "../styles";
import { Input } from "../types";
import { signIn, SignInType } from "../../../store/auth/actions";
import { AppState } from "../../../store/store";
import { ThunkDispatch } from "redux-thunk";
import { AuthActionTypes } from "../../../store/auth/types";
import { RequestStatus } from "../../../store/store";
import { Redirect } from "react-router";
import { bindActionCreators } from "redux";

export interface SignInState {
  name: Input;
  password: Input;
  [key: string]: Input;
}

export interface SignInProps extends WithStyles<typeof styles> {
  signIn: SignInType;
  requestStatus: RequestStatus;
  isSignIn: boolean;
}

class SignIn extends React.Component<SignInProps, SignInState> {
  public state: SignInState = {
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
    }
  };

  private handleChange = (field: keyof SignInState) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.persist();
    const { value } = e.target;
    this.setState(
      (prevState: SignInState): SignInState =>
        mergeDeep(prevState, {
          [field]: {
            value: value,
            error: checkValidity(value, prevState[field].validation),
            isTouched: true
          }
        })
    );
  };

  private isSubmitDisable = (): boolean => {
    return ["name", "password"].some(
      field => this.state[field].error !== null || !this.state[field].isTouched
    );
  };

  private handleSignInButton = (): void => {
    const { name, password } = this.state;
    const userData = {
      name: name.value,
      password: password.value
    };
    this.props.signIn(userData);
  };

  public render() {
    const { name, password } = this.state;
    const {
      classes: { container, button },
      isSignIn
    } = this.props;

    return (
      <>
        {isSignIn ? <Redirect to="/logout" /> : null}
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
          <Button
            variant="contained"
            color="primary"
            className={button}
            disabled={this.isSubmitDisable()}
            onClick={this.handleSignInButton}
          >
            Sign In
          </Button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  requestStatus: state.auth.reqSignInStatus,
  isSignIn: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, null, AuthActionTypes>) =>
  bindActionCreators({ signIn }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignIn));
