import { createStore, combineReducers } from 'redux';
import authReducer from './auth/reducer';

const rootReducet = combineReducers({
  auth: authReducer
})

export type AppState = ReturnType<typeof rootReducet>

const store = createStore(rootReducet);

export default store;