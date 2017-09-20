import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import styled from 'styled-components/native';
import {connect} from 'react-redux';

const MainView = styled.View`
  flex:1;
  justify-content: center;
  align-items: stretch;
`;

const LargeText = styled.Text`
  text-align: center;
  font-size: 26px;
`;

const SmallText = styled.Text`
  text-align: center;
  font-size: 11px;
  margin-bottom: 90px;
`;

const ButtonView = styled.View`
  margin: 0 50px;
`;

class Deck extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: <Text>{navigation.state.params.title}</Text>,
        };

    };

    render() {
        const {params} = this.props.navigation.state;

        return (
            <MainView>
                <LargeText>
                    {params.title}
                </LargeText>
                <SmallText>
                    {3} cards
                </SmallText>
                <ButtonView>
                    <Button title="Add card" onPress={() => alert('Adding')}/>
                </ButtonView>
                <ButtonView>
                    <Button title="Start quiz" onPress={() => alert('Starting')}/>
                </ButtonView>
            </MainView>
        );
    }
}


export default connect()(Deck);