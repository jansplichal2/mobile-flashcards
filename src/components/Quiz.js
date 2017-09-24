import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {connect} from 'react-redux';
import _ from 'lodash';

import Card from './Card';

class Quiz extends Component {
    static navigationOptions = {
        title: 'Quiz'
    };

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            correct: 0,
            incorrect: 0,
            showSummary: false
        };
        this.onQuestionCorrect = this.onQuestionCorrect.bind(this);
        this.onQuestionIncorrect = this.onQuestionIncorrect.bind(this);
    }

    onQuestionCorrect() {
        this.setState(prevState => ({
            correct: prevState.correct + 1
        }));
        this.incrementIndex();
    }

    onQuestionIncorrect() {
        this.setState(prevState => ({
            incorrect: prevState.incorrect + 1
        }));
        this.incrementIndex();
    }

    incrementIndex() {
        const {questions} = this.props.deck;
        const {index} = this.state;

        const deckFinished = index >= _.size(questions) - 1;

        this.setState({
            index: deckFinished ? index : index + 1,
            showSummary: deckFinished
        });
    }

    render() {
        const {counter, container} = styles;
        const {deck} = this.props;
        const {index, correct, incorrect, showSummary} = this.state;

        return (
          <View style={container}>
              {!showSummary && <Text style={counter}>{index + 1} / {_.size(deck.questions)}</Text>}
              <Card
                showSummary={showSummary}
                summary={{correct, incorrect}}
                question={deck.questions[index]}
                onCorrect={this.onQuestionCorrect}
                onIncorrect={this.onQuestionIncorrect}/>
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

const mapStateToProps = (state, props) => {
    return {
        deck: state.decks[props.navigation.state.params.title]
    };
};

export default connect(mapStateToProps)(Quiz);