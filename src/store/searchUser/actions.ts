import {
  UsersActions,
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  HANDLE_SEARCH_INPUT,
  UsersState,
  UserInfo
} from "./types";
import { ThunkAction } from "redux-thunk";
import routes from "../../routes";
import axios from "axios";

export const handleSearchInput = (value: string): UsersActions => ({
  type: HANDLE_SEARCH_INPUT,
  payload: value
})

export const fetchUsersRequest = (): UsersActions => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = (
  data: Array<UserInfo>
): UsersActions => ({
  type: FETCH_USERS_SUCCESS,
  payload: data
});

export const fetchUsersFailure = (): UsersActions => ({
  type: FETCH_USERS_FAILURE
});

export const fetchUsers = (): ThunkAction<
  void,
  UsersState,
  null,
  UsersActions
> => async dispatch => {
  dispatch(fetchUsersRequest());
  try {
    const res = await axios.get(routes.usersRoute());
    dispatch(fetchUsersSuccess(res.data));
  } catch (e) {
    dispatch(fetchUsersFailure());
  }
};

export type FetchUsersType = typeof fetchUsers;
export type HandleSearchInputType = typeof handleSearchInput;
