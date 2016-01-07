import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as userAction from '../actions/user';

const Index = ({ username, dispatch }) => {
  const actions = bindActionCreators(userAction, dispatch);

  if (username) {
    return (
      <h2>{ username }, you should <Link to="/"
      onClick={ () => {
        actions.onLogoutSubmit();
      }}>logout</Link></h2>
    );
  } else {
    return (
      <h2>You should <Link to="/login">login</Link></h2>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    username: state.user
  };
};

export default connect(mapStateToProps)(Index);
