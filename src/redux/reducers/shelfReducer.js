//To be added
import { ADD_BOOK, MOVE_BOOK, REMOVE_BOOK } from '../actions';

const defaultState = {
  reading: [],
  toRead: [],
  alreadyRead: [],
};

const defaultState2 = [];

const shelfReducer = (state = defaultState2, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    //return { ...state, [action.shelf]: [...state[action.shelf], action.book] };
    case MOVE_BOOK:
      /* const indexOfId = state
        .map((e) => {
          return e.id;
        })
        .indexOf(action.bookID); */
      const idMove = state.findIndex(({ id }) => id === action.bookID);
      const moveState = [...state];
      moveState[idMove].shelf = action.shelfToMove;
      debugger;
      return moveState;
    case REMOVE_BOOK:
      const idRemove = state.findIndex(({ id }) => id === action.bookID);
      const removeState = [...state];
      removeState.splice(idRemove, 1);
      return removeState;
    default:
      return state;
  }
};

export default shelfReducer;
