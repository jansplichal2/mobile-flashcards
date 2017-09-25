import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import * as storage from './util/storage';

export const decks = {
    "decks": {
        "React": {
            "title": "React",
            "questions": [
                {
                    "question": "What is React?",
                    "answer": "A library for managing user interfaces"
                },
                {
                    "question": "Where do you make Ajax requests in React?",
                    "answer": "The componentDidMount lifecycle event"
                }
            ]
        },
        "JavaScript": {
            "title": "JavaScript",
            "questions": [
                {
                    "question": "What is a closure?",
                    "answer": "The combination of a function and the lexical environment within which that function was declared."
                }
            ]
        },
        "Java": {
            "title": "Java",
            "questions": [
                {
                    "question": "What is a class?",
                    "answer": "Mass."
                },
                {
                    "question": "What is an annotation?",
                    "answer": "Hannotation."
                },
                {
                    "question": "What is a constructor?",
                    "answer": "Monstructor."
                }
            ]
        }
    }
};

storage.createStore();
const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

export default store;