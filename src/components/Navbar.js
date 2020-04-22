import React, { useContext } from 'react';
import CardContext from '../context/card/cardContext';
import ListForm from './ListForm';

const Navbar = () => {
  const cardContext = useContext(CardContext);
  const { showMastered, toggleShowMastered } = cardContext;
  return (
    <nav className="Navbar">
      <h2>JS Cards</h2>
      <ul>
        {showMastered ? (
          <li onClick={(e) => toggleShowMastered()}>
            <span className="hide-sm">Hide Mastered</span>{' '}
            <i className="fas fa-toggle-on fa-2x"></i>
          </li>
        ) : (
          <li onClick={(e) => toggleShowMastered()}>
            <span className="hide-sm">Show Mastered</span>{' '}
            <i className="fas fa-toggle-off fa-2x"></i>
          </li>
        )}
        <li>
          <ListForm />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
