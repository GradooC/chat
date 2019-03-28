import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./auth/reducer";
import searchUserReducer from "./searchUser/reducer";
import dialogReducer from './dialog/reducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  auth: authReducer,
  users: searchUserReducer,
  messages: dialogReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

export type AppState = ReturnType<typeof rootReducer>;
export type RequestStatus = 'request' | 'success' | 'fail' | 'none';
