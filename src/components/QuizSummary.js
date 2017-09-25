import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {calculatePercentage} from '../util';

const QuizSummary = ({correct, incorrect, style}) => {
    const {container, text, rateText} = styles;

    return (
      <View style={[container, style]}>
          <Text style={text}>You got {correct} questions right out of {correct + incorrect}.</Text>
          <Text style={rateText}>Success rate: {calculatePercentage(correct, incorrect)}%</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
    },
    text: {
        fontSize: 30
    },
    rateText: {
        fontSize:17,
        marginTop: 20
    }
});

export default QuizSummary;
