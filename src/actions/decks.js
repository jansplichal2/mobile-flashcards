import {GET_DECK, GET_ALL_DECKS, ADD_NEW_DECK} from './types';
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

const newDeck = (title, deck) => ({
    type: ADD_NEW_DECK,
    title,
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

export const addNewDeck = title => dispatch => {
    return storage
      .saveDeckTitle(title)
      .then(deck => dispatch(newDeck(title, deck)));
};