import styled from 'styled-components';
import imgBookshelves from '../../../assets/images/img-bookshelves.svg';

const StyledDivContainer = styled.div`
  @font-face {
	  font-family: "Cormorant Garamond";
	  src: url(../../../assets/fonts/CormorantGaramond-Regular.woff);
  }

  background-color: #F9E9D2;
  font-family: "Cormorant Garamond";
  width: 100%;
  display: flex;	
  justify-content: space-around;

    .bookshelves-container{
      display: inline-block;
      width: 159px;

      h5{
        font-weight: 200;	
        text-align: center;
        margin: 0 0 10px 0;
      }
    }
    
    .bookshelves-background{
      background:url(${imgBookshelves});
      background-size: cover;
      height: 335px;
    }

      .books-container{
        width: 100%;
        height: 325px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;			
        overflow-x : scroll;
        padding-top: 30px;
      }

       .book {
          margin: 0 0 18px 14px;
          width: 35px;
          height: 45px;
          background-color: gray;
          box-sizing: border-box;
          border: 1px solid gray;
       }
      
`;

export default StyledDivContainer;