/* eslint-disable no-debugger */
/* eslint-disable no-case-declarations */
import { ADD_BOOK, MOVE_BOOK, REMOVE_BOOK } from '../actions';

const defaultState = [];

const shelfReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case MOVE_BOOK:
      const idMove = state.findIndex(({ id }) => id === action.bookID);
      const moveState = [...state];
      moveState[idMove].shelf = action.shelfToMove;
      return moveState;
    case REMOVE_BOOK:
      /* const idRemove = state.findIndex(({ id }) => id === action.bookID);
      const removeState = [...state];
      removeState.splice(idRemove, 1);
      return removeState; */
      return state.filter(({ id }) => id !== action.bookID);
    default:
      return state;
  }
};

export default shelfReducer;
