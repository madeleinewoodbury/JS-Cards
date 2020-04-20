import React, { useState } from 'react';

const Card = ({ card: { term, def } }) => {
  const [showBack, toggleShowBack] = useState(false);

  const handleFlip = () => toggleShowBack(!showBack);

  return (
    <div
      onClick={handleFlip}
      className={showBack ? 'Card show-answer' : 'Card'}
    >
      <div className="inner-card">
        <div className="inner-card-front">
          <span className="flip">
            <i className="fas fa-sync-alt"></i> Flip
          </span>
          <p className="term">{term}</p>
        </div>
        <div className="inner-card-back">
          <span className="flip">
            <i className="fas fa-sync-alt"></i> Flip
          </span>
          <p className="def">{def}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
