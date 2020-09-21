import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../book-card';
import BookModal from '../book-modal';

const CardAndModal = ({
  type,
  google_book_id,
  title,
  author,
  user,
  cover,
  grade,
  review,
  descriptionGoogle,
}) => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isModalVisible) {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes/${google_book_id}`)
        .then((res) => {
          setDescription(res.data.volumeInfo.description);
        })
        .catch((err) => {
          if (err.response.status > 399 || err.response.status < 500) {
            setDescription("Something went wrong with description, we're sorry about it.");
          }
        });
    }
  }, [google_book_id, isModalVisible]);

  if (type === 'public') {
    return (
      <>
        <BookCard
          type={type}
          cover={
            cover ? (
              cover.thumbnail
            ) : (
              <img src="https://petethegreekgolf.com/assets/no-item-image.png" alt="" />
            )
          }
          toChangeModalVisibility={setModalVisibility}
        />
        <BookModal
          type={type}
          cover={
            cover ? (
              cover.thumbnail
            ) : (
              <img src="https://petethegreekgolf.com/assets/no-item-image.png" alt="" />
            )
          }
          title={title}
          author={author}
          toChangeModalVisibility={setModalVisibility}
          modalStatus={isModalVisible}
          bookDescriptionModal={descriptionGoogle}
          google_book_id={google_book_id}
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
          author={author}
          user={user}
          grade={grade}
          toChangeModalVisibility={setModalVisibility}
        />
        <BookModal
          type={type}
          cover={cover}
          title={title}
          author={author}
          google_book_id={google_book_id}
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
          author={author}
          google_book_id={google_book_id}
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
        <BookCard
          type={type}
          cover={
            cover ? (
              cover.thumbnail
            ) : (
              <img src="https://petethegreekgolf.com/assets/no-item-image.png" alt="" />
            )
          }
          toChangeModalVisibility={setModalVisibility}
        />
        <BookModal
          type={type}
          cover={
            cover ? (
              cover.thumbnail
            ) : (
              <img src="https://petethegreekgolf.com/assets/no-item-image.png" alt="" />
            )
          }
          title={title}
          author={author}
          google_book_id={google_book_id}
          review={review}
          toChangeModalVisibility={setModalVisibility}
          modalStatus={isModalVisible}
          bookDescriptionModal={descriptionGoogle}
        />
      </>
    );
  }

  return;
};

export default CardAndModal;
