import { combineReducers } from 'redux';
import userReducer from './user';
import informReducer from './inform';
const reducer = combineReducers({
  user: userReducer,
  inform: informReducer
});

export default reducer;
