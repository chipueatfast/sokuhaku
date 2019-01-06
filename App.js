/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Button, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Menu from './src/shared-component/Menu';
import HomePage from './src/container/HomePage';

const Router = createStackNavigator({
  Home: HomePage,
}, {
  initialRouteName: "Home",
  headerMode: "none",
});

const AppNavigator = createAppContainer(Router);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View style={{flex: 1}}>
            <AppNavigator style={styles.app}/>
            <Menu/>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  app: {
    fontFamily: 'Roboto',
  },
});
