import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import fetchAllReducer from './fetchAllReducer';

export default combineReducers({
  loginReducer,
  fetchAllReducer,
});
