import React from 'react';

const Navigation = ({ cardIndex, cardLength, setCurrent, resetCard }) => {
  const handleNext = (e) => {
    cardIndex === cardLength - 1 ? setCurrent(0) : setCurrent(cardIndex + 1);
    resetCard();
  };

  const handlePrev = (e) => {
    cardIndex === 0 ? setCurrent(cardLength - 1) : setCurrent(cardIndex - 1);
    resetCard();
  };

  return (
    <div className="navigation">
      <button className="nav-button" onClick={handlePrev}>
        <i className="fas fa-arrow-left"></i>
      </button>

      <p id="current">
        {cardIndex + 1} / {cardLength}
      </p>

      <button className="nav-button" onClick={handleNext}>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Navigation;
