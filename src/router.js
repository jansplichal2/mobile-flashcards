import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckList from './DeckList';
import NewDeck from './NewDeck';
import DeckView from './DeckView';
import NewCard from './NewCard';



const MainTab = TabNavigator({
    DeckList: { screen: DeckList },
    NewDeck: { screen: NewDeck },
});

const Router = StackNavigator({
    Home: { screen: MainTab },
    DeckView: { screen: DeckView },
    NewCard: { screen: NewCard },
});

export default Router;