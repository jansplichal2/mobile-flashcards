import React, {Component} from 'react';
import {
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';


class DeckList extends Component {
    static navigationOptions = {
        title: 'Decks'
    };

    constructor(props) {
        super(props);

        this.renderDeck = this.renderDeck.bind(this);
        this.selectDeck = this.selectDeck.bind(this);
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
        this.props.dispatch({type: "DeckView", title});
    }

    render() {
        const decks = _.map(this.props.decks, deck => {
            return {
                title: deck.title,
                questionNo: _.size(deck.questions)
            }
        });

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
    }
});

const mapStateToProps = (state) => {
    return {
        decks: state.decks
    };
};

export default connect(mapStateToProps)(DeckList);