import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import App from 'containers/App';
import configureStore from './initialStore';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';
import '@formatjs/intl-relativetimeformat/dist/locale-data/fr';

const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <IntlProvider
        locale="fr"
        messages={{
          'nav.test': 'bonjour',
        }}
      >
        <App />
      </IntlProvider>
    </Router>
  </Provider>,
  MOUNT_NODE,
);
