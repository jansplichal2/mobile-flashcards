import React, {Component} from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import {
  FormLabel,
  FormInput,
  Button
} from 'react-native-elements';

class NewCard extends Component {

  static navigationOptions = {
    title: 'Add Card'
  };

  render() {
    const {container, buttonContainer, textInputContainer} = styles;

    return (
      <View style={container}>
        <View style={textInputContainer}>
          <FormLabel>Your question</FormLabel>
          <FormInput onChangeText={(text) => console.log(text)}/>
        </View>
        <View style={textInputContainer}>
          <FormLabel>Your answer</FormLabel>
          <FormInput onChangeText={(text) => console.log(text)}/>
        </View>
        <View style={buttonContainer}>
          <Button title="Submit" onPress={() => {
            alert('Submit');
          }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInputContainer: {
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
  },
  buttonContainer: {
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
  }
});

export default NewCard;