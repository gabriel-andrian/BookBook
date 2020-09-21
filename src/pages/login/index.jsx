import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from '../../redux/actions';

const Login = (props) => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);

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

  const history = useHistory();

  const tryLogin = (data) => {
    axios
      .post('https://ka-users-api.herokuapp.com/authenticate', { ...data })
      .then((res) => {
        dispatch(login(res.data.auth_token, res.data.user));
        window.localStorage.setItem('authToken', res.data.auth_token);
        history.push('/shelfes');
      })
      .catch((err) =>
        setError('password', {
          message: err.response.data.error.user_authentication,
        })
      );
  };

  return (
    <form onSubmit={handleSubmit(tryLogin)}>
      <div>
        <label>User:</label>
        <input onChange={(e) => setValue('user', e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input onChange={(e) => setValue('password', e.target.value)} />
      </div>
      <button type="submit">Login</button>
      {errors.user && <p>{errors.user.message}</p>}
      {errors.password && <p>{errors.password.message}</p>}
    </form>
  );
};

export default Login;
