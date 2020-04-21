import React, { useEffect, useContext, useState } from 'react';
import CardContext from '../context/card/cardContext';
import terms from '../terms';
import Navigation from './Navigation';
import Card from './Card';
import CardForm from './CardForm';

const Container = () => {
  const cardContext = useContext(CardContext);
  const {
    cards,
    setCards,
    setCurrent,
    current,
    list,
    writeMode,
    toggleWriteMode,
  } = cardContext;

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
      <div className="actions">
        <button
          className={writeMode ? 'btn btn-off' : 'btn btn-on'}
          onClick={(e) => toggleWriteMode()}
        >
          <i class="fas fa-pencil-alt"></i> {writeMode ? 'OFF' : 'ON'}
        </button>
        <Navigation
          cardIndex={cards.indexOf(current)}
          cardLength={cards.length}
          setCurrent={setCurrent}
        />
      </div>
    </div>
  );
};

export default Container;
