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
  test: 10
};

const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return state;
    case SIGN_IN_SUCCESS:
      return state;
    case SIGN_IN_FAILURE:
      return state;
    case SIGN_UP_REQUEST:
      return state;
    case SIGN_UP_SUCCESS:
      return state;
    case SIGN_UP_FAILURE:
      return state;
    default:
      return state;
  }
};

export default authReducer;
