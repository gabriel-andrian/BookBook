import { Card, Rate } from 'antd';
import React from 'react';

import { BookCoverStyled, TitleStyled, UserInfo, Details, BookCoverOnly } from './styled';

const { Meta } = Card;

const BookCard = ({ type, title, author, user, cover, grade, toChangeModalVisibility }) => {
  const handleOnclick = () => toChangeModalVisibility((prevStatus) => !prevStatus);

  if (type === 'timeline') {
    return (
      <>
        <Card
          style={{ width: 475, height: 230, margin: 16, backgroundColor: '#dbd4ca' }}
          hoverable
          bordered={false}
          onClick={handleOnclick}>
          <Meta
            avatar={<BookCoverStyled alt="" src={cover} />}
            title={<TitleStyled>{title}</TitleStyled>}
            description={
              <div>
                <Details>
                  <span style={{ fontSize: '1em', fontWeight: 800 }}>Author:</span> {author}
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
  if (type === 'shelf') {
    return (
      <Card
        style={{
          width: 'fit-content',
          height: 230,
          margin: 2,
          backgroundColor: 'rgba(0,0,0,0)',
        }}
        hoverable
        bordered={false}
        onClick={handleOnclick}>
        <BookCoverOnly style={{ padding: 0 }} avatar={<BookCoverStyled alt="" src={cover} />} />
      </Card>
    );
  }
  return (
    <Card
      style={{ width: 'fit-content', height: 230, margin: 16, backgroundColor: '#dbd4ca' }}
      hoverable
      bordered={false}
      onClick={handleOnclick}>
      <BookCoverOnly style={{ padding: 0 }} avatar={<BookCoverStyled alt="" src={cover} />} />
    </Card>
  );
};

export default BookCard;
