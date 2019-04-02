export const FETCH_MESSAGES_REQUEST = "FETCH_MESSAGES_REQUEST";
export const FETCH_MESSAGES_SUCCESS = "FETCH_MESSAGES_SUCCESS";
export const FETCH_MESSAGES_FAILURE = "FETCH_MESSAGES_FAILURE";

export const HANDLE_SEARCH_INPUT = 'HANDLE_SEARCH_INPUT';

export const SEND_MESSAGE_TO_STATE = 'SEND_MESSAGE_TO_STATE';

import { RequestStatus } from "../store";

export interface MessageInfo {
  id: string;
  user_id: number;
  text: string;
  date: string;
}

export interface MessageWithAuthor extends MessageInfo {
  first_name: string;
  last_name: string;
  avatar: string | null;
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

interface sendMessageToState {
  type: typeof SEND_MESSAGE_TO_STATE;
  payload: MessageInfo;
}


export type MessagesActions =
  | fetchMessagesRequestAction
  | fetchMessagesSuccessAction
  | fetchMessagesFailureAction
  | sendMessageToState