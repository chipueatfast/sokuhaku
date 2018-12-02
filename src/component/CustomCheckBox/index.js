import React from 'react';
import {View, Text} from 'react-native';
import { Checkbox } from 'react-native-material-ui';

import style from './style';

export function CustomCheckBox(props) {
    const {
        checkHandler,
        checked,
        text,
        subtext,
        value,
    } = props;
    return (
    <View style={style.checkBox}>
        <Checkbox label={text} value={value} checked={checked} value={0} onCheck={checkHandler}/>
        <Text style={style.explain}>{subtext}</Text>
    </View>
    )
}

CustomCheckBox.defaultProps = {
    subtext: '',
};

export default CustomCheckBox;
