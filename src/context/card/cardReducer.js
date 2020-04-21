import {
  SET_LIST,
  SET_CARDS,
  CLEAR_CARDS,
  SET_CURRENT,
  CLEAR_CURRENT,
  CARD_ERROR,
} from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LIST:
      return {
        ...state,
        list: payload,
      };
    case SET_CARDS:
      return {
        ...state,
        cards: payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: state.cards.find((card, index) => index === payload),
      };
    case CLEAR_CARDS:
      return {
        ...state,
        cards: [],
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case CARD_ERROR:
      return state;
    default:
      return state;
  }
};
