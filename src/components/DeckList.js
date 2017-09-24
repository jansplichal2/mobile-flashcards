import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import _ from 'lodash';

import {fetchAllDecks, fetchDeck} from '../actions/decks';


class DeckList extends Component {
    static navigationOptions = {
        title: 'Decks'
    };

    constructor(props) {
        super(props);

        this.renderDeck = this.renderDeck.bind(this);
        this.selectDeck = this.selectDeck.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllDecks();
    }

    renderDeck({item}) {
        const {largeText, smallText, deck} = styles;

        return (
          <TouchableOpacity style={deck} onPress={() => this.selectDeck(item.title)}>
              <Text style={largeText}>{item.title}</Text>
              <Text style={smallText}>{item.questionNo} cards</Text>
          </TouchableOpacity>
        );
    }

    selectDeck(title) {
        this.props.fetchDeck(title, 'DeckView');
    }

    render() {
        const decks = _.map(this.props.decks, deck => {
            return {
                title: deck.title,
                questionNo: _.size(deck.questions)
            }
        });

        if (_.isEmpty(decks)) {
            return (
              <View style={styles.container}>
                  <Text>No decks available...</Text>
                  <TouchableOpacity style={styles.button}  onPress={() =>
                    this.props.dispatch(NavigationActions.navigate({ routeName: 'NewDeck'})) }>
                        <Text style={styles.buttonText}>Create new deck ...</Text>
                  </TouchableOpacity>
              </View>
            );
        }

        return (
          <FlatList
            style={styles.deckList}
            data={decks}
            renderItem={this.renderDeck}
            keyExtractor={item => item.title}
          />
        );
    }
}

const styles = StyleSheet.create({
    largeText: {
        fontSize: 18
    },
    smallText: {
        fontSize: 11
    },
    deck: {
        height: 100,
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    deckList: {
        marginTop: 20
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 15
    },
    buttonText: {
        color: 'blue'
    }
});

const mapStateToProps = state => {
    return {
        decks: state.decks
    };
};

export default connect(mapStateToProps, {fetchAllDecks, fetchDeck})(DeckList);