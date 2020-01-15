import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from '../constants/Colors';

export default function Header(props) {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
}

styles = StyleSheet.create({
  text: {
    color: Colors.primary,
    fontFamily: 'fira-bold'
  }
});
