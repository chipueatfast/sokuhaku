import React from 'react';
import { View, Text } from 'react-native';
import CustomCard from '../../../../component/CustomCard';
import style, {HeartButton} from './style';
import LandmarkSwiper from './LandmarkSwiper';
import {Icon} from "react-native-elements";

export default class LandmarkCard extends React.Component {
    state = {
        liked: false
    };

    render() {
        const {
            place,
            detail,
            price,
            slides,
        } = this.props;
        return (
            <CustomCard
                pressHandler={() => {
                    console.log("pressed");
                }}
                style={{
                    margin: 10,
                    height: 350,
                }}
            >
                <View>
                    <HeartButton onPress={()=>this.setState(state => {
                        return {
                            liked: !state.liked
                        }
                    })}>
                        {
                            this.state.liked  ?
                                (<Icon
                                    color={this.state.liked ? "#ec4953" : "white"}
                                    name="heart"
                                    size={30}
                                    type={this.state.liked ? "font-awesome" : "evilicon"}
                                />) : (
                                    <Icon
                                        color={this.state.liked ? "#ec4953" : "white"}
                                        name="heart"
                                        size={35}
                                        type={this.state.liked ? "font-awesome" : "evilicon"}
                                    />
                                )
                        }
                    </HeartButton>
                </View>
                <View style={style.swiperArea}>
                    <LandmarkSwiper
                        slideData={slides.map((slide, index) => {
                            return {
                                imgUrl: slide,
                                key: index,
                            }
                        })}
                    />
                </View>
                <View style={style.description}>
                    <Text style={style.placeText}>
                        {place}
                    </Text>
                    <Text style={style.detailText}>
                        {detail}
                    </Text>
                    <Text style={style.priceText}>
                        {price}
                    </Text>
                </View>
            </CustomCard>
        )
    }
}
