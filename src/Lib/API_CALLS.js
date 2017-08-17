/*jshint esversion: 6*/

const SERVER_ADDRESS = 'http://kanban.gstut.com';

export const addCard = (cardObj) => fetch(`${SERVER_ADDRESS}/api/cards/board/${cardObj.attachedTo}`, {
    method: 'POST',
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(cardObj)
  })
    .then(res => res.json())
    .catch(err => err);

export const updateCard = (cardObj) => fetch(`${SERVER_ADDRESS}/api/cards/${cardObj.id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(cardObj)
  })
    .then(res => res.json())
    .catch(err => err);

export const deleteCard = (id) => fetch(`${SERVER_ADDRESS}/api/cards/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  })
    .then(res => res.json())
    .catch(err => err);

export const loginUser = (email, password) => fetch(`${SERVER_ADDRESS}/api/user/login`, {
    method: 'POST',
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({email, password})
  })
    .then(res => res.json())
    .catch(err => err);

export const signupUser = userInfo => fetch(`${SERVER_ADDRESS}/api/user/new`, {
  method: 'POST',
  credentials: 'include',
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
  body: JSON.stringify(userInfo)
})
  .then(res => res.json())
  .catch(err => err);

export const logoutUser = () => fetch(`${SERVER_ADDRESS}/api/user/logout`,{credentials: 'include'
})
  .then(res => res.json())
  .catch(err => err);


export const checkLogin = () => fetch(`${SERVER_ADDRESS}/api/user/check`, {
  credentials: 'include'
})
  .then(res => res.json())
  .catch(err => err);

export const loadBoards = () => fetch(`${SERVER_ADDRESS}/api/boards/`, {
  credentials: 'include'
})
  .then(res => res.json())
  .catch(err => err);

export const loadCards = id => fetch(`${SERVER_ADDRESS}/api/cards/board/${id}`, {
  credentials: 'include'
})
  .then(res => res.json())
  .catch(err => err);

export const createBoard = boardObj => fetch(`${SERVER_ADDRESS}/api/boards/`, {
  method: 'POST',
  credentials: 'include',
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
  body: JSON.stringify(boardObj)
})
  .then(res => res.json())
  .catch(err => err);

export const addBoardUser = permissionObj => fetch(`${SERVER_ADDRESS}/api/boards/${permissionObj.BoardId}`, {
    method: 'PUT',
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(permissionObj)
  })
    .then(res => res.json())
    .catch(err => err);