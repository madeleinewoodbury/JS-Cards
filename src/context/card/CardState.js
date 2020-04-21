import React, { useReducer } from 'react';
import CardContext from './cardContext';
import CardReducer from './cardReducer';
import terms from '../../terms';
import shuffle from '../../utils/shuffle';
import {
  SET_LIST,
  SET_CARDS,
  CLEAR_CARDS,
  SET_CURRENT,
  CLEAR_CURRENT,
  CARD_ERROR,
} from '../types';

const CardState = (props) => {
  const initialState = {
    list: terms[0].title,
    cards: [],
    current: null,
    lists: terms.map((t) => t.title),
  };

  const [state, dispatch] = useReducer(CardReducer, initialState);

  const setList = (listName) => {
    try {
      dispatch({
        type: SET_LIST,
        payload: listName,
      });
    } catch (err) {
      console.error(err);
      dispatch({ type: CARD_ERROR });
    }
  };

  const setCards = (data) => {
    let cards = shuffle(data[0].cards);
    clearCurrent();
    try {
      dispatch({
        type: SET_CARDS,
        payload: cards,
      });

      setCurrent(0);
    } catch (err) {
      console.error(err);
      dispatch({ type: CARD_ERROR });
    }
  };

  const setCurrent = (index) => {
    try {
      dispatch({
        type: SET_CURRENT,
        payload: index,
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
        list: state.list,
        cards: state.cards,
        current: state.current,
        lists: state.lists,
        setList,
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
