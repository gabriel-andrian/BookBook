import React, { useState } from 'react';
import { Modal, Select, Card, Form, Rate, Input } from 'antd';

import { BookCoverStyled, TitleStyled, Details } from '../book-card/styled';

const { Meta } = Card;
const { Option } = Select;

const BookModal = ({
  type,
  cover,
  title,
  authors,
  id,
  review,
  toChangeModalVisibility,
  modalStatus,
  bookDescriptionModal,
}) => {
  const [userRate, setUserRate] = useState(0);
  const [userShelf, setUserShelf] = useState(0);
  const [userReview, setUserReview] = useState('');

  const handleCancel = () => toChangeModalVisibility(!modalStatus);

  const handleOk = () => {
    console.log(userRate);
    console.log(userShelf);
    console.log(userReview);
    toChangeModalVisibility(!modalStatus);
  };

  if (type === 'public') {
    return (
      <Modal
        bodyStyle={{ backgroundColor: '#dbd4ca' }}
        visible={modalStatus}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}>
        <Card
          style={{ width: 700, margin: 16, backgroundColor: '#dbd4ca' }}
          hoverable={false}
          bordered={false}>
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
                <Details>
                  <span style={{ fontSize: '1em', fontWeight: 800 }}> Description: </span>
                  {bookDescriptionModal.replaceAll(/<.+?>/gi, ' ')}
                </Details>
              </div>
            }
          />
        </Card>
      </Modal>
    );
  }

  if (type === 'shelf') {
    return (
      <Modal
        bodyStyle={{ backgroundColor: '#dbd4ca' }}
        visible={modalStatus}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}>
        <Card
          style={{ width: 700, margin: 16, backgroundColor: '#dbd4ca' }}
          hoverable={false}
          bordered={false}>
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
                <Details>
                  <span style={{ fontSize: '1em', fontWeight: 800 }}> Description: </span>
                  {bookDescriptionModal.replaceAll(/<.+?>/gi, ' ')}
                </Details>
              </div>
            }
          />
        </Card>
        <Form
          layout="inline"
          style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between' }}>
          <Form.Item style={{ display: 'block', minWidth: '100%', margin: '15px 0' }}>
            <Input
              placeholder="Diga algo sobre o livro..."
              onChange={(e) => setUserReview(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Select
              style={{ width: 250 }}
              onSelect={(value) => setUserShelf(value)}
              allowClear
              placeholder="Adicionar à minha estante">
              <Option value={1}>Quero Ler</Option>
              <Option value={2}>Estou Lendo</Option>
              <Option value={3}>Já Li</Option>
            </Select>
          </Form.Item>
          <Form.Item name="rate" label="My Rate">
            <Rate onChange={(value) => setUserRate(value)} />
          </Form.Item>
        </Form>
      </Modal>
    );
  }

  return (
    <Modal
      bodyStyle={{ backgroundColor: '#dbd4ca' }}
      visible={modalStatus}
      onOk={handleOk}
      onCancel={handleCancel}
      width={800}>
      <Card
        style={{ width: 700, margin: 16, backgroundColor: '#dbd4ca' }}
        hoverable={false}
        bordered={false}>
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
              <Details>
                <span style={{ fontSize: '1em', fontWeight: 800 }}> Description: </span>
                {bookDescriptionModal.replaceAll(/<.+?>/gi, ' ')}
              </Details>
            </div>
          }
        />
      </Card>

      <Select
        style={{ width: 350 }}
        onSelect={(value) => setUserShelf(value)}
        allowClear
        placeholder="Adicionar à minha estante">
        <Option value={1}>Quero Ler</Option>
        <Option value={2}>Estou Lendo</Option>
        <Option value={3}>Já Li</Option>
      </Select>
    </Modal>
  );
};

export default BookModal;
