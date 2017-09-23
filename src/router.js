import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    StackNavigator,
    addNavigationHelpers
} from 'react-navigation';

import DeckView from './Deck';
import NewCard from './NewCard';
import Quiz from './Quiz';
import Home from './Home';

export const Router = StackNavigator({
    Home: { screen: Home },
    DeckView: { screen: DeckView },
    NewCard: { screen: NewCard },
    Quiz: { screen: Quiz },
});

const RouterWithNavigationState = ({ dispatch, nav }) => (
  <Router navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

RouterWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(RouterWithNavigationState);