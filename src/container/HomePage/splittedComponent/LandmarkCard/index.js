import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
                                    color="#ec4953"
                                    name="heart"
                                    type="font-awesome"
                                    size={20}
                                />) : (
                                    <Icon
                                        color="white"
                                        name="heart"
                                        size={25}
                                        type="evilicon"

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
                <TouchableOpacity
                    onPress={() => {
                        this.props.pressHandler();
                    }}
                    style={style.description}
                >
                    <Text style={style.placeText}>
                        {place}
                    </Text>
                    <Text style={style.detailText}>
                        {detail}
                    </Text>
                    <Text style={style.priceText}>
                        {price}
                    </Text>
                </TouchableOpacity>
            </CustomCard>
        )
    }
}
