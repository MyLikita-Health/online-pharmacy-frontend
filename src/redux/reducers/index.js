import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import appReducer from './app';
import authReducer from './auth';
const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  loadingBar: loadingBarReducer,
});
export default rootReducer;