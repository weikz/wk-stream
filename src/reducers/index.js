import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import drama from './drama';
import dramas from './dramas';

const rootReducer = combineReducers({
  drama,
  dramas,
  routing,
});


export default rootReducer;
  