import {NavigationActions} from 'react-navigation';
import {Router} from '../router';

const initialAction = Router.router.getActionForPathAndParams('Home');
const initialNavState = Router.router.getStateForAction(
  initialAction
);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'Login':
            nextState = Router.router.getStateForAction(
              NavigationActions.back(),
              state
            );
            break;
        case 'DeckView':
            nextState = Router.router.getStateForAction(
              NavigationActions.navigate({routeName: 'DeckView', params: {title: action.title}}),
              state
            );
            break;
        default:
            nextState = Router.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

export default nav;