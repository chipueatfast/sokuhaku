import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
 
import Slick from 'react-native-slick';

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
    },
    imageSlide: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
})

export default function Swiper(props) {
    return (
        <Slick style={styles.wrapper} showsButtons={true}>
          {
            props.children
          }
            {/* <View style={styles.slide1}>
              <Image
                style={styles.imageSlide}
                source={{uri: "https://i.pinimg.com/originals/52/a4/1e/52a41e17650e11891ba448c9eedbc6cc.jpg"}} />
            </View>
            <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
            </View> */}
        </Slick>
    )
}