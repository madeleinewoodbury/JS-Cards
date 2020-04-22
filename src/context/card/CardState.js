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
  TOGGLE_WRITE_MODE,
  SET_MASTERED,
  TOGGLE_SHOW_MASTERED,
} from '../types';

const CardState = (props) => {
  const initialState = {
    list: terms[0].title,
    cards: [],
    current: null,
    lists: terms.map((t) => t.title),
    writeMode: false,
    showTerm: true,
    mastered: JSON.parse(localStorage.getItem('mastered')) || [],
    showMastered: true,
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
    let arr = [];
    if (!state.showMastered) {
      let masteredArr = state.mastered.map((item) => item.id);
      data[0].cards.forEach((card) => {
        if (!masteredArr.includes(card.id)) {
          arr.push(card);
        }
      });
    } else {
      arr = data[0].cards;
    }

    let cards = shuffle(arr);
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

  const toggleWriteMode = () => dispatch({ type: TOGGLE_WRITE_MODE });

  const setMastered = (card) => {
    const arr = [...state.mastered, card];
    dispatch({ type: SET_MASTERED, payload: arr });
  };

  const removeMastered = (id) => {
    const arr = state.mastered.filter((card) => card.id !== id);
    dispatch({ type: SET_MASTERED, payload: arr });
  };

  const toggleShowMastered = () => dispatch({ type: TOGGLE_SHOW_MASTERED });

  return (
    <CardContext.Provider
      value={{
        list: state.list,
        cards: state.cards,
        current: state.current,
        lists: state.lists,
        writeMode: state.writeMode,
        showTerm: true,
        mastered: state.mastered,
        showMastered: state.showMastered,
        setList,
        setCards,
        setCurrent,
        clearCards,
        clearCurrent,
        toggleWriteMode,
        setMastered,
        removeMastered,
        toggleShowMastered,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;
