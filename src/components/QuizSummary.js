import React from 'react';
import {View, Text} from 'react-native';
import {calculatePercentage} from '../util';

const QuizSummary = ({correct, incorrect, style}) => {
    return (
      <View style={style}>
          <Text>Correct: {correct}</Text>
          <Text>Wrong: {incorrect}</Text>
          <Text>Success rate: {calculatePercentage(correct, incorrect)}%</Text>
      </View>
    );
};

export default QuizSummary;
