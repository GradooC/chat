import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  SearchUsersActions,
  SearchUserState
} from "./types";


const initialState: SearchUserState = {
  users: [],
  requestStatus: 'none'
};

const authReducer = (
  state = initialState,
  action: SearchUsersActions
): SearchUserState => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, requestStatus: 'requested' };
    case FETCH_USERS_SUCCESS:
      return { ...state, requestStatus: 'successed', users: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, requestStatus: 'faild' };
    default:
      return state;
  }
};

export default authReducer;
