import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
import Factsolotl from '../assets/images/bubbleF.png';
 
export default class HeaderImage extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={Factsolotl}
          style={{
            width: 50,
            height: 50,
            marginLeft: 15,
          }}
        />
      </View>
    );
  }
}