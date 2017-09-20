import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styled from 'styled-components/native';

const MainView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const TitleText = styled.Text`
  font-size: 26px;
  padding: 20px;
  text-align: center;
`;

const StyledInput = styled.TextInput`
  height: 40px;
  width: 200px;
`;

const StyledButton = styled.Button`
  height: 20px;
  width: 400px;
`;

const CenteredView = styled.View`
  align-items: center;
  margin-top: 30px;
`;

//border: solid 1px black;

class Deck extends Component {

    static navigationOptions = {
        title: 'New Deck'
    };

    createNewDeck(event){
        console.log(event);
    }

    render() {
        return (
            <MainView>
                <View>
                    <CenteredView>
                        <TitleText>What is the title of your new deck?</TitleText>
                    </CenteredView>
                    <CenteredView>
                        <StyledInput placeholder="Deck title"
                                   onChangeText={(text) => this.setState({text})}/>
                    </CenteredView>
                    <CenteredView>
                        <StyledButton title="Submit" onPress={this.createNewDeck}/>
                    </CenteredView>
                </View>
            </MainView>
        );
    }
}

export default Deck;