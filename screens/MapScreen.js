import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class MapScreen extends Component {
  render() {
    let points = [{ latitude: 34.052235, longitude: -118.243683, weight: 1 }];
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 36.778259,
            longitude: -119.417931,
            latitudeDelta: 11.0,
            longitudeDelta: 0.0121
          }}
        >
          <MapView.Heatmap
            points={points}
            opacity={1}
            radius={50}
            maxIntensity={100}
            gradientSmoothing={10}
            heatmapMode={"POINTS_DENSITY"}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});