import React from 'react';
import {View, Image} from 'react-native';
import Swiper from '../../../../../component/Swiper';
import style from './style';

export default function LandmarkSwiper(props) {
    const {
        slideData,
    } = props;
    return (
        <Swiper>
            {
                slideData.map(s => (
                    <View key={s.key} style={style.slide}>
                        <Image
                            style={style.imageSlide}
                            source={{uri: s.imgUrl}}
                        />
                    </View>
                ))
            }
        </Swiper>
    )
}

