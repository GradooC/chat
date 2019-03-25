export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const HANDLE_SEARCH_INPUT = 'HANDLE_SEARCH_INPUT';
import { RequestStatus } from "../store";

export interface UserInfo {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}

export interface UsersState {
  users: Array<UserInfo>;
  requestStatus: RequestStatus;
  searchValue: string;
}

interface fetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}

interface fetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: Array<UserInfo>
}

interface fetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILURE;
}

interface handleSeacrhInput {
  type: typeof HANDLE_SEARCH_INPUT;
  payload: string; 
}

export type UsersActions =
  | fetchUsersRequestAction
  | fetchUsersSuccessAction
  | fetchUsersFailureAction
  | handleSeacrhInput;
