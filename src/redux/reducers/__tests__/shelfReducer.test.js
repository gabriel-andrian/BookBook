import { ADD_BOOK, REMOVE_BOOK, MOVE_BOOK } from '../../actions';
import shelfReducer from '../shelfReducer';

const newBook = { id: 'id_teste', title: 'new_book', shelf: 1 };
const oldBook = { id: 'old_id_teste', title: 'old_book', shelf: 1 };
const oldBook2 = { id: 'old_id_teste_2', title: 'old_book_2', shelf: 3 };

describe(ADD_BOOK, () => {
  it('Adiciona o primeiro livro', () => {
    const action = { type: ADD_BOOK, book: newBook };
    const shelfReducerRes = shelfReducer([], action);

    expect(shelfReducerRes).toStrictEqual([newBook]);
  });

  it('Adiciona um novo livro a uma lista ja existente', () => {
    const action = { type: ADD_BOOK, book: newBook };
    const shelfReducerRes = shelfReducer([oldBook], action);

    expect(shelfReducerRes).toStrictEqual([oldBook, newBook]);
  });
});

describe(REMOVE_BOOK, () => {
  it('Remove um livro de uma lista com um livro', () => {
    const action = { type: REMOVE_BOOK, bookID: 'old_id_teste' };
    const shelfReducerRes = shelfReducer([oldBook], action);

    expect(shelfReducerRes).toStrictEqual([]);
  });

  it('Remove um livro de uma lista com mais de um livro', () => {
    const action = { type: REMOVE_BOOK, bookID: 'old_id_teste_2' };
    const shelfReducerRes = shelfReducer([oldBook, oldBook2, newBook], action);

    expect(shelfReducerRes).toStrictEqual([oldBook, newBook]);
  });
});

describe(MOVE_BOOK, () => {
  const movedBook = { id: 'id_teste', title: 'new_book', shelf: 2 };

  it('Move um livro da estate 1 para a 2, tendo apenas 1 livro na estante', () => {
    const action = { type: MOVE_BOOK, bookID: 'id_teste', shelfToMove: 2 };
    const shelfReducerRes = shelfReducer([newBook], action);

    expect(shelfReducerRes).toStrictEqual([movedBook]);
  });

  it('Move um livro da estate 1 para a 2, tendo mais livros na estante', () => {
    const action = { type: MOVE_BOOK, bookID: 'id_teste', shelfToMove: 2 };
    const shelfReducerRes = shelfReducer([oldBook, oldBook2, newBook], action);

    expect(shelfReducerRes).toStrictEqual([oldBook, oldBook2, movedBook]);
  });
});
