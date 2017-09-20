import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const BorderedView = styled.View`
    height: 100px;
    border: black 1px solid;
    padding: 10px;
    flex: 1
`;

class Deck extends Component {

    static navigationOptions = {
        title: 'Next'
    };

    render() {
        return (
            <BorderedView>
                <BorderedView>
                    <Text>Next page</Text>
                </BorderedView>
                <BorderedView>
                    <Text>Next Text</Text>
                </BorderedView>

            </BorderedView>
        );
    }
}

export default Deck;