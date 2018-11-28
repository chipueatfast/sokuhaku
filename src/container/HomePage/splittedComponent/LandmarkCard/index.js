import React from 'react';
import { View, Text } from 'react-native';
import CustomCard from '../../../../component/CustomCard';
import Swiper from '../../../../component/Swiper';
import style from './style';
import LandmarkSwiper from './LandmarkSwiper';

const slideData = [
    {
        imgUrl: "https://i.pinimg.com/originals/52/a4/1e/52a41e17650e11891ba448c9eedbc6cc.jpg",
        key: 6061597,
    },
    {
        imgUrl: "https://a0.muscache.com/im/pictures/6061598/4f04bc73_original.jpg?aki_policy=large",
        key: 6061598,
    },
    {
        imgUrl: "https://a0.muscache.com/im/pictures/6061556/f43f477f_original.jpg?aki_policy=large",
        key: 6061556,
    },
    {
        imgUrl: "https://a0.muscache.com/im/pictures/6061538/401691ed_original.jpg?aki_policy=large",
        key: 6061538,
    },
    {
        imgUrl: "https://a0.muscache.com/im/pictures/6061571/d84e921b_original.jpg?aki_policy=large",
        key: 6061571,
    },

];

export default function LandmarkCard(props) {
    const {
        place,
        detail,
        price,
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
                <LandmarkSwiper slideData={slideData} />
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