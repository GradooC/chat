import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  LOGOUT,
  AuthActionTypes,
  UserData
} from "./types";
import routes from "../../routes";

import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";
import axios from "axios";

const signInRequest = (): AuthActionTypes => ({
  type: SIGN_IN_REQUEST
});

const signInSuccess = (): AuthActionTypes => ({
  type: SIGN_IN_SUCCESS
});

const signInFailure = (): AuthActionTypes => ({
  type: SIGN_IN_FAILURE
});

const signUpRequest = (): AuthActionTypes => ({
  type: SIGN_UP_REQUEST
});

const signUpSuccess = (): AuthActionTypes => ({
  type: SIGN_UP_SUCCESS
});

const signUpFailure = (): AuthActionTypes => ({
  type: SIGN_UP_FAILURE
});

const logout = (): AuthActionTypes => ({
  type: LOGOUT
});

export const authCheckStatus = (): ThunkAction<
  void,
  AppState,
  null,
  AuthActionTypes
> => dispatch => {
  if (localStorage.getItem("isSignIn")) {
    dispatch(signInSuccess());
  }
};

export type AuthCheckStatus = typeof authCheckStatus;

export const onLogout = (): ThunkAction<
  void,
  AppState,
  null,
  AuthActionTypes
> => dispatch => {
  localStorage.removeItem("isSignIn");
  dispatch(logout());
};

export type OnLogout = typeof onLogout;

export const signIn = (
  userData: UserData
): ThunkAction<void, AppState, null, AuthActionTypes> => async dispatch => {
  dispatch(signInRequest());
  try {
    const res = await axios.get(routes.signInRoute());
    if (res.status === 200) {
      localStorage.setItem("isSignIn", "true");
      dispatch(signInSuccess());
    } else {
      dispatch(signInFailure());
    }
  } catch (e) {
    dispatch(signInFailure());
  }
};

export type SignIn = typeof signIn;

export const signUp = (
  userData: UserData
): ThunkAction<void, AppState, null, AuthActionTypes> => async dispatch => {
  dispatch(signUpRequest());
  try {
    const res = await axios.get(routes.signUpRoute() /*userData*/);
    if (res.status === 200) {
      dispatch(signUpSuccess());
    } else {
      dispatch(signUpFailure());
    }
  } catch (e) {
    dispatch(signUpFailure());
  }
};

export type SignUp = typeof signUp;
