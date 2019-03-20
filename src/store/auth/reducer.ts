import {
  AuthState,
  AuthActionTypes,
  SIGN_IN_REQUEST,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS
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
      return { ...state, reqSignInStatus: "requested" };
    case SIGN_IN_SUCCESS:
      return { ...state, reqSignInStatus: "successed", isAuthenticated: true };
    case SIGN_IN_FAILURE:
      return { ...state, reqSignInStatus: "faild" };
    case SIGN_UP_REQUEST:
      return { ...state, reqSignUpStatus: "requested" };
    case SIGN_UP_SUCCESS:
      return { ...state, reqSignUpStatus: "successed" };
    case SIGN_UP_FAILURE:
      return { ...state, reqSignUpStatus: "faild" };
    default:
      return state;
  }
};

export default authReducer;