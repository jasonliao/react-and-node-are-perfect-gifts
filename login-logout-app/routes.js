import App from './javascripts/containers/App';
import Index from './javascripts/containers/Index';
import Login from './javascripts/containers/Login';

const routes = {
  path: '',
  component: App,
  childRoutes: [{
    path: '/',
    component: Index
  }, {
    path: '/login',
    component: Login
  }]
};

export { routes };
