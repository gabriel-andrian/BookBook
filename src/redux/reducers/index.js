//To be added
import { combineReducers } from 'redux';

import session from './session';

import shelfReducer from './shelfReducer';

export default combineReducers({ shelfReducer, session });
