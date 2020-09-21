import { Input, Empty } from 'antd';
import React, { useEffect } from 'react';

import { ContainerPagination, ContainerResults, searchPageStyle } from '../../style';
import { BookList } from '../index';

const { Search } = Input;

const SearchResults = ({ data, page, nextPage, previewPage, handleSearch }) => {
  useEffect(() => { }, [data]);

  return (
    <>
      <Search
        style={searchPageStyle}
        placeholder="Search books by author, title or ISBN MEIO..."
        onSearch={(value) => handleSearch(value, 0)}
        enterButton
      />
      {data.totalItems === 0 ? (
        <Empty
          description={
            <>
              <span>Book not found! </span>
              <span>
                Check if you typed correctly or try a new search by author, title or ISBN.
              </span>
            </>
          }
        />
      ) : (
          <ContainerPagination>
            <button onClick={previewPage}>Página Anterior</button>
            <div>{page}</div>
            <button onClick={nextPage}>Próxima Página</button>
            <ContainerResults>
              <BookList list={data.items} type="search" test="test" />
            </ContainerResults>
          </ContainerPagination>
        )}
    </>
  );
};

export default SearchResults;
