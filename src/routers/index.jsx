import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        HOME
      </Route>
      <Route path="/login">LOGIN</Route>
      <Route path="/register">REGISTER</Route>
      <Route path="/bookcase">BOOKCASE</Route>
      <Route path="/profile">PROFILE</Route>
      <Route path="/">404 - PAGE NOT FOUND</Route>
    </Switch>
  );
};

export default Routers;
