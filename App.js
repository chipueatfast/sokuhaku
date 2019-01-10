/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Menu from './src/shared-component/Menu';
import HomePage from './src/container/HomePage';
import SignInPage from './src/container/SignInPage';
import SignUpPage from './src/container/SignUpPage';
import DetailPage from './src/container/DetailPage';
import NavigationService from './src/service/NavigationService';

const Router = createStackNavigator({
    Home: HomePage,
    SignIn: SignInPage,
    SignUp: SignUpPage,
    Detail: DetailPage,
}, {
  initialRouteName: "Detail",
  headerMode: "none",
});

const AppNavigator = createAppContainer(Router);

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <AppNavigator
                    ref={navigator => NavigationService.setTopLevelNavigator(navigator)}
                    style={styles.app}
                />
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
