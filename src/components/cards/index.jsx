import React from 'react';

import { BookCoverStyled, CardStyled, BookInfo, TitleStyled, UserInfo, Details } from './styled';

const BookCard = ({ type, title, author, user, cover }) => {
  if (type === 'info') {
    return (
      <CardStyled>
        <BookCoverStyled alt="" src={cover} />
        <BookInfo>
          <Details>
            <TitleStyled>Title:</TitleStyled> {title}
          </Details>
          <Details>
            <TitleStyled>{author.length === 1 ? 'Author' : 'Authors'}</TitleStyled>:{' '}
            {author.join('; ')}
          </Details>
          <UserInfo>Added by {user}</UserInfo>
        </BookInfo>
      </CardStyled>
    );
  }

  return (
    <CardStyled>
      <BookCoverStyled alt="" src={cover} />
    </CardStyled>
  );
};

export default BookCard;
