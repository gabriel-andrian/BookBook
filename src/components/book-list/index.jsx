import React from 'react';
import CardAndModal from '../card-and-modal';

const BookList = ({ list, type }) => {
  return list.map(({ google_books_id, title, authors, user, image_url, grade, review }, key) => {
    return (
      <CardAndModal
        type={type}
        id={google_books_id}
        title={title}
        authors={authors}
        user={user}
        cover={image_url}
        grade={grade}
        review={review}
        key={key}
      />
    );
  });
};

export default BookList;
