import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Player from './components/Player';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/player" component={Player} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;