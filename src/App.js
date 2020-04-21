import React from 'react';
import CardState from './context/card/CardState';
import Navbar from './components/Navbar';
import Container from './components/Container';

import './App.css';

const App = () => {
  return (
    <CardState>
      <Navbar />
      <Container />
    </CardState>
  );
};

export default App;
