import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    StackNavigator,
    TabNavigator,
    addNavigationHelpers
} from 'react-navigation';

import DeckView from './components/Deck';
import DeckList from './components/DeckList';
import NewCard from './components/NewCard';
import NewDeck from './components/NewDeck';
import Quiz from './components/Quiz';

const Router = StackNavigator({
    DeckList: { screen: DeckList },
    DeckView: { screen: DeckView },
    NewCard: { screen: NewCard },
    Quiz: { screen: Quiz },
},{
    initialRouteName: 'DeckList'
});

export const MainTab = TabNavigator({
    Home: {screen: Router},
    NewDeck: {screen: NewDeck},
});

const RouterWithNavigationState = ({ dispatch, nav }) => (
  <MainTab navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

RouterWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(RouterWithNavigationState);