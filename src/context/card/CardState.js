import React, { useReducer } from 'react';
import CardContext from './cardContext';
import CardReducer from './cardReducer';
import {
  SET_CARDS,
  CLEAR_CARDS,
  SET_CURRENT,
  CLEAR_CURRENT,
  CARD_ERROR,
} from '../types';

const CardState = (props) => {
  const initialState = {
    cards: [],
    current: null,
  };

  const [state, dispatch] = useReducer(CardReducer, initialState);

  const setCards = (cards) => {
    clearCurrent();
    try {
      dispatch({
        type: SET_CARDS,
        payload: cards,
      });

      setCurrent(1);
    } catch (err) {
      console.error(err);
      dispatch({ type: CARD_ERROR });
    }
  };

  const setCurrent = (id) => {
    try {
      dispatch({
        type: SET_CURRENT,
        payload: id,
      });
    } catch (err) {
      console.error(err);
      dispatch({ type: CARD_ERROR });
    }
  };

  const clearCards = () => dispatch({ type: CLEAR_CARDS });

  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  return (
    <CardContext.Provider
      value={{
        cards: state.cards,
        current: state.current,
        setCards,
        setCurrent,
        clearCards,
        clearCurrent,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;
