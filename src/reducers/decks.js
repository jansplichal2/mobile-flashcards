import {GET_DECK, GET_ALL_DECKS, ADD_NEW_DECK, ADD_NEW_CARD} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case  GET_ALL_DECKS:
            return {...state, ...action.decks};
        case GET_DECK:
            return {...state, [action.deck.title]: action.deck};
        case ADD_NEW_CARD:
            return {...state, [action.deck.title]: action.deck};
        case ADD_NEW_DECK:
            return {...state, [action.title]: action.deck[action.title]};
        default:
            return state;
    }
}


