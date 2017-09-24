import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import store from '../store';
import Router from '../router';


const Main = () => {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Router/>
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
   container: {
       flex: 1
   }
});

export default Main;


