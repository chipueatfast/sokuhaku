import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import CustomMapView from '../../component/CustomMapView';
import SearchInput from '../../component/SearchInput';
import Logo from '../../component/Logo';
import ToggleButton from '../../component/ToggleButton';
import style from './style';
import LandmarkCard from './splittedComponent/LandmarkCard';
import AirBnbForm from './splittedComponent/Forms/AirBnbForm';
import StayJapanForm from "./splittedComponent/Forms/StayJapanForm";


class HomePage extends React.Component {
    state = {
        querying: 'airBnb',
        isFormCollapsed: false,
        formState: {
            checkBoxes: {},
        }
    };

    toggleHandler = (value) => {
        this.setState({
            querying: value ? 'stayJapan' : 'airBnb',
        })
    };

    render() {
        const { isFormCollapsed } = this.state;
        const { querying } = this.state;
        return (
            <ScrollView style={style.container}>
                <View style={style.heroBanner}>
                    <View style={style.midContent}>
                        <Text style={style.subTitle}>
                            今すぐここで泊まれる民泊を探せる
                        </Text>
                        <View style={style.logoContainer}>
                            <Logo
                                style={{
                                    color: 'white',
                                }}
                                width={206}
                                height={36}
                            />
                        </View>
                        <Text style={style.subTitle}>
                            ソクハク
                        </Text>
                    </View>
                </View>
                <ToggleButton
                    pressHandler={() => {
                        this.setState({
                            isFormCollapsed: !isFormCollapsed,
                        })
                    }}
                    inactiveColor = {{
                        color: 'black',
                        backgroundColor: "rgb(246, 246, 246)",
                    }}
                    text={isFormCollapsed ? '検索メニューを開く    ↑' : '検索メニューを閉じる    ↓'}
                />
                <Collapsible collapsed={this.state.isFormCollapsed}>
                    <View style={style.formQuery}>
                        <View style={style.toggleCategory}>
                            <ToggleButton
                                style={{
                                    flex: 1,
                                    margin: 10,
                                }}
                                text="AirBnB"
                                activeColor= {{
                                    backgroundColor: "#ec4951",
                                    color: "white",
                                }}
                                pressHandler={this.toggleHandler.bind(this, 0)}
                                isActive={querying === 'airBnb'}
                            />
                            <ToggleButton
                                style={{
                                    flex: 1,
                                    margin: 10,
                                }}
                                text="StayJapan"
                                activeColor= {{
                                    backgroundColor: "#ec4953",
                                    color: "white",
                                }}
                                pressHandler={this.toggleHandler.bind(this, 1)}
                                isActive={querying === 'stayJapan'}
                            />
                        </View>
                        <View style={style.criteria}>
                            {
                                querying === "airBnb" ?
                                    (<AirBnbForm/>) :
                                    (<StayJapanForm/>)
                            }
                        </View>
                        <View style={style.footer} />
                    </View>
                </Collapsible>
                <SearchInput
                    placeholder = "東京"
                />
                {/*this is not standard*/}
                <View style={{
                    justifyContent: "center",
                    alignItems: "stretch",
                }}>
                    <ToggleButton
                        text="検索"
                        style ={{
                            marginBottom: 15,
                            marginLeft: 15,
                            marginRight: 15,
                            elevation: 3,
                        }}
                        activeColor={{
                            backgroundColor: "#ec4953",
                            color: "white",
                        }}
                        isActive={true}
                    />
                </View>

                <CustomMapView />
                <View>
                    <LandmarkCard
                        place="一軒家貸切　Akureyri"
                        detail="A beautiful villa in North Iceland"
                        price="¥47,378 〜　/泊"
                    />
                </View>
            </ScrollView>
        )
    }
}

export default HomePage;
