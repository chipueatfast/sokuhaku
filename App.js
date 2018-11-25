/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomePage from './src/container/HomePage';

const Router = createStackNavigator({
  Home: HomePage,
}, {
  initialRouteName: "Home",
  headerMode: "none",
})

const AppNavigator = createAppContainer(Router);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <AppNavigator style={styles.app}/>
    );
  }
}


const styles = StyleSheet.create({
  app: {
    fontFamily: 'Roboto',
  }
});
