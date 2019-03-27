import {
  AuthState,
  AuthActionTypes,
  SIGN_IN_REQUEST,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  LOGOUT
} from "./types";

const initialState: AuthState = {
  isAuthenticated: false,
  reqSignInStatus: "none",
  reqSignUpStatus: "none"
};

const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return { ...state, reqSignInStatus: "request" };
    case SIGN_IN_SUCCESS:
      return { ...state, reqSignInStatus: "success", isAuthenticated: true };
    case SIGN_IN_FAILURE:
      return { ...state, reqSignInStatus: "fail" };
    case SIGN_UP_REQUEST:
      return { ...state, reqSignUpStatus: "request" };
    case SIGN_UP_SUCCESS:
      return { ...state, reqSignUpStatus: "success" };
    case SIGN_UP_FAILURE:
      return { ...state, reqSignUpStatus: "fail" };
    case LOGOUT: // Нужно ли чистить весть стэйт при логауте?
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;