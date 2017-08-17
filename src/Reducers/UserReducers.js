/*jshint esversion: 6*/

import * as types from '../Constants';

const initialState = {
  loggedIn: false,
  loggedEmail: null,
  loggedFullname: null,
  authChecked: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_CHECKED :
      return Object.assign({}, state, {
        authChecked: true
      });
    case types.LOG_IN :
      return Object.assign({}, state, {
        loggedIn: true,
        loggedEmail: action.user.email,
        loggedFullname: action.user.fullname
      });

    case types.LOG_OUT :
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
};