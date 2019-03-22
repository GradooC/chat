import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./auth/reducer";
import searchUserReducer from "./searchUser/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducet = combineReducers({
  auth: authReducer,
  searchUser: searchUserReducer
});

const store = createStore(rootReducet, composeWithDevTools(applyMiddleware(thunk)));

export default store;

export type AppState = ReturnType<typeof rootReducet>;
export type RequestStatus = 'requested' | 'successed' | 'faild' | 'none';
