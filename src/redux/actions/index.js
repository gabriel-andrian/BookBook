export const ADD_BOOK = 'ADD_BOOK';
export const MOVE_BOOK = 'MOVE_BOOK';

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const moveBook = (bookShelf) => ({
  type: MOVE_BOOK,
  bookShelf,
});
