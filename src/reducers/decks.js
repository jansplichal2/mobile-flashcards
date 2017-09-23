import {GET_DECK, GET_ALL_DECKS} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case  GET_ALL_DECKS:
            return {...state, ...action.decks};
        case GET_DECK:
            return {...state, [action.deck.title]: action.deck};
        default:
            return state;
    }
}


