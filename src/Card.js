import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import {Button} from 'react-native-elements';

class Card extends Component {
  render() {
    const {container, title, linkText, buttonContainer} = styles;

    return (
      <View style={container}>
        <Text style={title}>Does React Native work with android?</Text>
        <TouchableOpacity onPress={() => alert('Flip')}>
          <Text style={linkText}>Answer</Text>
        </TouchableOpacity>
        <View style={buttonContainer}>
          <Button backgroundColor="green"
                  icon={{name: 'thumbs-o-up', type: 'font-awesome'}}
                  title='Correct' style={{marginBottom: 20}}/>
          <Button backgroundColor="red"
                  icon={{name: 'thumbs-o-down', type: 'font-awesome'}}
                  title='Incorrect'/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 0,
    borderStyle: 'solid',
    alignItems: 'center'
  },
  title: {
    fontSize: 26,
    padding: 40,
    textAlign: 'center'
  },
  linkText: {
    color: 'red'
  },
  buttonContainer: {
    flex: 1,
    borderWidth: 0,
    alignSelf: 'stretch',
    marginTop: 70,
    marginLeft: 40,
    marginRight: 40
  }
});

export default Card;