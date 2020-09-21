import React from 'react';

import CardAndModal from '../card-and-modal';

const BookList = ({ list, type, test }) => {
  if (list === undefined && test === 'test') {
    return null;
  }

  if (type === 'public' || type === 'search') {
    return list.map(({ id, volumeInfo: { title, authors, description, imageLinks } }, key) => {
      return (
        <CardAndModal
          type={type}
          google_book_id={id}
          title={title}
          author={authors}
          cover={imageLinks}
          descriptionGoogle={description}
          key={key}
        />
      );
    });
  }

  return list.map(
    ({ google_book_id, title, author, creator: { name }, image_url, grade, review }, key) => {
      return (
        <CardAndModal
          type={type}
          google_book_id={google_book_id}
          title={title}
          author={author}
          user={name}
          cover={image_url}
          grade={grade}
          review={review}
          key={key}
        />
      );
    }
  );
};

export default BookList;
