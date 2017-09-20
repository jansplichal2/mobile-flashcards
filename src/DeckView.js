import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import styled from 'styled-components/native';

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

class DeckView extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: `${navigation.state.params.title}`,
        };
    };

    render() {
        const {navigate} = this.props.navigation;
        const {title} = this.props.navigation.state.params;

        return (
            <MainView>
                <LargeText>
                    {title}
                </LargeText>
                <SmallText>
                    {3} cards
                </SmallText>
                <ButtonView>
                    <Button title="Add card" onPress={() => {
                        navigate('NewCard', {title})
                    }}/>
                </ButtonView>
                <ButtonView>
                    <Button title="Start quiz" onPress={() => {
                        navigate('Quiz', {title})
                    }}/>
                </ButtonView>
            </MainView>
        );
    }
}


export default DeckView;