import React from 'react';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import PageRenderer from './Page-Renderer';

function App() {
  const user = {
    firstName: 'Jorge',
    lastName: 'Diaz',
  };

  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route
            // @ts-ignore
            component={() => 404}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
