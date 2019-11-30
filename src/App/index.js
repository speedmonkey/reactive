import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Imports pages
import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
