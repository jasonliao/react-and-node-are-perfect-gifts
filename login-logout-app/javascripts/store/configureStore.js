import { createStore } from 'redux';
import rootReducer from '../reducers';

const configureStore = initalState => {
  const store = createStore(rootReducer, initalState);
  return store;
}

export default configureStore;
