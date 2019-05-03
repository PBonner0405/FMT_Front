import { combineReducers } from 'redux';
import userReducer from './user';
import stockReducer from './stock';
const reducer = combineReducers({
  user: userReducer,
  stocks: stockReducer
});

export default reducer;
