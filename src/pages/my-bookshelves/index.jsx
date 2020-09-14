import React, { useState } from 'react';
import { StyledDivContainer } from '../../style/styled';

const MyBookshelves = () => {
  /* Simular o livros da state */
  const [listBooks, setListBooks] = useState([
    "livro", "livro", "livro", "livro",
    "livro", "livro", "livro", "livro",
    "livro", "livro", "livro", "livro",
    "livro", "livro", "livro", "livro",
    "livro", "livro", "livro", "livro",
    "livro", "livro", "livro", "livro",
    "livro", "livro", "livro", "livro",
  ]);


  
  return(
      <StyledDivContainer>
        <div className={"bookshelves-container"}>
          <h5>Quero ler:</h5>
          <div className={"bookshelves-background"}>
            <div className={"books-container"}>
            {
              listBooks.map(() => {
                return <div className={'book'}/>
              })
            }
            </div>
          </div>
        </div>
        
        <div className={"bookshelves-container"}>
          <h5>Lendo atualmente:</h5>
          <div className={"bookshelves-background"}>
            <div className={"books-container"}>
            {
              listBooks.map(() => {
                return <div className={"book"}/>
              })
            }
            </div>
          </div>
        </div>
          
        <div className={"bookshelves-container"}>
          <h5>Acabei de ler:</h5>
          <div className={"bookshelves-background"}>
            <div className={"books-container"}>
            {
              listBooks.map(() => {
                return <div className={"book"}/>
              })
            }
            </div>
          </div>
        </div>
      </StyledDivContainer>
  );
}

export default MyBookshelves;