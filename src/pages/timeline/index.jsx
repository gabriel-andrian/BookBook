import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { ContainerTimeline, ContainerButtons, ContainerReviews } from '../../style';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import BookList from '../../components/book-list';

const Timeline = () => {
  const url = 'https://ka-users-api.herokuapp.com/book_reviews';
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sliceData, setSliceData] = useState([]);
  const [nextPage, setNextPage] = useState(10);
  const [previousPage, setPreviousPage] = useState(0);

  const token = useSelector((state) => state.session.token);
  const history = useHistory();

  const antIcon = <LoadingOutlined style={{ fontSize: 84, color: '#7A613D' }} spin />;

  const handlePrevious = () => {
    if (previousPage <= 0) {
      setPreviousPage(0);
      setNextPage(10);
      handleUpdate();
      return;
    }
    setSliceData(reviews.slice(previousPage - 10, previousPage));
    setPreviousPage(previousPage - 10);
    setNextPage(nextPage - 10);
  };
  const handleNext = () => {
    if (nextPage + 10 > reviews.length) {
      return;
    }
    setSliceData(reviews.slice(nextPage, nextPage + 10));
    setNextPage(nextPage + 10);
    setPreviousPage(previousPage + 10);
  };

  const handleUpdate = () => {
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setReviews(res.data);
      })
      .catch(() => history.push('/'));
  };
  useEffect(() => {}, [sliceData, reviews]);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setReviews(res.data);
        setSliceData(res.data.slice(0, 10));
        setLoading(false);
      })
      .catch(() => history.push('/'));
  }, []);

  return (
    <ContainerTimeline>
      <h1>What are people adding to their shelves...</h1>
      {loading ? (
        <Spin indicator={antIcon} />
      ) : (
        <ContainerButtons>
          <div>
            <button onClick={handlePrevious}>Previous Page</button>
            <button onClick={handleNext}>Next Page</button>
          </div>
          <ContainerReviews>
            {/* <BookList list={sliceData} type={'timeline'} /> */}
          </ContainerReviews>
        </ContainerButtons>
      )}
    </ContainerTimeline>
  );
};

export default Timeline;
