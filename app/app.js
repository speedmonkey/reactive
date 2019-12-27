import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'containers/App';
import { changeLocaleAction } from 'containers/Language/actions';
import Language from 'containers/Language';
import configureStore from './initialStore';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';
import '@formatjs/intl-relativetimeformat/dist/locale-data/fr';
import { translationMessages } from './i18n';

const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('app');

// Store actual language and do not change it (even on reload)
if (localStorage.reactiveLanguage)
  store.dispatch(changeLocaleAction(localStorage.reactiveLanguage));

ReactDOM.render(
  <Provider store={store}>
    <Language messages={translationMessages}>
      <Router>
        <App />
      </Router>
    </Language>
  </Provider>,
  MOUNT_NODE,
);
