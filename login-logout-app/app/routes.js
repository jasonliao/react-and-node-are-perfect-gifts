import App from './containers/App';
import Index from './containers/Index';
import Login from './containers/Login';

const routes = {
  path: '',
  component: App,
  childRoutes: [{
    path: '/',
    component: Index }, {
    path: '/login',
    component: Login
  }]
};

export { routes };
