import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import counterReducer from './counterSlice';

export const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

export default rootReducer;
