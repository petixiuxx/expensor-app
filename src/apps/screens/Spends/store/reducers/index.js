import {combineReducers} from 'redux';
import spend from './spend.reducer';

const spenReducers = combineReducers({
  spend,
});
export default spenReducers;
