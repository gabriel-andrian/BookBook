import styled from 'styled-components';

import imgBookshelves from '../../../assets/images/img-bookshelves.svg';

const StyledDivContainerMyBookshelves = styled.div`
  @font-face {
    font-family: 'Cormorant Garamond';
    src: url(../../../assets/fonts/CormorantGaramond-Regular.woff);
  }

  background-color: rgb(219, 212, 202);
  font-family: 'Cormorant Garamond';
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .bookshelves-container{
    display: inline-block;
    width: 305px;

    h5{
      font-weight: 200;
      font-size: 1.6rem;
      text-align: center;
      margin: 35px 0 25px 0;
    }
  }

  .bookshelves-background{
    background: url(${imgBookshelves});
    background-size: cover;
    height: 500px;
  }

  .books-container{
    height: 525px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    overflow-x: scroll;
    padding-top: 45px;
  }
`;

export default StyledDivContainerMyBookshelves;
