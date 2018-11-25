import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import style from './style';

export default function CustomCard(props) {
    const {
        style: styleProp,
        pressHandler,
        children,
    } = props;
    return (
        <View style={[style.container, styleProp]}>
            {   children    }
        </View>      
    )
}