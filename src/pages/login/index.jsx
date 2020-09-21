import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login, addBook } from '../../redux/actions';

const Login = (props) => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);
  const [loggedUserIdAndToken, setLoggedUserIdAndToken] = useState({ id: null, token: '' });

  const { register, unregister, setValue, errors, handleSubmit, setError } = useForm();

  useEffect(() => {
    register('user', { required: 'User cannot be blank' });
    register('password', { required: 'Password cannot be blank' });
    console.log(session);

    return () => {
      unregister('user');
      unregister('password');
    };
  }, [register, unregister]);

  useEffect(() => {
    if (loggedUserIdAndToken.id !== null && loggedUserIdAndToken.token !== '') {
      getBooksLoggedUser(loggedUserIdAndToken.id, loggedUserIdAndToken.token);
    }
  }, [loggedUserIdAndToken]);

  const history = useHistory();

  const tryLogin = (data) => {
    axios
      .post('https://ka-users-api.herokuapp.com/authenticate', { ...data })
      .then((res) => {
        dispatch(login(res.data.auth_token, res.data.user));
        setLoggedUserIdAndToken({ id: res.data.user.id, token: res.data.auth_token });
        window.localStorage.setItem('authToken', res.data.auth_token);
        history.push('/timeline');
      })
      .catch((err) =>
        setError('password', {
          message: err.response.data.error.user_authentication,
        })
      );
  };

  const getBooksLoggedUser = (idUser, token) => {
    axios
      .get(`https://ka-users-api.herokuapp.com/users/${idUser}/books/`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        const booksList = [...res.data];
        booksList.map((book) => {
          dispatch(addBook(book, book.shelf));
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(tryLogin)}>
      <div>
        <div>
          {errors.user ? (
            <label style={{ color: 'red' }}>{errors.user.message}</label>
          ) : (
              <label>User:</label>
            )}
        </div>
        <input onChange={(e) => setValue('user', e.target.value)} />
      </div>
      <div>
        <div>
          {errors.password ? (
            <label style={{ color: 'red' }}>{errors.password.message}</label>
          ) : (
              <label>Password:</label>
            )}
        </div>
        <input onChange={(e) => setValue('password', e.target.value)} type="password" />
      </div>
      <button type="submit">Login</button>
      <button onClick={() => history.push('/register')}>Cadastre-se</button>
    </form>
  );
};

export default Login;
