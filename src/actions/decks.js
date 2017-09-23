import {GET_DECK, GET_ALL_DECKS} from './types';
import * as storage from '../storage';


const getAllDecks = decks => ({
    type: GET_ALL_DECKS,
    decks
});

const getDeck = (deck, route) => ({
    type: GET_DECK,
    route,
    deck
});


export const fetchAllDecks = () => dispatch => {
    return storage
      .getDecks()
      .then(result => dispatch(getAllDecks(result.decks)));
};

export const fetchDeck = (title, route) => dispatch => {
    return storage
      .getDeck(title)
      .then(deck => dispatch(getDeck(deck, route)));
};