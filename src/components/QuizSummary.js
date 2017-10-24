import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {calculatePercentage} from '../util';

const QuizSummary = ({correct, incorrect, style, goBack, reset}) => {
    const {container, text, rateText, buttonContainer} = styles;

    return (
      <View style={[container, style]}>
          <Text style={text}>You got {correct} questions right out of {correct + incorrect}.</Text>
          <Text style={rateText}>Success rate: {calculatePercentage(correct, incorrect)}%</Text>

          <View style={buttonContainer}>
              <Button
                      onPress={()=>{
                          reset();
                      }}
                      title='Restart Quiz' style={{marginBottom: 10}}/>
              <Button
                      onPress={() => {
                          goBack();
                      }}
                      title='Back to Deck'/>
          </View>
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
    },
    buttonContainer: {
        flex: 2,
        borderWidth: 0,
        alignSelf: 'stretch',
        marginTop: 25,
        marginLeft: 40,
        marginRight: 40
    },
});

export default QuizSummary;
