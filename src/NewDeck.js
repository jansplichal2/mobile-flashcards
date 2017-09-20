import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styled from 'styled-components/native';

const MainView = styled.View`
    flex: 1;
    align-items: stretch;
    
`;

const TitleText = styled.Text`
  font-size: 26px;
  padding: 40px;
  text-align: center;
`;

const StyledInput = styled.TextInput`
  height: 50px;
`;

const StyledInputView = styled.View`
  margin: 10px 40px;
`;

const StyledButtonView = styled.View`
    margin-top: 20px;
    align-self: center;
`;

const CenteredView = styled.View`   
`;


class Deck extends Component {

    static navigationOptions = {
        title: 'New Deck'
    };

    createNewDeck(event){
        console.log(event);
        alert('Submitting');
    }

    render() {
        return (
            <MainView>
                <View>
                    <CenteredView>
                        <TitleText>What is the title of your new deck?</TitleText>
                    </CenteredView>
                    <StyledInputView>
                        <StyledInput placeholder="Deck title"
                                   onChangeText={(text) => this.setState({text})}/>
                    </StyledInputView>
                    <StyledButtonView>
                        <Button title="Submit" onPress={this.createNewDeck}/>
                    </StyledButtonView>
                </View>
            </MainView>
        );
    }
}

export default Deck;