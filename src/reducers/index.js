import {combineReducers} from 'redux';
import nav from './nav';

export default combineReducers({
    nav,
    decks: (state = {}) => ( state ),
});