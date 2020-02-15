import {combineReducers} from 'redux';
import spenReducers from '../../screens/Spends/store/reducers';

const createReducer = asyncReducers =>
  combineReducers({
    spenReducers,
    ...asyncReducers,
  });

export default createReducer;
