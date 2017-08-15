/*jshint esversion: 6*/

import * as types from '../Constants';

const initialState = {
  fetching: false,
  showForm: false,
  showBoardForm: false,
  showCardForm: false,
  showLoginForm: false,
  showSignupForm: false,
  showPermissionForm: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_IN_PROGRESS:
      return Object.assign({}, state, {
        fetching: true
      });
    case types.FETCHING_DONE:
      return Object.assign({}, state, {
        fetching: false
      });
    case types.OPEN_BOARD_FORM :
      return Object.assign({}, initialState, {
        showForm: true,
        showBoardForm: true
      });
    case types.OPEN_CARD_FORM :
      return Object.assign({}, initialState, {
        showForm: true,
        showCardForm: true,
      });
    case types.OPEN_LOGIN_FORM :
      return Object.assign({}, initialState, {
        showForm: true,
        showLoginForm: true,
      });
    case types.OPEN_SIGNUP_FORM :
      return Object.assign({}, initialState, {
        showForm: true,
        showSignupForm: true,
      });
    case types.OPEN_PERMISSION_FORM :
      return Object.assign({}, initialState, {
        showForm: true,
        showPermissionForm: true
      });
    case types.CLOSE_FORMS :
      return Object.assign({}, initialState);
    default:
      return state;
  }
};