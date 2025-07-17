import { combineReducers } from 'redux';
import bookmarks from './bookmarks';

const rootReducer = combineReducers({
  bookmarks,
});
export default rootReducer;
