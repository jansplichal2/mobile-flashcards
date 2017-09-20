import { AsyncStorage } from 'react-native';

const STORAGE_KEY = '@flashcards-storeage-key';


const getDecks = async () => {
    try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);
        return value;
    } catch (error) {
        console.log(error);
        throw error;
    }
};


const getDeck = deckName => {

};

const saveDeckTitle = (deckName, title) => {

};

const addCardToDeck = (title, card) => {

};