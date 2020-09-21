import styled from 'styled-components';

import imgBookshelves from '../../../assets/images/img-bookshelves.svg';

const StyledDivContainerMyBookshelves = styled.div`
  @font-face {
    font-family: 'Cormorant Garamond';
    src: url(../../../assets/fonts/CormorantGaramond-Regular.woff);
  }

  background-color: #f9e9d2;
  font-family: 'Cormorant Garamond';
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .bookshelves-container {
    display: inline-block;
    width: 290px;

    h5 {
      font-weight: 200;
      font-size: 1.6rem;
      text-align: center;
      margin: 35px 0 25px 0;
    }
  }

  .bookshelves-background {
    background: url(${imgBookshelves});
    background-size: cover;
    height: 500px;
  }

  .books-container {
    height: 480px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    overflow-x: scroll;
    padding-top: 45px;
  }

  .book {
    margin: 0 0 22px 28px;
    width: 60px;
    height: 71px;
    background-color: gray;
    box-sizing: border-box;
  }
`;

export default StyledDivContainerMyBookshelves;
