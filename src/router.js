import { StackNavigator } from 'react-navigation';
import DeckList from './DeckList';
import Deck from './Deck';

const Router = StackNavigator({
    Home: { screen: DeckList },
    Next: { screen: Deck },
});

export default Router;