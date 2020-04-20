import React from 'react';
import CardState from './context/card/CardState';
import Container from './components/Container';
import './App.css';

const App = () => {
  return (
    <CardState>
      <Container />
    </CardState>
  );
};

export default App;
