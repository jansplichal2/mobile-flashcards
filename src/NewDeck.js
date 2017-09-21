import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  FormLabel,
  FormInput,
  Button
} from 'react-native-elements';

import {saveDeckTitle, createStore, getDecks, getDeck} from './storage';

class Deck extends Component {

  static navigationOptions = {
    title: 'New Deck'
  };

  state = {
    title: ''
  };

  createNewDeck(event) {
    //saveDeckTitle(this.state.title).then(() => alert('Saved'))
    createStore().then(() => getDeck('JavaScript')).then(result => alert(JSON.stringify(result)));
  }

  render() {
    const {container, title, inputContainer} = styles;

    return (
      <View style={container}>
        <View>
          <View>
            <Text style={title}>What is the title of your new deck?</Text>
          </View>
          <View style={inputContainer}>
            <FormLabel>Name your deck</FormLabel>
            <FormInput onChangeText={(title) => this.setState({title})}/>
          </View>
          <View style={[inputContainer,{marginTop:30}]}>
            <Button title="Submit" onPress={this.createNewDeck.bind(this)}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  title: {
    fontSize: 26,
    padding: 40,
    textAlign: 'center'
  },
  inputContainer: {
    marginTop: 0,
    marginLeft: 40,
    marginRight: 40
  }
});

export default Deck;