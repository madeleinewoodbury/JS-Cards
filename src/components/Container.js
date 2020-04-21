import React, { useEffect, useContext } from 'react';
import CardContext from '../context/card/cardContext';
import terms from '../terms';
import Card from './Card';

const Container = () => {
  const cardContext = useContext(CardContext);
  const { cards, setCards, setCurrent, current, list } = cardContext;

  useEffect(() => {
    setCards(terms.filter((t) => t.title === list));

    // eslint-disable-next-line
  }, [list]);

  return (
    <div className="Container">
      {current && <Card card={current} />}
      <div className="navigation">
        <button
          className="nav-button"
          onClick={(e) =>
            cards.indexOf(current) === 0
              ? setCurrent(cards.length - 1)
              : setCurrent(cards.indexOf(current) - 1)
          }
        >
          <i className="fas fa-arrow-left"></i>
        </button>

        <p id="current">
          {cards.indexOf(current) + 1} / {cards.length}
        </p>

        <button
          className="nav-button"
          onClick={(e) =>
            cards.indexOf(current) === cards.length - 1
              ? setCurrent(0)
              : setCurrent(cards.indexOf(current) + 1)
          }
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Container;
