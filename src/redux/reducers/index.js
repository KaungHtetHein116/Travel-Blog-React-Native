import {combineReducers} from 'redux';
import BlogDataReducer from './BlogDataReducer';

export default combineReducers({
  BlogData: BlogDataReducer,
});
