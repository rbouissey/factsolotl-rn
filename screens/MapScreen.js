import React, { Component } from "react";
import { Platform, StyleSheet, View, Button, Text, Picker } from "react-native";
import MapView from "react-native-maps";
import counties from "../constants/Coordinates";
import HeaderImage from "../components/HeaderImage";import StyledText from '../components/StyledText';
import Header from '../components/StyledText';

export default class MapScreen extends Component {
  state = {
    year: '2019',
    clicked: false
  };


  render() {
    let markers;

    if(this.state.year !== 'clear'){
      markers = counties.map(county => {
        let pin;
        let exceedances;

        if (this.state.year === "all") {
          exceedances = county.exceedances.ALL;
        } else if (this.state.year === "2017") {
          exceedances = county.exceedances.first;
        } else if (this.state.year === "2018") {
          exceedances = county.exceedances.second;
        } else if (this.state.year === "2019") {
          exceedances = county.exceedances.third;
        }

        if (exceedances === 0) {
          pin = "blue";
        } else {
          pin = "red";
        }
        return (
          <MapView.Marker
            coordinate={county.latLong}
            pinColor={pin}
            key={county.county}
            title={county.county + " county"}
            description={"Exceedances: " + exceedances}
          />
        );
      });

    }
    

    return (
      <View>
        <View style={styles.mapContainer}>
          <MapView
            // provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 36.778259,
              longitude: -119.417931,
              latitudeDelta: 13.0,
              longitudeDelta: 0.0121
            }}
          >
            {markers}
          </MapView>
        </View>

        <View style={styles.buttonContainer}>
          <Picker
            selectedValue={this.state.year}
            onValueChange={e => this.setState({ year: e })}
          >
            <Picker.Item label="CLEAR" value='clear' />
            <Picker.Item label="ALL YEARS" value="all" />
            <Picker.Item label="2017" value="2017" />
            <Picker.Item label="2018" value="2018" />
            <Picker.Item label="2019" value="2019" />
            
          </Picker>
        </View>

        <View style={styles.textContainer}>
          <StyledText>Blue: No exceedances</StyledText>
          <StyledText>Red: Exceedances</StyledText>
          <StyledText>Tap a marker for more info.</StyledText>
        </View>
      </View>
    );
  }
}

MapScreen.navigationOptions = {
  title: 'Map',
  headerLeft: <HeaderImage />
};

const styles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  buttonContainer: {
    flex: 1,
    position: "absolute",
    marginVertical: 400,
    width: "50%",
    right: 0,
    borderColor: Platform.OS === 'android' ? 'lightgrey': 'white',
    borderWidth: 1
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-around",
    position: "absolute",
    marginVertical: 400,
    padding: 10,
    width: "100%"
  },

});
