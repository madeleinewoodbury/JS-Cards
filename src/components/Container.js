import React, { useEffect, useContext, useState } from 'react';
import CardContext from '../context/card/cardContext';
import terms from '../terms';
import Navigation from './Navigation';
import Card from './Card';
import CardForm from './CardForm';

const Container = () => {
  const cardContext = useContext(CardContext);
  const { cards, setCards, setCurrent, current, list, writeMode } = cardContext;

  useEffect(() => {
    setCards(terms.filter((t) => t.title === list));

    // eslint-disable-next-line
  }, [list]);

  const [showBack, toggleShowBack] = useState(false);
  const [answer, setAnswer] = useState('');
  const [text, setText] = useState('');

  const handleFlip = () => {
    toggleShowBack(!showBack);
    writeMode && checkAnswer();
  };

  const checkAnswer = () => {
    if (showBack) {
      text.toLowerCase() === current.term.toLowerCase()
        ? setAnswer('correct')
        : setAnswer('wrong');
    } else {
      text.toLowerCase() === current.def.toLowerCase()
        ? setAnswer('correct')
        : setAnswer('wrong');
    }
  };

  return (
    <div className="Container">
      {current && (
        <Card card={current} showBack={showBack} handleFlip={handleFlip} />
      )}
      {writeMode && <CardForm text={text} setText={setText} answer={answer} />}
      <Navigation
        cardIndex={cards.indexOf(current)}
        cardLength={cards.length}
        setCurrent={setCurrent}
      />
    </div>
  );
};

export default Container;
