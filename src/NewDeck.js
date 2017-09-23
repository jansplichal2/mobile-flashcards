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

import {connect} from 'react-redux';
import {addNewDeck} from './actions/decks';

class Deck extends Component {

    static navigationOptions = {
        title: 'New Deck'
    };

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
        this.createNewDeck = this.createNewDeck.bind(this);
    }

    createNewDeck(event) {
        this.setState({title: ''});
        this.props.addNewDeck(this.state.title);
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
                      <FormInput value={this.state.title} onChangeText={(title) => this.setState({title})}/>
                  </View>
                  <View style={[inputContainer, {marginTop: 30}]}>
                      <Button title="Submit" onPress={this.createNewDeck}/>
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

export default connect(null, {addNewDeck})(Deck);