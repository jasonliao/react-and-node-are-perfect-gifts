import React from 'react';
import { Link } from 'react-router';

const LoginForm = ({ onLoginSubmit }) => {
  let usernameInput, passwordInput;
  return (
    <div>
      <label>username: </label><input type="text" ref={ node => usernameInput = node } /><br />
      <label>password: </label><input type="password" ref={ node => passwordInput = node } /><br />
      <Link to="/" onClick={ () => {
        onLoginSubmit(usernameInput.value, passwordInput.value);
      }}>Login</Link>{' '}
      <Link to="/">Return</Link>
    </div>
  );
};

export default LoginForm;
