import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import fetchAllReducer from './fetchAllReducer';
import registerReducer from './registerReducer';

export default combineReducers({
  loginReducer,
  fetchAllReducer,
  registerReducer,
});
