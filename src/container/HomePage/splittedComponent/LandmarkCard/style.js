import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const HeartButton = styled.TouchableOpacity`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  align-items: center;
  top: 10px;
  right: 10px;
  z-index: 9999999;
`;

export default StyleSheet.create({
    heartContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    swiperArea: {
        height: 250,
        margin: 2,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        backgroundColor: 'blue',
        zIndex: 5,
    },
    description: {
        padding: 20,
        paddingBottom: 25,
    },
    placeText: {
        fontSize: 13,
        color: "#fd666d",
    },
    detailText: {
        fontSize: 15,
        color: "black",
    },
    priceText: {
        fontSize: 13,
        color: "#999",
    }
})
