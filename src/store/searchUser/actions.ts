import {
  SearchUsersActions,
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  SearchUserState,
  UserInfo
} from "./types";
import { ThunkAction } from "redux-thunk";
import routes from "../../routes";
import axios from "axios";

export const fetchUsersRequest = (): SearchUsersActions => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = (
  data: Array<UserInfo>
): SearchUsersActions => ({
  type: FETCH_USERS_SUCCESS,
  payload: data
});

export const fetchUsersFailure = (): SearchUsersActions => ({
  type: FETCH_USERS_FAILURE
});

export const fetchUsers = (): ThunkAction<
  void,
  SearchUserState,
  null,
  SearchUsersActions
> => async dispatch => {
  dispatch(fetchUsersRequest());
  try {
    const res = await axios.get(routes.usersRoute());
    dispatch(fetchUsersSuccess(res.data));
  } catch (e) {
    dispatch(fetchUsersFailure());
  }
};

export type FetchUsers = typeof fetchUsers;
