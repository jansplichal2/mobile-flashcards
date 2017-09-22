import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated
} from 'react-native';

import {Button} from 'react-native-elements';

class Card extends Component {

    constructor(props) {
        super(props);
        this.flipCard = this.flipCard.bind(this);
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);

        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg']
        });

        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        });
    }

    flipCard(direction) {

        if (direction === 'front') {
            Animated.spring(this.animatedValue, {
                toValue: 180,
                friction: 8,
                tension: 10
            }).start();
        } else {
            Animated.spring(this.animatedValue, {
                toValue: 0,
                friction: 8,
                tension: 10
            }).start();
        }

    }

    render() {
        const {
            container,
            title,
            linkText,
            buttonContainer,
            flipCard,
            flipCardBack
        } = styles;

        const frontAnimatedStyle = {
            transform: [
                {rotateY: this.frontInterpolate}
            ]
        };

        const backAnimatedStyle = {
            transform: [
                {rotateY: this.backInterpolate}
            ]
        };

        return (
          <View style={container}>
              <Animated.View style={[frontAnimatedStyle, flipCard]}>
                  <Text style={title}>Does React Native work with android?</Text>
                  <TouchableOpacity onPress={() => this.flipCard('front')}>
                      <Text style={linkText}>Answer</Text>
                  </TouchableOpacity>
              </Animated.View>
              <Animated.View style={[backAnimatedStyle, flipCard, flipCardBack]}>
                  <Text style={title}>Yes</Text>
                  <TouchableOpacity onPress={() => this.flipCard('back')}>
                      <Text style={linkText}>Question</Text>
                  </TouchableOpacity>
              </Animated.View>
              <View style={buttonContainer}>
                  <Button backgroundColor="green"
                          icon={{name: 'thumbs-o-up', type: 'font-awesome'}}
                          title='Correct' style={{marginBottom: 10}}/>
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
        backfaceVisibility: 'hidden',
        alignSelf: 'stretch',
        marginRight: 25,
        marginLeft: 25,
        marginTop: 20
    },
    flipCardBack: {
        position: 'absolute',
        top: 0,
        left: 25,
        right: 25,
    }
});

export default Card;