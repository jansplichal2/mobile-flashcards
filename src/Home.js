import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';
import DeckList from './DeckList';
import NewDeck from './NewDeck';


const MainTab = TabNavigator({
    DeckList: {screen: DeckList},
    NewDeck: {screen: NewDeck},
});

class Home extends Component {
    render() {
        return <MainTab/>;
    }
}

export default Home;