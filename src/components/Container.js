import React, { useEffect, useContext } from 'react';
import CardContext from '../context/card/cardContext';
import foundations from '../foundations';
import Card from './Card';

const Container = () => {
  const cardContext = useContext(CardContext);
  const { cards, setCards, setCurrent, current } = cardContext;

  useEffect(() => {
    cards.length < 1 && setCards(foundations);
  }, [setCards, cards.length]);

  return (
    <div className="Container">
      {current && <Card card={current} />}
      <div className="navigation">
        <button
          className="nav-button"
          onClick={(e) =>
            current.id === 1
              ? setCurrent(cards.length)
              : setCurrent(current.id - 1)
          }
        >
          <i className="fas fa-arrow-left"></i>
        </button>

        <p id="current"></p>

        <button
          className="nav-button"
          onClick={(e) =>
            current.id === cards.length
              ? setCurrent(1)
              : setCurrent(current.id + 1)
          }
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Container;
