import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from '../constants/Colors';

export default function StyledText(props) {
  return (
    <Text style={{ ...styles.textStyle, ...props.style }}>{props.children}</Text>
  );
}

styles = StyleSheet.create({
  textStyle: {
    color: Colors.primary,
    fontFamily: 'fira-light',
    fontSize: 16
  }
});
