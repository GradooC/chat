export const FETCH_MESSAGES_REQUEST = "FETCH_MESSAGES_REQUEST";
export const FETCH_MESSAGES_SUCCESS = "FETCH_MESSAGES_SUCCESS";
export const FETCH_MESSAGES_FAILURE = "FETCH_MESSAGES_FAILURE";
export const HANDLE_SEARCH_INPUT = 'HANDLE_SEARCH_INPUT';
import { RequestStatus } from "../store";

export interface MessageInfo {
  user_id: number;
  text: string;
  time: string;
}

export interface MessageWithAuthor extends MessageInfo {
  userName: string;
}

export interface MessagesState {
  messages: Array<MessageInfo>;
  requestStatus: RequestStatus;
}

interface fetchMessagesRequestAction {
  type: typeof FETCH_MESSAGES_REQUEST;
}

interface fetchMessagesSuccessAction {
  type: typeof FETCH_MESSAGES_SUCCESS;
  payload: Array<MessageInfo>
}

interface fetchMessagesFailureAction {
  type: typeof FETCH_MESSAGES_FAILURE;
}


export type MessagesActions =
  | fetchMessagesRequestAction
  | fetchMessagesSuccessAction
  | fetchMessagesFailureAction