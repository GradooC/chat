import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  HANDLE_SEARCH_INPUT,
  UsersActions,
  UsersState
} from "./types";


const initialState: UsersState = {
  users: [],
  requestStatus: 'none',
  searchValue: ''
};

const authReducer = (
  state = initialState,
  action: UsersActions
): UsersState => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, requestStatus: 'request' };
    case FETCH_USERS_SUCCESS:
      return { ...state, requestStatus: 'success', users: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, requestStatus: 'fail' };
    case HANDLE_SEARCH_INPUT: 
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};

export default authReducer;
