import * as types from '../constants/ActionTypes';

export const onLoginSubmit = (username, password) => {
  // match username and password
  return {
    type: types.LOGIN,
    username
  };
};

export const onLogoutSubmit = () => {
  return {
    type: types.LOGOUT
  };
};

