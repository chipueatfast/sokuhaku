import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
    containter: {}
  });

export default function CustomMapView(props) {
    return (
        <View style={{
            height: 400,
        }}>
            <MapView
                provider='google'
                mapType="standard"
                style={{
                    flex: 1,
                }}
                styles={{
                    ...StyleSheet.absoluteFillObject,
                }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}