import {combineReducers} from 'redux';
import nav from './nav';
import decks from './decks';

export default combineReducers({
    nav,
    decks
});