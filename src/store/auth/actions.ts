import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  UserData
} from "./types";

export const signInRequest = (userData: UserData) => ({
  type: SIGN_IN_REQUEST,
  payload: userData
});

export const signInSuccess = () => ({
  type: SIGN_IN_SUCCESS,
});

export const signInFailure = () => ({
  type: SIGN_IN_FAILURE,
});

export const signUpRequest = (userData: UserData) => ({
  type: SIGN_UP_REQUEST,
  payload: userData
});

export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS,
});

export const signUpFailure = () => ({
  type: SIGN_UP_FAILURE,
});



