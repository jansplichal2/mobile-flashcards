import {ADD_NEW_CARD, GET_DECK} from './types';
import * as storage from '../storage';


const newCard = (deck) => ({
    type: ADD_NEW_CARD,
    deck
});

export const saveCard = (title, question, answer) => dispatch => {
  return storage
    .addCardToDeck(title, {question, answer})
    .then(deck => dispatch(newCard(deck)));
};