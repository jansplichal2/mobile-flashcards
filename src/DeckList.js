import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import _ from 'lodash';

const DeckView = styled.TouchableOpacity`
    height: 100px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: black;
`;

const SmallText = styled.Text`
  font-size: 11px;
`;
const LargerText = styled.Text`
  font-size: 18px;
`;


class DeckList extends Component {
    static navigationOptions = {
        headerMode: 'none'
    };

    constructor(props){
        super(props);

        this.renderDeck = this.renderDeck.bind(this);
        this.selectDeck = this.selectDeck.bind(this);
    }

    renderDeck({item}) {
        return (
            <DeckView onPress={() => this.selectDeck(item.title)}>
                <LargerText>{item.title}</LargerText>
                <SmallText>{item.questionNo} cards</SmallText>
            </DeckView>
        );
    }

    selectDeck(title){
        const {navigate} = this.props.navigation;
        navigate('DeckView', {title});
    }

    render() {

        const decks = _.map(this.props.decks, deck => {
            return {
                title : deck.title,
                questionNo: _.size(deck.questions)
            }
        });

        return (
            <FlatList
                style={{marginTop: 30}}
                data={decks}
                renderItem={this.renderDeck}
                keyExtractor={item => item.title}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        decks: state.decks
    };
};

export default connect(mapStateToProps)(DeckList);