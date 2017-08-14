/*jshint esversion: 6*/
import { combineReducers } from 'redux';
import users from './UserReducers';
import boards from './BoardReducers';
import popups from './PopupReducers';

export default combineReducers({
  users,
  boards,
  popups
});