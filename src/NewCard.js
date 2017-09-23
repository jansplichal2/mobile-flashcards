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
import {connect} from 'react-redux';
import {saveCard} from './actions/cards'

class NewCard extends Component {

    static navigationOptions = {
        title: 'Add Card'
    };

    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: ''
        };
        this.saveCard = this.saveCard.bind(this);
    }

    saveCard() {
        const {question, answer} = this.state;
        const title = this.props.navigation.state.params.title;
        this.props.saveCard(title, question, answer);
        this.setState({
            question: '',
            answer: ''
        });
    }

    render() {
        const {container, buttonContainer, textInputContainer} = styles;

        return (
          <View style={container}>
              <View style={textInputContainer}>
                  <FormLabel>Your question</FormLabel>
                  <FormInput
                    value={this.state.question}
                    onChangeText={question => this.setState({question})}
                  />
              </View>
              <View style={textInputContainer}>
                  <FormLabel>Your answer</FormLabel>
                  <FormInput
                    value={this.state.answer}
                    onChangeText={answer => this.setState({answer})}
                  />
              </View>
              <View style={buttonContainer}>
                  <Button title="Submit" onPress={this.saveCard}/>
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

export default connect(null, {saveCard})(NewCard);