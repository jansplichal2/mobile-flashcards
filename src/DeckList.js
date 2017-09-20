import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Entypo} from '@expo/vector-icons';


const BorderedView = styled.View`
    height: 100px;
    border: black 1px solid;
    padding: 10px;
    flex: 1;
`;

class DeckList extends Component {

    static navigationOptions = {
        title: 'Decks'
    };

    render() {

        const {navigate} = this.props.navigation;

        return (
            <BorderedView>
                <Text>Deck list</Text>
            </BorderedView>
        );
    }
}

export default DeckList;