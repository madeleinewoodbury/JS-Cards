import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CardState from './context/card/CardState';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Mastered from './components/Mastered';

import './App.css';

const App = () => {
  return (
    <CardState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Container} />
          <Route exact path="/mastered" component={Mastered} />
        </Switch>
      </Router>
    </CardState>
  );
};

export default App;
