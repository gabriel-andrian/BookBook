import React, { useEffect, useState } from 'react';
import { StyledDivContainerMyBookshelves } from '../../style/styled';
import { StyledDivContainerInputSearchBookShelf } from '../../style/styled';
 
const MyBookshelves = () => {
  /* Simular os livros da state. Aqui vai o useSelect da state dos livros */
  const booksState = [
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Essa Gente", author: "Chico Buarque", shelf: "reading"},
    { title: "Anne de Green Gables", author: "Lucy Maud", shelf: "already"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Anne de Green Gables", author: "Lucy Maud", shelf: "already"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "O Homem de Giz", author: "C. J. Tudor", shelf: "reading"},
    { title: "Anne de Green Gables", author: "Lucy Maud", shelf: "already"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Essa Gente", author: "Chico Buarque", shelf: "reading"},
    { title: "Anne de Green Gables", author: "Lucy Maud", shelf: "already"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "O Homem de Giz", author: "C. J. Tudor", shelf: "reading"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Anne de Green Gables", author: "Lucy Maud", shelf: "already"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Harry Potter", author: "J. K. Rowling", shelf: "read"},
    { title: "Anne de Green Gables", author: "Lucy Maud", shelf: "already"},
    { title: "Anne de Green Gables", author: "Lucy Maud", shelf: "already"},
    { title: "Teste", author: "Teste", shelf: "read"},
  ];
 
 
  const [valueInput, setValueInput] = useState("");
  const [searchTheBookshelf, setsearchTheBookshelf] = useState([]);
  const [isListBooksFilter, setIsListBooksFilter] = useState(true);
  
  useEffect(() => {
    if(!(valueInput === "")){
      setsearchTheBookshelf(booksState.filter(f => f.title.includes(valueInput) || f.author.includes(valueInput)));
    }else {
      setsearchTheBookshelf([]);
      setIsListBooksFilter(true);
    }
  }, [valueInput])
          
  return(
    <div>
      <StyledDivContainerInputSearchBookShelf>
        <form>
            <input
              type="text"
              valueInput={valueInput}
              placeholder="filtrar livro na estante"
              onChange={(e) => setValueInput(e.target.value)}
              value={valueInput}
            />
            <input type="button" disabled />
        </form>
        <ul>
        {
          searchTheBookshelf && 
          searchTheBookshelf.map((book) => {
            return <li 
              onClick={() => {
                setValueInput(book.title);
                setIsListBooksFilter(false);
              }
            }>
              { isListBooksFilter && book.author + " - " + book.title }
            </li> 
          })
        }
        </ul>
      </StyledDivContainerInputSearchBookShelf>

      <StyledDivContainerMyBookshelves>
        <div className={"bookshelves-container"}>
          <h5>Quero ler:</h5>
          <div className={"bookshelves-background"}>
            <div className={"books-container"}>
            {
                searchTheBookshelf.length > 0 ?
                searchTheBookshelf.map((book) => {
                  if(book.shelf === "read") {

                    // Aqui vai o component do card do livro
                    return <div className={'book'}/>

                  }

                  return null;
                }) :
                booksState.map((book) => {
                  if(book.shelf === "read") {

                    // Aqui vai o component do card do livro
                    return <div className={'book'}/>

                  }

                  return null;
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
                searchTheBookshelf.length > 0 ?
                searchTheBookshelf.map((book) => {
                  if(book.shelf === "reading") {

                    // Aqui vai o component do card do livro
                    return <div className={'book'}/>

                  }

                  return null;
                }) :
                booksState.map((book) => {
                  if(book.shelf === "reading") {

                    // Aqui vai o component do card do livro
                    return <div className={'book'}/>

                  }

                  return null;
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
                searchTheBookshelf.length > 0 ?
                searchTheBookshelf.map((book) => {
                  if(book.shelf === "already") {
                    
                    // Aqui vai o component do card do livro
                    return <div className={'book'}/>

                  }

                  return null;
                }) :
                booksState.map((book) => {
                  if(book.shelf === "already") {

                    // Aqui vai o component do card do livro
                    return <div className={'book'}/>

                  }

                  return null;
                })
            }
            </div>
          </div>
        </div>
      </StyledDivContainerMyBookshelves>
    </div>
  );
}
 
export default MyBookshelves;
