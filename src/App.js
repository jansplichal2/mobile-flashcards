import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import styled from 'styled-components/native';
import store from './store';
import Router from './router';

const MainView = styled.View`
    flex: 1
`;

const Main = () => {
    return (
        <Provider store={store}>
            <MainView>
                <Router/>
            </MainView>
        </Provider>
    );
};

export default Main;


