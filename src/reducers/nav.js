import {NavigationActions} from 'react-navigation';
import {MainTab} from '../router';
import {GET_DECK} from '../types';

const initialAction = MainTab.router.getActionForPathAndParams('NewDeck');
const initialNavState = MainTab.router.getStateForAction(
  initialAction
);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case '@@redux/INIT':
            nextState = MainTab.router.getStateForAction(
              NavigationActions.back(),
              state
            );
            break;
        case GET_DECK:
            nextState = MainTab.router.getStateForAction(
              NavigationActions.navigate({routeName: action.route, params: {title: action.title}}),
              state
            );
            break;
        default:
            nextState = MainTab.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}

export default nav;