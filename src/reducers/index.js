import { combineReducers } from 'redux';
import newsReducer from './NewsReducer';
import singleNewsReducer from './SingleNewsReducer';

export default combineReducers({
  newsList: newsReducer,
  newsItem: singleNewsReducer,
})