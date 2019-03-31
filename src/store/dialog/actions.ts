import {
  FETCH_MESSAGES_FAILURE,
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  SEND_MESSAGE_TO_STATE,
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

const sendMessageToState = (data: MessageInfo): MessagesActions => ({
  type: SEND_MESSAGE_TO_STATE,
  payload: data
})

export const sendMessage = (data: MessageInfo): ThunkAction<
  void,
  MessagesState,
  null,
  MessagesActions
> => async dispatch => {
  dispatch(sendMessageToState(data));
  try {
    await axios.post(routes.messagesRoute(), data);
  } catch (e) {
    console.log('error');
  }
};

export type SendMessageType = typeof sendMessage;