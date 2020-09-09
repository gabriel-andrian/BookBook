import { ADD_BOOK, MOVE_BOOK } from '../actions';

const defaultState = {
  shelf: [{}],
  reading: [{}],
  toRead: [{}]
}

const shelf = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {...state, [action.]};
    case MOVE_BOOK:
      //Fazer um find pra achar o livro (id unica ?)
      //e alterar a propriedade shelf dele
      //
      return;
    default:
      return state;
  }
};
