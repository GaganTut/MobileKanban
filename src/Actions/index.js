/*jshint esversion :6*/
import * as types from '../Constants';
import * as API from '../Lib/API_CALLS';

export const loadApp = () => dispatch => {
  dispatch({type: types.FETCHING_IN_PROGRESS});
  return API.checkLogin()
  .then(res => {
    dispatch({type: types.FETCHING_DONE});
    if (res.success) {
      dispatch(loadBoards());
      dispatch({type: types.LOG_IN, user: res.user});
    }
    dispatch({type: types.AUTH_CHECKED});
  });
};

export const loadBoards = () => dispatch => {
  dispatch({type: types.FETCHING_IN_PROGRESS});
  return API.loadBoards()
  .then(res => {
    dispatch({type: types.FETCHING_DONE});
    if (res.success) {
      dispatch({type: types.CLOSE_FORMS});
      dispatch({type: types.LOAD_BOARDS, allBoards: res.boards});
    }
  });
};

export const refreshBoards = () => dispatch => {
  return API.loadBoards()
  .then(res => {
    if (res.success) {
      dispatch({type: types.LOAD_BOARDS, allBoards: res.boards});
    }
  });
};

export const login = authObj => dispatch => {
  dispatch({type: types.FETCHING_IN_PROGRESS});
  return API.login(authObj)
  .then(res => {
    dispatch({type: types.FETCHING_DONE});
    if (res.success) {
      dispatch({type: types.CLOSE_FORMS});
      dispatch(loadBoards());
      dispatch({type: types.LOG_IN, user: res.user});
    } else {
      dispatch({type: types.THROW_ERROR, error: 'Login Failed'});
    }
  });
};

export const logout = () => dispatch => {
  dispatch({type: types.FETCHING_IN_PROGRESS});
  API.logoutUser()
  .then(() => {
    dispatch({type: types.FETCHING_DONE});
    dispatch({type: types.LOG_OUT});
  });
};

export const register = userInfo => dispatch => {
  dispatch({type: types.FETCHING_IN_PROGRESS});
  API.signupUser(userInfo)
    .then(res => {
      dispatch({type: types.FETCHING_DONE});
      if (res.success) {
        dispatch({type: types.CLOSE_FORMS});
        dispatch(login({email: userInfo.email, password: userInfo.password}));
      } else {
        dispatch({type: types.THROW_ERROR, error: 'Sign Up Failed'});
      }
    });
};

export const loadCards = (boardId) => dispatch => {
  dispatch({type: types.FETCHING_IN_PROGRESS});
  return API.loadCards(boardId)
  .then(res => {
    dispatch({type: types.FETCHING_DONE});
    if (res.success) {
      dispatch({type: types.LOAD_CARDS, cards: res.cards});
    }
  });
};

export const deleteCard = id => dispatch => {
  dispatch({type: types.FETCHING_IN_PROGRESS});
  return API.deleteCard(id)
    .then(res => {
      dispatch({type: types.FETCHING_DONE});
      if (res.success) {
        dispatch({type: types.DELETE_CARD, id});
      } else {
        dispatch({type: types.THROW_ERROR, error: 'Card could not be deleted'});
      }
    });
};

export const updateCard = card => dispatch => {
  dispatch({type: types.FETCHING_IN_PROGRESS});
  return API.updateCard(card.id, card)
    .then(res => {
      dispatch({type: types.FETCHING_DONE});
      if (res.success) {
        dispatch({type: types.UPDATE_CARD, card: res.card});
      } else {
        dispatch({type: types.THROW_ERROR, error: 'Card could not be updated'});
      }
    });
};

export const addCard = card => {
  return dispatch => {
    dispatch({type: types.FETCHING_IN_PROGRESS});
    return API.addCard(card)
    .then(res => {
      dispatch({type: types.FETCHING_DONE});
      if (res.success) {
        dispatch({type: types.ADD_CARD, card: res.card});
        dispatch({type: types.CLOSE_FORMS});
      } else {
        dispatch({type: types.THROW_ERROR, error: 'Failed to add card'});
      }
    });
  };
};

export const closeError = () => dispatch => dispatch({type: types.CLOSE_ERROR});

export const createBoard = title => dispatch => {
  dispatch({type: types.FETCHING_IN_PROGRESS});
  return API.createBoard({title})
  .then(res => {
    dispatch({type: types.FETCHING_DONE});
    if (res.success) {
      dispatch({type: types.CREATE_BOARD, boards: res.boards});
      dispatch({type: types.CLOSE_FORMS});
      dispatch(refreshBoards());
    } else {
      dispatch({type: types.THROW_ERROR, error: 'Failed to create board'});
    }
  });
};

export const addBoardUser = permissionObj => dispatch => {
  dispatch({type: types.FETCHING_IN_PROGRESS});
  return API.addBoardUser(permissionObj)
  .then(res => {
    dispatch({type: types.FETCHING_DONE});
    if (res.success) {
      dispatch(refreshBoards());
    } else {
      dispatch({type: types.THROW_ERROR, error: 'Failed to create board'});
    }
  });
};

export const openBoardForm = () => dispatch => dispatch({type: types.OPEN_BOARD_FORM});

export const closeForms = () => dispatch => dispatch({type: types.CLOSE_FORMS});

export const openCardForm = () => dispatch => dispatch({type: types.OPEN_CARD_FORM});

export const openLoginForm = () => dispatch => dispatch({type: types.OPEN_LOGIN_FORM});

export const openSignupForm = () => dispatch => dispatch({type: types.OPEN_SIGNUP_FORM});

export const openPermissionForm = () => dispatch => dispatch({type: types.OPEN_PERMISSION_FORM});