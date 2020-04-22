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
    showTerm,
    setMastered,
    removeMastered,
    mastered,
    showMastered,
  } = cardContext;

  useEffect(() => {
    setCards(terms.filter((t) => t.title === list));

    // eslint-disable-next-line
  }, [list, showMastered]);

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

  const resetCard = () => {
    setText('');
    setAnswer('');
    showTerm ? toggleShowBack(false) : toggleShowBack(true);
  };

  const isMastered = () => {
    if (current) {
      if (mastered.find((card) => card.id === current.id)) {
        return (
          <button
            className="btn btn-success"
            onClick={(e) => removeMastered(current.id)}
          >
            <i className="fas fa-check"></i> Mastered
          </button>
        );
      } else {
        return (
          <button className="btn" onClick={(e) => setMastered(current)}>
            <i className="fas fa-times"></i> Mastered
          </button>
        );
      }
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
          <i className="fas fa-pencil-alt"></i> {writeMode ? 'OFF' : 'ON'}
        </button>
        <Navigation
          cardIndex={cards.indexOf(current)}
          cardLength={cards.length}
          setCurrent={setCurrent}
          resetCard={resetCard}
        />
        {isMastered()}
      </div>
    </div>
  );
};

export default Container;
