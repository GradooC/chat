import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  UserData
} from "./types";
import routes from '../../routes';

import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { AppState } from "../store";
import axios from "axios";

const signInRequest = (): Action => ({
  type: SIGN_IN_REQUEST
});

const signInSuccess = (): Action => ({
  type: SIGN_IN_SUCCESS
});

const signInFailure = (): Action => ({
  type: SIGN_IN_FAILURE
});

const signUpRequest = (): Action => ({
  type: SIGN_UP_REQUEST
});

const signUpSuccess = (): Action => ({
  type: SIGN_UP_SUCCESS
});

const signUpFailure = (): Action => ({
  type: SIGN_UP_FAILURE
});

export const signIn = (
  userData: UserData
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  dispatch(signInRequest());
  try {
    const res = await axios.get(routes.signInRoute());
    console.log(res); // TEST
    if (res.status === 200) {
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
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  dispatch(signUpRequest());
  try {
    const res = await axios.get(routes.signUpRoute(), /*userData*/);
    console.log(res);  // TEST
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
