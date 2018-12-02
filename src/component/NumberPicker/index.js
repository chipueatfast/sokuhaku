import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { IconTypes } from 'react-native-fontawesome';
import { NumberPickerContainer, BorderedButton, Title, Number, Explanation, Subtitle } from './style';
import { Icon } from 'react-native-elements';

export default class NumberPicker extends React.Component {
    static  defaultProps = {
        subTitle: '',
    };

    state = {
        currentNumber: 0,
    };

    componentDidMount(): void {
        const {
            initialNumber,
        } = this.props;
        this.setState({
            currentNumber: initialNumber || 0,
        })

    }

    render() {
        const {
            title,
            subtitle,
        } = this.props;
        return (
            <NumberPickerContainer>
                <Explanation>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                </Explanation>
                <TouchableOpacity>
                    <BorderedButton>
                        <Icon
                            name='minus'
                            type='font-awesome'
                            color='#ec4953'
                            style={{
                                marginTop: 30,
                            }}
                            onPress={() => this.setState(state => {
                                const {currentNumber} = state;
                                return {
                                    currentNumber: (!currentNumber) ? currentNumber : currentNumber - 1,
                                }
                            })}
                        />
                    </BorderedButton>
                </TouchableOpacity>
                <View>
                    <Number>{ this.state.currentNumber }</Number>
                </View>
                <TouchableOpacity>
                <BorderedButton>
                    <Icon
                        name='plus'
                        type='font-awesome'
                        color='#ec4953'
                        onPress={() => this.setState(state => {
                            const {currentNumber} = state;
                            return {
                                currentNumber: currentNumber + 1,
                            }
                        })}
                    />
                </BorderedButton>
                </TouchableOpacity>
            </NumberPickerContainer>
        )
    }
}
