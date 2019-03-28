import {
  FETCH_MESSAGES_FAILURE,
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  MessagesActions,
  MessageInfo,
  MessagesState
} from "./types";
import { ThunkAction } from "redux-thunk";
import routes from "../../routes";
import axios from "axios";

const fetchMessagesRequest = (): MessagesActions => ({
  type: FETCH_MESSAGES_REQUEST
});

const fetchMessagesSuccess = (
  data: Array<MessageInfo>
): MessagesActions => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload: data
});

const fetchMessagesFailure = (): MessagesActions => ({
  type: FETCH_MESSAGES_FAILURE
});

export const fetchMessages = (): ThunkAction<
  void,
  MessagesState,
  null,
  MessagesActions
> => async dispatch => {
  dispatch(fetchMessagesRequest());
  try {
    const res = await axios.get(routes.messagesRoute());
    dispatch(fetchMessagesSuccess(res.data));
  } catch (e) {
    dispatch(fetchMessagesFailure());
  }
};

export type FetchMessagesType = typeof fetchMessages;