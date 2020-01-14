import React, { Component } from "react";
import { Platform, StyleSheet, View, Button, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import counties from "../constants/Coordinates";

export default class MapScreen extends Component {
  state = {
    all: false,
    first: false,
    second: false,
    third: false,
    clicked: false
  };

  allYearsHandler() {
    this.setState({
      all: true,
      first: false,
      second: false,
      third: false,
      clicked: true
    });
  }
  firstHandler() {
    this.setState({
      all: false,
      first: true,
      second: false,
      third: false,
      clicked: true
    });
  }
  secondHandler() {
    this.setState({
      all: false,
      first: false,
      second: true,
      third: false,
      clicked: true
    });
  }
  thirdHandler() {
    this.setState({
      all: false,
      first: false,
      second: false,
      third: true,
      clicked: true
    });
  }

  render() {
    let markers;
   
    
    if(this.state.clicked){
      markers = counties.map(county => {
        let pin;
        let exceedances;

        if(this.state.all){
          exceedances = county.exceedances.ALL
        } else if(this.state.first){
          exceedances = county.exceedances.first
        }else if(this.state.second){
          exceedances = county.exceedances.second
        }else if(this.state.third){
          exceedances = county.exceedances.third
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
            title={county.county}
            description={"Exceedances: " + exceedances}
          />
        );
      });
    } 

    return (
      <View>
        <View style={styles.mapContainer}>
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
           {markers}
            
          </MapView>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button}title="All" onPress={() => this.allYearsHandler()} />
          <Button style={styles.button}title="2017" onPress={() => this.firstHandler()}/>
          <Button style={styles.button}title="2018" onPress={() => this.secondHandler()}/>
          <Button style={styles.button}title="2019" onPress={() => this.thirdHandler()}/>
        </View>

        <View style={styles.textContainer}>
          <Text>Blue: No exceedances</Text>
          <Text>Red: Exceedances</Text>
          <Text>Tap a marker for more info.</Text>
        </View>
      </View>
    );
  }
}

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
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    marginVertical: 420,
    width: '70%',
    alignItems: "center",
    marginLeft: '10%'
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-around",
    position: "absolute",
    marginVertical: 480,
    padding: 10
  },


});
