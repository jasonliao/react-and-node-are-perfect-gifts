import { LOGIN, LOGOUT } from '../constants/ActionTypes';

const initialState = '';

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.username
    case LOGOUT:
      return '';
    default:
      return state;
  }
};

export default user;
