import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';
import '@formatjs/intl-relativetimeformat/dist/locale-data/fr';
import Layout from './Layout';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Router>
    <IntlProvider
      locale="fr"
      messages={{
        'nav.test': 'bonjour',
      }}
    >
      <Layout />
    </IntlProvider>
  </Router>,
  MOUNT_NODE,
);
