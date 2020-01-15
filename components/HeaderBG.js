import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
import BG from '../assets/images/factsolotlBG.png';
import bubbles from '../assets/images/factsolotlBubbles.png';
 
export default class HeaderBG extends Component {
  render() {
    return (
      <View >
        <Image
          source={BG}
          style={{width: '100%', height: '100%'}}
        />
        <Image
          source={bubbles}
          style={{width: '100%', height: '100%', position: 'absolute'}}
        />
      </View>
    );
  }
}