import React from 'react';
import { BookCoverStyled, TitleStyled, UserInfo, Details, BookCoverOnly } from './styled';

import { Card, Rate } from 'antd';
const { Meta } = Card;

const BookCard = ({ type, title, authors, user, cover, grade, toChangeModalVisibility }) => {
  const handleOnclick = () => toChangeModalVisibility((prevStatus) => !prevStatus);

  if (type === 'timeline') {
    return (
      <>
        <Card
          style={{ width: 475, margin: 16, backgroundColor: '#dbd4ca' }}
          hoverable
          bordered={false}
          onClick={handleOnclick}>
          <Meta
            avatar={<BookCoverStyled alt="" src={cover} />}
            title={<TitleStyled>{title}</TitleStyled>}
            description={
              <div>
                <Details>
                  <span style={{ fontSize: '1em', fontWeight: 800 }}>
                    {authors.length === 1 ? 'Author' : 'Authors'}
                  </span>
                  : {authors.join('; ')}
                </Details>
                <Rate disabled value={grade} />
                <UserInfo>Who's reading: {user}</UserInfo>
              </div>
            }
          />
        </Card>
      </>
    );
  }

  return (
    <Card
      style={{ width: 'fit-content', margin: 16, backgroundColor: '#dbd4ca' }}
      hoverable
      bordered={false}
      onClick={handleOnclick}>
      <BookCoverOnly style={{ padding: 0 }} avatar={<BookCoverStyled alt="" src={cover} />} />
    </Card>
  );
};

export default BookCard;
