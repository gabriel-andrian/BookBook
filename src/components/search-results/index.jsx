import { Input, Empty } from 'antd';
import React from 'react';

const { Search } = Input;

const SearchResults = ({ data, page, nextPage, previewPage, handleSearch }) => {
  return (
    <div>
      <Search
        style={{ width: 1000, padding: 20 }}
        placeholder="Search books by author, title or ISBN..."
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
          <div>
            <div>
              <button onClick={previewPage}>Página Anterior</button>
              {page}
              <button onClick={nextPage}>Próxima Página</button>
            </div>
            {
              // TODO:
              // passar o data para o componente map dos cards : <Cards data={data} />
            }
          </div>
        )}
    </div>
  );
};

export default SearchResults;
