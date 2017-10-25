import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import {Button} from 'react-native-elements';
import QuizSummary from './QuizSummary';


class Card extends Component {

    constructor(props) {
        super(props);

        this.state = {
            flipped: false
        };

        this.flipCard = this.flipCard.bind(this);
    }

    flipCard() {
        this.setState(prevState => ({
            flipped: !prevState.flipped
        }));
    }

    render() {
        const {
            container,
            title,
            linkText,
            buttonContainer,
            flipCard
        } = styles;

        const {
            question,
            onCorrect,
            onIncorrect,
            showSummary,
            summary,
            goBack,
            reset
        } = this.props;

        return (
          <View style={container}>
              {showSummary && <QuizSummary reset={reset} goBack={goBack} {...summary}/>}
              {!showSummary &&
              <View>
                  {this.state.flipped ?
                    <View style={flipCard}>
                        <Text style={title}>{question.answer}</Text>
                        <TouchableOpacity onPress={() => this.flipCard()}>
                            <Text style={linkText}>Question</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={flipCard}>
                        <Text style={title}>{question.question}</Text>
                        <TouchableOpacity onPress={() => this.flipCard()}>
                            <Text style={linkText}>Answer</Text>
                        </TouchableOpacity>
                    </View>
                  }

                  <View style={buttonContainer}>
                      <Button backgroundColor="green"
                              onPress={onCorrect}
                              title='Correct' style={{marginBottom: 10}}/>
                      <Button backgroundColor="red"
                              onPress={onIncorrect}
                              title='Incorrect'/>
                  </View>
              </View>
              }
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
        color: 'red',
        textAlign: 'center'
    },
    buttonContainer: {
        flex: 2,
        borderWidth: 0,
        alignSelf: 'stretch',
        marginTop: 25,
        marginLeft: 40,
        marginRight: 40
    },
    flipCard: {
        alignSelf: 'stretch',
        marginRight: 25,
        marginLeft: 25,
        marginTop: 20
    },

});

export default Card;