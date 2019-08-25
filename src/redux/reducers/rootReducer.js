import headlineReducer from './headlineReducer';
import articleReducer from './articleReducer';
import regionReducer from './regionReducer';
import searchReducer from './searchReducer';
import categoryReducer from './categoryReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  headlines: headlineReducer,
  article: articleReducer,
  region: regionReducer,
  search: searchReducer,
  categories: categoryReducer
});

export default rootReducer;
