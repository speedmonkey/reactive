import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Imports pages
import Home from 'containers/Home';
import NotFoundPage from 'containers/NotFound';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
