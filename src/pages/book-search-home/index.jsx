import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import 'antd/dist/antd.css';
import { SearchResults } from '../../components';
import { ContainerSearch } from '../../style';

const BookSearchHome = () => {
  const history = useHistory();

  const [search, setSearch] = useState(undefined);
  const [data, setData] = useState({});
  const [startIndex, setStartIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [update, setUpdate] = useState(true);

  const handleSearch = (value, first = startIndex) => {
    if (value === undefined) {
      return;
    }
    if (first === 0) {
      setPage(1);
      setStartIndex(0);
    }
    setSearch(value);
    const search = value.trim().replace(/\s+/g, ' ').split(' ').join('-');
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${first}&maxResults=10`
      )

      .then((resp) => {
        setData(resp.data);
      });
  };

  const nextPage = () => {
    setStartIndex(startIndex + 10);
    setPage(page + 1);
    setUpdate(!update);
  };

  const previewPage = () => {
    if (startIndex <= 0) {
      setPage(1);
      return setStartIndex(0);
    }
    setStartIndex(startIndex - 10);
    setPage(page - 1);
    setUpdate(!update);
  };

  useEffect(() => {
    handleSearch(search);
  }, [update]);

  useEffect(() => {
    if (history.action === 'PUSH') {
      handleSearch(history.location.state, 0);
      history.replace('/search', null);
    }
  }, []);

  return (
    <ContainerSearch>
      <SearchResults
        data={data}
        page={page}
        nextPage={nextPage}
        previewPage={previewPage}
        handleSearch={handleSearch}
      />
    </ContainerSearch>
  );
};

export default BookSearchHome;
