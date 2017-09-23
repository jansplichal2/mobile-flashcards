import {AsyncStorage} from 'react-native';
import {decks} from './store';

const STORAGE_KEY = '@flashcards-storage:key';

export const createStore = async () => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
};

export const getDecks = async () => {
    const rawDecks = await AsyncStorage.getItem(STORAGE_KEY);
    return JSON.parse(rawDecks);
};

export const getDeck = async title => {
    const decks = await getDecks();
    return decks["decks"][title];
};

export const saveDeckTitle = async title => {
    const newDeck = {
        decks: {
            [title]: {
                title,
                questions: []
            }
        }
    };

    await AsyncStorage.mergeItem(
      STORAGE_KEY,
      JSON.stringify(newDeck)
    );

    return newDeck.decks;
};

export const addCardToDeck = async (title, {question, answer}) => {
    const decks = await getDecks();
    const deck = decks["decks"][title];
    deck["questions"].append({question, answer});

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
    return decks["decks"][title];
};