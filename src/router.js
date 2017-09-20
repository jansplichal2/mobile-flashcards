import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckList from './DeckList';
import NewDeck from './NewDeck';
import Deck from './Deck';



const MainTab = TabNavigator({
    Home: { screen: DeckList },
    NewDeck: { screen: NewDeck },
});

const Router = StackNavigator({
    Home: { screen: MainTab },
    DeckView: { screen: Deck },
});

export default Router;