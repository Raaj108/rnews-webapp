import headlineReducer from './headlineReducer';
import articleReducer from './articleReducer';
import regionReducer from './regionReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  headlines:headlineReducer,
  article:articleReducer,
  region:regionReducer
});

export default rootReducer;