import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  StyledDivContainerMyBookshelves,
  StyledDivContainerInputSearchBookShelf,
} from '../../style/styled';
import BookList from '../book-list';

const MyBookShelves = () => {
  const booksState = useSelector((state) => state.shelfReducer);
  debugger;
  const [filterInput, setFilterInput] = useState('');
  const [searchTheBookshelf, setsearchTheBookshelf] = useState([]);
  const [isListBooksFilter, setIsListBooksFilter] = useState(true);
  const [shelf1, setShelf1] = useState([]);
  const [shelf2, setShelf2] = useState([]);
  const [shelf3, setShelf3] = useState([]);
  const [shelf1Filter, setShelf1Filter] = useState([]);
  const [shelf2Filter, setShelf2Filter] = useState([]);
  const [shelf3Filter, setShelf3Filter] = useState([]);

  useEffect(() => {
    if (!(filterInput === '')) {
      setsearchTheBookshelf(
        booksState.filter((f) => f.title.includes(filterInput) || f.author.includes(filterInput))
      );
      setShelf1Filter(searchTheBookshelf.filter((f) => f.shelf === 1));
      setShelf2Filter(searchTheBookshelf.filter((f) => f.shelf === 2));
      setShelf3Filter(searchTheBookshelf.filter((f) => f.shelf === 3));
    } else {
      setsearchTheBookshelf([]);
      setIsListBooksFilter(true);
      setShelf1Filter([]);
      setShelf2Filter([]);
      setShelf3Filter([]);
    }
  }, [filterInput]);

  useEffect(() => {
    if (booksState.length > 0) {
      setShelf1(
        booksState.filter((book) => {
          return book.shelf === 1;
        })
      );
      setShelf2(
        booksState.filter((book) => {
          return book.shelf === 2;
        })
      );
      setShelf3(
        booksState.filter((book) => {
          return book.shelf === 3;
        })
      );
    }
  }, [booksState]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <StyledDivContainerInputSearchBookShelf>
        <form>
          <input
            type="text"
            value={filterInput}
            placeholder="Filter book on shelf"
            onChange={(e) => setFilterInput(e.target.value)}
          />
          <input type="button" disabled />
        </form>
        <ul>
          {searchTheBookshelf &&
            searchTheBookshelf.map((book, key) => {
              return (
                <li
                  key={key}
                  onClick={() => {
                    setFilterInput(book.title);
                    setIsListBooksFilter(false);
                  }}>
                  {isListBooksFilter && book.author + ' - ' + book.title}
                </li>
              );
            })}
        </ul>
      </StyledDivContainerInputSearchBookShelf>

      <StyledDivContainerMyBookshelves>
        <div className="bookshelves-container">
          <h5>Quero ler:</h5>
          <div className="bookshelves-background">
            <div className="books-container">
              {shelf1Filter.length > 0 || searchTheBookshelf.length > 0 ? (
                <BookList list={shelf1Filter} type="shelf" />
              ) : (
                  <BookList list={shelf1} type="shelf" />
                )}
            </div>
          </div>
        </div>

        <div className="bookshelves-container">
          <h5>Lendo atualmente:</h5>
          <div className="bookshelves-background">
            <div className="books-container">
              {shelf2Filter.length > 0 || searchTheBookshelf.length > 0 ? (
                <BookList list={shelf2Filter} type="shelf" />
              ) : (
                  <BookList list={shelf2} type="shelf" />
                )}
            </div>
          </div>
        </div>

        <div className="bookshelves-container">
          <h5>Acabei de ler:</h5>
          <div className="bookshelves-background">
            <div className="books-container">
              {shelf3Filter.length > 0 || searchTheBookshelf.length > 0 ? (
                <BookList list={shelf3Filter} type="shelf" />
              ) : (
                  <BookList list={shelf3} type="shelf" />
                )}
            </div>
          </div>
        </div>
      </StyledDivContainerMyBookshelves>
    </div>
  );
};

export default MyBookShelves;
