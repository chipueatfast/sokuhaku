import React from 'react';
import { View } from 'react-native';
import { Icon } from "react-native-elements";
import { TransparentInput } from "./style";
import style from './style';

class SearchInput extends React.Component {
    state = {
        haveText: false,
        currentText: '',
    };

    render() {
        const {
            placeholder,
        } = this.props;
        return (
            <View
                style = { style.container }
            >
                <Icon
                    name={this.state.haveText ? 'close' : 'search'}
                    type='font-awesome'
                    onPress={() => {
                        if (this.state.haveText) {
                            this.setState({
                                haveText: false,
                                currentText: '',
                            })
                        }
                    }}
                    color='#888'
                />
                <TransparentInput
                    onChangeText={(value) => {
                        this.setState({
                            haveText: Boolean(value),
                            currentText: value,
                        });
                    }}
                    value={this.state.currentText}
                    placeholder={placeholder}
                />
            </View>
        )
    }
}

export default SearchInput;

