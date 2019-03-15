export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export interface AuthState {
  test: number // test
}

export interface UserData {
  name: string;
  password: string;
  test: number; // test
}

interface SignInRequestAction {
  type: typeof SIGN_IN_REQUEST;
  payload: UserData;
}

interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS;
}

interface SignInFailureAction {
  type: typeof SIGN_IN_FAILURE;
}

interface SignUpRequestAction {
  type: typeof SIGN_UP_REQUEST;
  payload: UserData;
}

interface SignUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
}

interface SignUpFailureAction {
  type: typeof SIGN_UP_FAILURE;
}

export type AuthActionTypes =
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailureAction
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpFailureAction;
