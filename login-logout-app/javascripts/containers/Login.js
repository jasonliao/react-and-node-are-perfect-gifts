import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from './../components/LoginForm';
import * as userAction from '../actions/user';

const Login = ({ dispatch }) => {
  const actions = bindActionCreators(userAction, dispatch);

  return (
    <LoginForm onLoginSubmit={actions.onLoginSubmit} />
  );
};

export default connect()(Login);
