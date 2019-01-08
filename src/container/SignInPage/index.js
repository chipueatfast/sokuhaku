import React from 'react';
import { Text} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import {Button} from 'react-native-material-ui';
import {Container, Title, Buttons, CheckBoxArea} from './styled';

import CustomCheckbox from '../../component/CustomCheckBox';

class SignInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            checked: false,
        }
    }
    render() {
        const {email, password} = this.state;
        return (
            <Container>
                <Title>
                    <Text
                        style={{
                            fontSize: 24,
                        }}
                    >
                        ログイン
                    </Text>
                </Title>
                <TextField
                    label='メールアドレス'
                    value={email}
                    onChangeText={ (email) => this.setState({ email }) }
                />
                <TextField
                    type='password'
                    label='パスワード'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={ (password) => this.setState({ password }) }
                />
                <Buttons>
                    <CheckBoxArea>
                        <CustomCheckbox
                            text="ログインしたまま保存"
                            checked={this.state.checked}
                            checkHandler={() => this.setState(state => ({
                                checked: !state.checked,
                            }))}
                        />
                    </CheckBoxArea>

                    <Button
                        style={{container: {width: 300}}}
                        raised
                        primary
                        text='ログイン'
                    />
                    <Text
                        style={{
                            color: '#006597',
                            marginTop: 15,
                        }}
                    >
                        パスワードを忘れた場合
                    </Text>
                    <Text
                        style={{
                            color: '#006597',
                            marginTop: 10,}}
                    >
                        Sign in with Facebook</Text>
                </Buttons>
            </Container>
        )
    }
}

export default SignInPage;
