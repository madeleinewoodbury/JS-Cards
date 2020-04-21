import React from 'react';
import { Link } from 'react-router-dom';
import ListForm from './ListForm';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/">
        <h2>JS Cards</h2>
      </Link>
      <ul>
        <li>
          <Link to="/mastered"> Terms Mastered</Link>
        </li>
        <li>
          <ListForm />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
