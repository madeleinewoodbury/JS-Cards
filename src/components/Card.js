import React, { useState } from 'react';

const Card = () => {
  const [showBack, toggleShowBack] = useState(false);

  const handleFlip = () => toggleShowBack(!showBack);

  return (
    <div className={showBack ? 'Card show-answer' : 'Card'}>
      <span className="flip" onClick={handleFlip}>
        <i className="fas fa-sync-alt"></i> Flip
      </span>
      <div className="inner-card">
        <div className="inner-card-front">
          <p>Front</p>
        </div>
        <div className="inner-card-back">
          <p>Back</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
