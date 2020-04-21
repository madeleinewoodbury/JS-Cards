import React, { useContext } from 'react';
import CardContext from '../context/card/cardContext';
import ListForm from './ListForm';

const Navbar = () => {
  const cardContext = useContext(CardContext);
  const { toggleWriteMode } = cardContext;

  return (
    <nav className="Navbar">
      <h2>JS Cards</h2>
      <button onClick={(e) => toggleWriteMode()}>Write Mode</button>
      <ListForm />
    </nav>
  );
};

export default Navbar;
