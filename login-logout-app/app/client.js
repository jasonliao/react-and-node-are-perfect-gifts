import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { routes } from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()} >
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
);
