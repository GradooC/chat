import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./auth/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducet = combineReducers({
  auth: authReducer
});

export type AppState = ReturnType<typeof rootReducet>;

const store = createStore(rootReducet, composeWithDevTools(applyMiddleware(thunk)));

export default store;
