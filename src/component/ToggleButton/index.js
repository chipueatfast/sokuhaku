import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

import styleDefault from './style'

function ToggleButton(props) {
    const {
        activeColor,
        inactiveColor,
        pressHandler,
        text,
        isActive,
        style,
    } = props;
    return (
        <TouchableOpacity style={[isActive ? activeColor : inactiveColor, {...style}, styleDefault.toggleButtonContainer]} onPress={pressHandler}>
            <Text style={{color: isActive ? activeColor.color : inactiveColor.color}}>{text}</Text>
        </TouchableOpacity>
    ) 
}

ToggleButton.defaultProps = {
    inactiveColor: {
        color: "black",
        backgroundColor: "#99AEBB"
    },
}
export default ToggleButton;
