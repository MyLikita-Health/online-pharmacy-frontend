import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import CartReducer from "./cartreducer"
const rootReducer = combineReducers({
  cart:CartReducer,
  loadingBar: loadingBarReducer,
});
export default rootReducer;
