import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {
  Button
} from 'react-native-elements';

class Deck extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: `${navigation.state.params.title}`,
    };
  };

  render() {
    const {navigate} = this.props.navigation;
    const {title} = this.props.navigation.state.params;
    const {container, largeText, smallText, buttonContainer} = styles;

    return (
      <View style={container}>
        <Text style={largeText}>
          {title}
        </Text>
        <Text style={smallText}>
          {3} cards
        </Text>
        <View style={buttonContainer}>
          <Button title="Add card" onPress={() => {
            navigate('NewCard', {title})
          }}/>
        </View>
        <View style={buttonContainer}>
          <Button title="Start quiz" onPress={() => {
            navigate('Quiz', {title})
          }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  largeText: {
    textAlign: 'center',
    fontSize: 26
  },
  smallText: {
    textAlign: 'center',
    fontSize: 11,
    marginBottom: 90
  },
  buttonContainer: {
    borderColor: 'red',
    borderWidth: 0,
    borderStyle: 'solid',
    height: 50
  }
});


export default Deck;