import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Login from './index.jsx';
import Logged from './temp-logged';

const Authenticator = () => {
  const [isAuthenticated, setAuthenticated] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem('authToken');
    if (!token) {
      setAuthenticated(false);
    }

    axios
      .get('https://ka-users-api.herokuapp.com/users', {
        headers: { Authorization: token },
      })
      .then(() => {
        setAuthenticated(true);
        history.push('/timeline');
      })
      .catch(() => {
        setAuthenticated(false);
      });
  }, [history, setAuthenticated]);

  if (isAuthenticated === undefined) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated === false) {
    return (
      <Switch>
        <Route path="/">
          <Login setAuthenticated={setAuthenticated} />
        </Route>
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/timeline">
        {/* rota temporária de login bem sucedido */}
        <Logged setAuthenticated={setAuthenticated} />
      </Route>
    </Switch>
  );
};

export default Authenticator;
