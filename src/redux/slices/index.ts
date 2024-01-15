import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { employeesReducer } from './employeesSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  employees: employeesReducer,
});

export default rootReducer;
