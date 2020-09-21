import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
const Register = () => {
  const history = useHistory();
  const { register, unregister, handleSubmit, setValue, errors } = useForm();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const submitForm = (data) => {
    let user = { ...data };
    console.log(data);
    if (data.password === data.password_confirmation) {
      user = { ...data };
      console.log(user);
    } else {
      setPasswordConfirmation('Password confirmation does not match with password');
    }
    axios
      .post('https://ka-users-api.herokuapp.com/users', { user: { ...data } })
      .then((res) => {
        console.log(res);
        history.push('/login');
      })
      .catch((error) => console.log(error.message));
  };
  useEffect(() => {
    register('name', { required: 'Name cannot be blank' });
    register('user', { required: 'User cannot be blank' });
    register('email', {
      required: 'E-mail cannot be blank',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'Invalid e-mail format',
      },
    });
    register('password', {
      required: 'Password cannot be blank',
      pattern: {
        value: /^(?=.*\d)(?=.*[A-Z0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/i,
        message: 'Password need: at least 6 characters, at least 1 special, at least 1 number',
      },
    });
    register('password_confirmation', {
      required: 'Please confirm your password',
      pattern: {
        value: /^(?=.*\d)(?=.*[A-Z0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/i,
        message: 'Confirmation does not match with password',
      },
    });
    return () => {
      unregister('name');
      unregister('user');
      unregister('email');
      unregister('password');
      unregister('password_confirmation');
    };
  }, [register, unregister]);
  return (
    <>
      <h4 style={{ textAlign: 'center' }}>Create Your Accont</h4>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          {errors.name ? (
            <label style={{ color: 'red' }}>{errors.name.message}</label>
          ) : (
              <label>Name</label>
            )}
        </div>
        <input onChange={(e) => setValue('name', e.target.value)} />
        <div>
          {errors.user ? (
            <label style={{ color: 'red' }}>{errors.user.message}</label>
          ) : (
              <label>User</label>
            )}
        </div>
        <input onChange={(e) => setValue('user', e.target.value)} />
        <div>
          {errors.email ? (
            <label style={{ color: 'red' }}>{errors.email.message}</label>
          ) : (
              <label>E-mail</label>
            )}
        </div>
        <input onChange={(e) => setValue('email', e.target.value)} />
        <div>
          {errors.password ? (
            <label style={{ color: 'red', height: '100%', width: '100%' }}>
              {errors.password.message}
            </label>
          ) : (
              <label>Password</label>
            )}
        </div>
        <input onChange={(e) => setValue('password', e.target.value)} type="password" />
        <div>
          <label>Password Confirmation</label>
        </div>
        <input
          onChange={(e) => setValue('password_confirmation', e.target.value)}
          type="password"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div style={{ textAlign: 'center', width: '50px' }}>{passwordConfirmation}</div>
    </>
  );
};
export default Register;
