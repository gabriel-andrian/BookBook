export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (token, user) => ({
  type: LOGIN,
  token,
  user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const ADD_BOOK = 'ADD_BOOK';
export const MOVE_BOOK = 'MOVE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (book, shelf = 1) => ({
  type: ADD_BOOK,
  book,
  shelf,
});

export const moveBook = (bookID, shelfToMove = 1) => ({
  type: MOVE_BOOK,
  bookID,
  shelfToMove,
});

export const removeBook = (bookID) => ({
  type: REMOVE_BOOK,
  bookID,
});
