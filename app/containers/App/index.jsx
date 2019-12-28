import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Imports pages
import Home from 'containers/Home';
import NotFoundPage from 'containers/NotFound';
import Header from 'containers/Header';
import GlobalStyle from './globalStyles';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFoundPage} />
    </Switch>
    <GlobalStyle />
  </div>
);

export default App;
