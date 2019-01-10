import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import data from './data';
import DatePicker from 'react-native-datepicker';
import { Icon as MatIcon } from 'react-native-material-ui';
import {Content, BorderTop, Summary, SumIndicator,
    Article,
    PageDivider,
    Writing,
    Title,
} from "./styled";
import BookingForm from './components/BookingForm';


class DetailPage extends React.Component {

    render() {
        return (
            <ScrollView
                style={{
                    paddingBottom: 15,
                    height: '100%',
                }}
            >
                <Image
                    source={require('./img/banner.jpg')}
                    style={{
                        width: '100%',
                        height: 200,
                    }}
                />
                <BorderTop />
                <Content
                    style={{elevation: 1}}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}
                    >
                        Stay in Britain's favourite Castle
                    </Text>
                    <Summary>
                        <SumIndicator>
                            <MatIcon
                                name='wc'
                            />
                            <Text>1専用バスルーム</Text>
                        </SumIndicator>

                        <SumIndicator>
                            <MatIcon
                                name='store'
                            />
                            <Text>1寝室</Text>
                        </SumIndicator>
                        <SumIndicator>
                            <MatIcon
                                name='people'
                            />
                            <Text>ゲスト2人</Text>
                        </SumIndicator>
                    </Summary>
                    <Text
                        style={{
                            marginTop: 15,
                        }}
                    >¥ 16,637  〜　/泊
                    </Text>
                </Content>
                <Article>
                    <Title>本日宿泊のお客様へ</Title>
                    <PageDivider/>
                    <Writing>
                        {data.writing}
                    </Writing>
                </Article>
                <BookingForm/>
            </ScrollView>
        )
    }
}

export default DetailPage;
