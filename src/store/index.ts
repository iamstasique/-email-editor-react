import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { emailReducer } from './emails/emails.reducer';
import { userReducer } from './users/users.reducer';

const combinedReducers = combineReducers({
  emailReducer,
  userReducer,
});

export const STORE = createStore(combinedReducers, applyMiddleware(logger))