export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
import { RequestStatus } from "../store";

export interface UserInfo {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}

export interface SearchUserState {
  users: Array<UserInfo>;
  requestStatus: RequestStatus;
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

export type SearchUsersActions =
  | fetchUsersRequestAction
  | fetchUsersSuccessAction
  | fetchUsersFailureAction;
