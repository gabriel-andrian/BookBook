import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { TopMenu, SideMenu, MyBookShelves } from '../components';
import { Register, BookSearchHome, Timeline } from '../pages';
import PageLoginRegister from '../pages/login-register';
import {
  Background,
  Box,
  Header,
  Container,
  Main,
  SideBar,
  ContentPrivate,
  ContentPublic,
  ContainerPage,
} from '../style';

const Routers = () => {
  const history = useHistory();
  return (
    <Switch>
      <Route path="/login">
        <Container>
          <Header>
            <TopMenu />
          </Header>
          <Main>
            <SideBar>
              <SideMenu />
            </SideBar>
            <ContentPrivate>
              <PageLoginRegister />
            </ContentPrivate>
          </Main>
        </Container>
      </Route>
      <Route path="/register">
        <Container>
          <Header>
            <TopMenu />
          </Header>
          <Main>
            <SideBar>
              <SideMenu />
            </SideBar>
            <ContentPrivate>
              <Background className="background-login">
                <Box>
                  <Register />
                </Box>
              </Background>
            </ContentPrivate>
          </Main>
        </Container>
      </Route>
      <Route path="/bookcase">
        <Container>
          <Header>
            <TopMenu />
          </Header>
          <Main>
            <SideBar>
              <SideMenu />
            </SideBar>
            <ContentPrivate>
              <MyBookShelves />
            </ContentPrivate>
          </Main>
        </Container>
      </Route>
      <Route path="/profile" />
      <Route path="/search">
        <Container>
          <Header>
            <TopMenu />
          </Header>
          <Main>
            <SideBar>
              <SideMenu />
            </SideBar>
            <ContentPrivate>
              <BookSearchHome />
            </ContentPrivate>
          </Main>
        </Container>
      </Route>
      <Route path="/timeline">
        <Container>
          <Header>
            <TopMenu />
          </Header>
          <Main>
            <SideBar>
              <SideMenu />
            </SideBar>
            <ContentPrivate>
              <Timeline />
            </ContentPrivate>
          </Main>
        </Container>
      </Route>
      <Route exact path="/" />

      {/* <Route path="/">404 - PAGE NOT FOUND</Route> */}
    </Switch>
  );
};

export default Routers;
