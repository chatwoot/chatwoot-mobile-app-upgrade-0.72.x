import { combineReducers } from 'redux';

import authSlice from './authSlice';
import settingsSlice from './settingsSlice';


export const rootReducer = combineReducers({
  auth: authSlice,
  settings: settingsSlice,
});
