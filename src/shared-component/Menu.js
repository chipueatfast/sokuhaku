import React from "react";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import {StyleSheet} from "react-native";

import NavigationService from '../service/NavigationService';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

                <ActionButton
                    style={{
                        border: '1px solid black',
                    }}
                    degrees={0}
                    useNativeFeedback={false}
                    activeOpacity={1}
                    verticalOrientation='down'
                    buttonColor="white"
                    fixNativeFeedbackRadius
                    hideShadow={false}
                    shadowStyle={{
                        shadowOffset:{  width: 10,  height: 10,  },
                        shadowColor: 'black',
                        shadowOpacity: 1.0,
                    }}
                    renderIcon={(active) => !active ?
                        (<Icon
                            style={styles.actionButtonIcon}
                            name="md-menu"
                        />):
                        (<Icon
                            style={styles.actionButtonIcon}
                            name="md-close"
                        />)
                    }
                >
                    <ActionButton.Item
                        textStyle={{
                            width: 40,
                        }}
                        useNativeFeedback={false}
                        buttonColor='white'
                        title="ホーム"
                        onPress={() => {
                            NavigationService.navigate('Home')
                        }}
                    >
                        <Icon name="md-home" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item
                        textStyle={{
                            width: 70,
                        }}
                        useNativeFeedback={false}
                        buttonColor='white'
                        title="サインアップ"
                        onPress={() => {{NavigationService.navigate('SignUp')}}}
                    >
                        <Icon name="md-person-add" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item
                        textStyle={{
                            width: 50,
                        }}
                        buttonColor='white'
                        title="ログイン"
                        onPress={() => {NavigationService.navigate('SignIn')}}
                        useNativeFeedback={false}
                    >
                        <Icon name="md-log-in" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
        )
    }
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'black',
    },
    mainActionButtonIcon: {
        shadowOffset:{  width: 10,  height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    }
});
