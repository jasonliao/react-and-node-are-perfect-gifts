import React from 'react';
import { Link } from 'react-router';

const AppComponent = (props) => (
  <div>
    <h2>Welcome to my App</h2>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
    { props.children }
  </div>
);

export default AppComponent;
