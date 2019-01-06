import React from "react";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import {StyleSheet} from "react-native";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

                <ActionButton
                    degrees={0}
                    useNativeFeedback={false}
                    activeOpacity={1}
                    verticalOrientation='down'
                    buttonColor="white"
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
                            width: 70,
                        }}
                        useNativeFeedback={false}
                        buttonColor='white'
                        title="サインアップ"
                        onPress={() => {}}
                    >
                        <Icon name="md-person-add" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item
                        textStyle={{
                            width: 50,
                        }}
                        buttonColor='white'
                        title="ログイン"
                        onPress={() => {}}
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
});
