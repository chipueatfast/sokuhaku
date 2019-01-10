import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import {Button} from "react-native-material-ui";

import {HighLight, Container, BorderedButton, Selection, GuestPicker,
    Divider,
    ProcedureForm,
    MustRead,
} from "./styled";
import {Icon} from "react-native-elements";
import DatePicker from "react-native-datepicker";

class BookingForm extends React.Component {
    state={
        numGuest: 1,
        email: '',
        name: '',
        phone: '',
        note: '',
        date:"2016-05-15",
    };

    render() {
        const {email, name, phone, note, numGuest} = this.state;
        return (
            <View>
                <HighLight/>
                <Container
                    style={{
                        elevation: 1,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            marginBottom: 20,
                        }}
                    >
                        当日予約
                    </Text>
                    <GuestPicker>
                        <BorderedButton>
                            <Icon
                                name='minus'
                                type='font-awesome'
                                color='#ec4953'
                                style={{
                                    marginTop: 30,
                                }}
                                onPress={() => {
                                    if (numGuest === 2) {
                                        this.setState({
                                            numGuest: 1,
                                        })
                                    }
                                }}
                            />
                        </BorderedButton>
                        <Selection
                            style={{
                                borderRadius: 15,
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontSize: 14,
                                }}
                            >
                                {this.state.numGuest} ゲスト
                            </Text>
                        </Selection>
                        <BorderedButton>
                            <Icon
                                name='plus'
                                type='font-awesome'
                                color='#ec4953'
                                style={{
                                    marginTop: 30,
                                }}
                                onPress={() => {
                                    if (numGuest === 1) {
                                        this.setState({
                                            numGuest: 2,
                                        })
                                    }
                                }}
                            />
                        </BorderedButton>
                    </GuestPicker>
                    <View
                        style={{
                            borderColor: '#009688',
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderRadius: 2,
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginTop: 15,
                        }}
                    >
                        <Text
                            style={{
                                color: '#009688'
                            }}
                        >
                            チェックアウト日
                        </Text>
                        <DatePicker
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2016-05-01"
                            maxDate="2016-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    display: 'none',
                                },
                                dateInput: {
                                    borderWidth: 0,
                                },
                                dateText: {
                                    fontWeight: 'bold',
                                    color: '#009688',
                                }
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                    </View>
                    <Text
                        style={{
                            marginTop: 15,
                        }}
                    >
                        ホストに一言
                    </Text>
                    <TextInput
                        style={{
                            marginTop: -10,
                        }}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(note) => this.setState({note})}
                        value={note}
                    />

                    <Divider/>
                    <ProcedureForm>
                        <Text
                            style={{
                                color: '#006597',
                                textAlign: 'center',
                                fontSize: 14,
                                fontWeight: 'bold',
                            }}
                        >
                            予約情報入力
                        </Text>
                        <MustRead
                            style={{
                                marginTop: 15,
                            }}
                        >
                            *ご登録のメール以外のメールでも受信をされたい場合は
                        </MustRead>
                        <MustRead>
                            以下をご入力下さい。
                        </MustRead>
                        <MustRead>
                            入力がない場合はご登録のメールアドレスに予約情報を送らせて頂きます。
                        </MustRead>

                        <TextField
                            style={{
                                marginTop: 5,
                            }}
                            label='メールアドレス'
                            value={email}
                            onChangeText={ (email) => this.setState({ email }) }
                        />

                        <TextField
                            style={{
                                marginTop: 5,
                            }}
                            label='お名前'
                            value={name}
                            onChangeText={ (name) => this.setState({ name }) }
                        />

                        <TextField
                            style={{
                                marginTop: 5,
                            }}
                            label='電話番号'
                            value={phone}
                            onChangeText={ (phone) => this.setState({ phone }) }
                        />
                        <Button
                            style={{container:
                                    {
                                        marginTop: 15,
                                        backgroundColor: 'rgb(253, 102, 109)',
                                        width: '100%',
                                    },
                                text: {
                                    color: 'white',
                                }
                            }}
                            raised
                            text='当日予約する'
                        />

                    </ProcedureForm>
                </Container>
            </View>
            )
    }
}

export default BookingForm;
