import axios from 'axios';
import React, { useState, useMemo } from 'react';

import BookCard from '../book-card';
import BookModal from '../book-modal';

const CardAndModal = ({ type, id, title, authors, user, cover, grade, review }) => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [description, setDescription] = useState('');

  useMemo(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => {
        setDescription(res.data.volumeInfo.description);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  if (type === 'public') {
    return (
      <>
        <BookCard type={type} cover={cover} toChangeModalVisibility={setModalVisibility} />
        <BookModal
          type={type}
          cover={cover}
          title={title}
          authors={authors}
          toChangeModalVisibility={setModalVisibility}
          modalStatus={isModalVisible}
          bookDescriptionModal={description}
        />
      </>
    );
  }

  if (type === 'timeline') {
    return (
      <>
        <BookCard
          type={type}
          cover={cover}
          title={title}
          authors={authors}
          user={user}
          grade={grade}
          toChangeModalVisibility={setModalVisibility}
        />
        <BookModal
          type={type}
          cover={cover}
          title={title}
          authors={authors}
          id={id}
          review={review}
          toChangeModalVisibility={setModalVisibility}
          modalStatus={isModalVisible}
          bookDescriptionModal={description}
        />
      </>
    );
  }

  if (type === 'shelf') {
    return (
      <>
        <BookCard type={type} cover={cover} toChangeModalVisibility={setModalVisibility} />
        <BookModal
          type={type}
          cover={cover}
          title={title}
          authors={authors}
          id={id}
          review={review}
          toChangeModalVisibility={setModalVisibility}
          modalStatus={isModalVisible}
          bookDescriptionModal={description}
        />
      </>
    );
  }

  if (type === 'search') {
    return (
      <>
        <BookCard type={type} cover={cover} toChangeModalVisibility={setModalVisibility} />
        <BookModal
          type={type}
          cover={cover}
          title={title}
          authors={authors}
          id={id}
          review={review}
          toChangeModalVisibility={setModalVisibility}
          modalStatus={isModalVisible}
          bookDescriptionModal={description}
        />
      </>
    );
  }
};

export default CardAndModal;
