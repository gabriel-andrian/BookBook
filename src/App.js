import React from 'react';

import { BookList, TopMenu, SideMenu, BookCard } from './components';
import Routers from './routers';
import {
  Header,
  Container,
  Main,
  SideBar,
  ContentPrivate,
  ContentPublic,
  ContainerPage,
} from './style';

const books = [
  {
    image_url:
      'http://books.google.com/books/content?id=_lLgPAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    user: 'John Doe',
    title: "Harry Potter and the Sorcerer's Stone",
    authors: ['J. K. Rowling'],
    grade: 4,
    google_books_id: 'wrOQLV6xB-wC',
  },
  {
    image_url:
      'http://books.google.com/books/content?id=NF-zDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
    user: 'Jane Doe',
    title: 'As aventuras do Capitão Cueca',
    authors: ['Dav Pilkey'],
    grade: 3,
    google_books_id: 'NF-zDgAAQBAJ',
  },
  {
    image_url:
      'http://books.google.com/books/content?id=Tkm4DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    user: 'Davis Peixoto, 23',
    title: 'Learn React Hooks',
    authors: ['Daniel Bugl'],
    grade: 5,
    google_books_id: 'Tkm4DwAAQBAJ',
  },
  {
    image_url:
      'http://books.google.com/books/content?id=oZhagX6UWOMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    user: 'user200 F',
    title: 'A Brief History of Time',
    authors: ['Stephen HawkingBugl'],
    grade: 5,
    google_books_id: 'oZhagX6UWOMC',
  },
];

const cardTest = {
  cover:
    'http://books.google.com/books/content?id=_lLgPAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  user: 'Jhon Doe',
  title: "Harry Potter and the Sorcerer's Stone",
  author: ['J. K. Rowling'],
  grade: 4,
};

const App = () => {
  return (
    <Container>
      <Header>
        <TopMenu />
      </Header>
      <Main>
        <SideBar>
          <SideMenu />
        </SideBar>
        <ContentPrivate>
          <ContainerPage style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>MEU TITULO</h1>
            <h6>RANDOM TEXT</h6>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <BookCard
                type="info"
                cover={cardTest.cover}
                user={cardTest.user}
                title={cardTest.title}
                author={cardTest.author}
                rate={cardTest.grade}
              />
              <BookCard
                type="info"
                cover={cardTest.cover}
                user={cardTest.user}
                title={cardTest.title}
                author={cardTest.author}
                rate={cardTest.grade}
              />
              <BookCard
                type="info"
                cover={cardTest.cover}
                user={cardTest.user}
                title={cardTest.title}
                author={cardTest.author}
                rate={cardTest.grade}
              />
              <BookCard
                type="info"
                cover={cardTest.cover}
                user={cardTest.user}
                title={cardTest.title}
                author={cardTest.author}
                rate={cardTest.grade}
              />
              <BookCard
                type="info"
                cover={cardTest.cover}
                user={cardTest.user}
                title={cardTest.title}
                author={cardTest.author}
                rate={cardTest.grade}
              />
              <BookCard
                type="info"
                cover={cardTest.cover}
                user={cardTest.user}
                title={cardTest.title}
                author={cardTest.author}
                rate={cardTest.grade}
              />
            </div>
          </ContainerPage>
        </ContentPrivate>
      </Main>
    </Container>
  );
};

export default App;

/* TODO:
  - fazer os modais de acordo com os tipos passados pelo componente card-and-modal; OK
  - useMemo para pegar a description e colocar no modal; OK
  - ver mudança de prateleiras a partir dos modais que aparecem apenas nas shelves; OK
  - acrescentar espaço de input para review + grade que vai pra API do João; OK*/
