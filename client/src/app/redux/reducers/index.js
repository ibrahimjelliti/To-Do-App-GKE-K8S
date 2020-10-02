import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import {todoReducer} from './todoReducer';
import appReducer from './appReducer';

export default combineReducers({
  appState:appReducer,
  todoState:todoReducer,
  routing
})
