import React from 'react';

const Navigation = ({ cardIndex, cardLength, setCurrent }) => {
  return (
    <div className="navigation">
      <button
        className="nav-button"
        onClick={(e) =>
          cardIndex === 0
            ? setCurrent(cardLength - 1)
            : setCurrent(cardIndex - 1)
        }
      >
        <i className="fas fa-arrow-left"></i>
      </button>

      <p id="current">
        {cardIndex + 1} / {cardLength}
      </p>

      <button
        className="nav-button"
        onClick={(e) =>
          cardIndex === cardLength - 1
            ? setCurrent(0)
            : setCurrent(cardIndex + 1)
        }
      >
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Navigation;
