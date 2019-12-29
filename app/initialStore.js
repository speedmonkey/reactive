import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { actionMiddleware } from './middlewares';

// Create the sore with redux-thunk middleware
const enhancers = [applyMiddleware(actionMiddleware)];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, composeEnhancers(...enhancers));
}
