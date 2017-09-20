import { TabNavigator } from 'react-navigation';
import DeckList from './DeckList';
import NewDeck from './NewDeck';

const Router = TabNavigator({
    Home: { screen: DeckList },
    Next: { screen: NewDeck },
});

export default Router;