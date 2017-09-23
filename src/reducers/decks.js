import {GET_DECK, GET_ALL_DECKS} from '../types';

export default (state = {}, action) => {
    switch(action.type){
        case  GET_ALL_DECKS:
            return state;
        case GET_DECK:
            return state;
        default:
            return state;
    }
}


