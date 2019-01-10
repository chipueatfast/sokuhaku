import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';
import CustomMapView from '../../component/CustomMapView';
import SearchInput from '../../component/SearchInput';
import Logo from '../../component/Logo';
import ToggleButton from '../../component/ToggleButton';
import style, {HeartButton} from './style';
import LandmarkCard from './splittedComponent/LandmarkCard';
import AirBnbForm from './splittedComponent/Forms/AirBnbForm';
import StayJapanForm from "./splittedComponent/Forms/StayJapanForm";
import { data } from './MockData';


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
                        <Image
                            style={style.bannerBackground}
                            source={require('./img/backgroundBanner.jpg')}
                        />
                        <Image
                            style={style.overlayBackground}
                            source={require('./img/backgroundOverlay.png')}
                        />
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
                                        elevation: 3,
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
                                        elevation: 3,
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
                        {
                            // this is not standard
                            data.map((el, index) =>
                                <LandmarkCard
                                    pressHandler={() => {
                                        this.props.navigation.navigate('Detail');
                                    }}
                                    key={index}
                                    slides={el.slides}
                                    place={el.place}
                                    detail={el.detail}
                                    price={el.price}
                                />)
                        }
                    </View>
                </ScrollView>
        )
    }
}

export default HomePage;
