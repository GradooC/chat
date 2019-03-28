import {
  FETCH_MESSAGES_FAILURE,
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  MessagesActions,
  MessagesState
} from "./types";

const initialState: MessagesState = {
  messages: [],
  requestStatus: 'none'
};

const dialogReducer = (
  state = initialState,
  action: MessagesActions
): MessagesState => {
  switch (action.type) {
    case FETCH_MESSAGES_REQUEST:
      return { ...state, requestStatus: 'request' };
    case FETCH_MESSAGES_SUCCESS:
      return { ...state, requestStatus: 'success', messages: action.payload };
    case FETCH_MESSAGES_FAILURE:
      return { ...state, requestStatus: 'fail' };
    default:
      return state;
  }
};

export default dialogReducer;