import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Card from './Card';

class Quiz extends Component {
  static navigationOptions = {
    title: 'Quiz'
  };

  render() {
    const {counter, container} = styles;

    return (
      <View style={container}>
        <Text style={counter}>1 / 2</Text>
        <Card/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  counter: {
    fontSize: 11,
    marginTop: 5,
    marginLeft: 5
  }
});

export default Quiz;