import { Modal, Select, Card, Form, Rate, Input } from 'antd';
import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addBook, moveBook, removeBook } from '../../redux/actions';
import { BookCoverStyled, TitleStyled, Details } from '../book-card/styled';

const { Meta } = Card;
const { Option } = Select;

const BookModal = ({
  type,
  cover,
  title,
  author,
  google_book_id,
  review,
  toChangeModalVisibility,
  modalStatus,
  bookDescriptionModal,
}) => {
  const [userRate, setUserRate] = useState(0);
  const [userShelf, setUserShelf] = useState(0);
  const [userReview, setUserReview] = useState('');
  const [descriptionBook, setDescriptionBook] = useState('');
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.session);
  // useEffect(() => {
  //   if (modalStatus) {
  //     axios
  //       .get(`https://www.googleapis.com/books/v1/volumes/${google_book_id}`)
  //       .then((res) => {
  //         setDescriptionBook(res.data.volumeInfo.descriptionBook);
  //       })
  //       .catch((err) => {
  //         console.log(err.data);
  //         console.log(err.status);
  //       });
  //   }
  // }, [google_book_id, modalStatus]);

  const handleCancel = () => toChangeModalVisibility(!modalStatus);

  const handleOk = () => {
    // AQUI O CONSOLE.LOG DEVE SER SUBSTITUÍDO PELOS DISPATCHS QUE
    ////  (i) ATUALIZARÁ A ESTANTE DO LIVRO,
    ////  (ii) SALVA O REVIEW E
    ////  (iii) SALVA A NOTA DO USUÁRIO
    /* const book = {
      google_book_id,
      title,
      author,
      image_url: cover,
      shelf: userShelf,
      categories: 'Computers,Programming',
      review: userReview,
      grade: userRate,
    };
    console.log(userRate);
    console.log(userShelf);
    console.log(userReview);
    console.log('user id', selector.user.id);
    console.log('token', selector.token);
    console.log('book', book);
    axios
      .post(
        `https://ka-users-api.herokuapp.com/users/${selector.user.id}/books`,
        {
          book: { book },
        },
        { headers: { authorization: selector.token } }
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    dispatch(addBook(book, userShelf)); */
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
                  <span style={{ fontSize: '1em', fontWeight: 800 }}>Author</span>: {author}
                </Details>
                <Details>
                  <span style={{ fontSize: '1em', fontWeight: 800 }}> Description: </span>
                  {bookDescriptionModal && bookDescriptionModal.replaceAll(/<.+?>/gi, ' ')}
                  {descriptionBook && descriptionBook.replaceAll(/<.+?>/gi, ' ')}
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
                  <span style={{ fontSize: '1em', fontWeight: 800 }}>Author</span>: {author}
                </Details>
                <Details>
                  <span style={{ fontSize: '1em', fontWeight: 800 }}> Description: </span>
                  {bookDescriptionModal && bookDescriptionModal.replaceAll(/<.+?>/gi, ' ')}
                  {descriptionBook && descriptionBook.replaceAll(/<.+?>/gi, ' ')}
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
                <span style={{ fontSize: '1em', fontWeight: 800 }}>Author:</span>
                {author}
              </Details>
              <Details>
                <span style={{ fontSize: '1em', fontWeight: 800 }}> Description: </span>
                {bookDescriptionModal && bookDescriptionModal.replaceAll(/<.+?>/gi, ' ')}
                {descriptionBook && descriptionBook.replaceAll(/<.+?>/gi, ' ')}
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
