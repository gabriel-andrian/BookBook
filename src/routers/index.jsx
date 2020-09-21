import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SearchBooksHome, Login } from '../pages';

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register" />
      <Route path="/bookcase" />
      <Route path="/profile" />
      <Route path="/search">
        <SearchBooksHome />
      </Route>
      <Route path="/timeline" />
      <Route path="/">404 - PAGE NOT FOUND</Route>
    </Switch>
  );
};

export default Routers;
