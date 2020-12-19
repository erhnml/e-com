import { combineReducers } from 'redux'
import basket from './basket';
import filter from './filter';

export default combineReducers({
  basket,
  filter
})