import React from 'react';
import { View, Text } from 'react-native';
import CustomCard from '../../../../component/CustomCard';
import style from './style';
import LandmarkSwiper from './LandmarkSwiper';

export default function LandmarkCard(props) {
    const {
        place,
        detail,
        price,
        slides,
    } = props;
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
