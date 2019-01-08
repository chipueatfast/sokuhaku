import React from 'react';
import {Text} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import {Button} from 'react-native-material-ui';
import {Container, Title, Buttons} from './styled';


class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            checked: false,
        }
    }
    render() {
        const {email} = this.state;
        return (
            <Container>
                <Title>
                    <Text
                        style={{
                            fontSize: 24,
                        }}
                    >
                        ユーザー登録
                    </Text>
                </Title>
                <TextField
                    label='メールアドレス'
                    value={email}
                    onChangeText={ (email) => this.setState({ email }) }
                />
                <Buttons>
                    <Button
                        style={{container: {width: 300}}}
                        raised
                        primary
                        text='作成'
                    />
                    <Text
                        style={{
                            color: '#006597',
                            marginTop: 15,}}
                    >
                        Sign in with Facebook</Text>
                </Buttons>
            </Container>
        )
    }
}

export default SignUpPage;
