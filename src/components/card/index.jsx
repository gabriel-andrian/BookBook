import { Card, Rate } from 'antd';
import React from 'react';

import { BookCoverStyled, TitleStyled, UserInfo, Details, BookCoverOnly } from './styled';

const { Meta } = Card;

const BookCard = ({ type, title, author, user, cover, rate }) => {
  if (type === 'info') {
    return (
      <Card style={{ width: 475, margin: 16 }} hoverable bordered={false}>
        <Meta
          avatar={<BookCoverStyled alt="" src={cover} />}
          title={<TitleStyled>{title}</TitleStyled>}
          description={
            <>
              <Details>
                <span style={{ fontSize: '1em', fontWeight: 800 }}>
                  {author.length === 1 ? 'Author' : 'Authors'}
                </span>
                : {author.join('; ')}
              </Details>
              <Rate value={rate} />
              <UserInfo>Who's reading: {user}</UserInfo>
            </>
          }
        />
      </Card>
    );
  }

  return (
    <Card style={{ width: 'fit-content', margin: 16 }} hoverable bordered={false}>
      <BookCoverOnly style={{ padding: 0 }} avatar={<BookCoverStyled alt="" src={cover} />} />
    </Card>
  );
};

export default BookCard;
