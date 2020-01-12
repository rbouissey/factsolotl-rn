import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Details(props) {
  return (
    <View style={{...styles.Details, ...props.style}}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  Details: {
    borderLeftColor: 'grey',
    borderLeftWidth: 1,
    borderRightColor: 'grey',
    borderRightWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    margin: 10,
  }
});
