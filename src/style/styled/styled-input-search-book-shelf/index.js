import styled from 'styled-components';

import searchIcon from '../../../assets/images/search-icon.svg';

const StyledDivContainerInputSearchBookShelf = styled.div`
  @font-face {
    font-family: 'Cormorant Garamond';
    src: url(../../../assets/fonts/CormorantGaramond-Regular.woff);
  }

  background-color: rgb(219, 212, 202);
  font-family: 'Cormorant Garamond';
  width: 100%;
  text-align: center;
  padding-top: 20px;

  form {
    display: inline-block;
    border-radius: 5px;
    background-color: white;
    border: 1px solid black;

    input {
      border-radius: 5px 0px 0px 5px;
      border: none;
      vertical-align: middle;
      font-size: 1rem;
      width: 315px;
      box-sizing: border-box;
      outline: none;
    }

    input[type='button'] {
      border-radius: 0px 5px 5px 0px;
      height: 20px;
      width: 20px;
      background: white url(${searchIcon});
      background-size: cover;
      margin: 0 2px 1px 0;
    }
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      padding-top: 5px;
      list-style: none;
      cursor: pointer;
    }
  }
`;

export default StyledDivContainerInputSearchBookShelf;
