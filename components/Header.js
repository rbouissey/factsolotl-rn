import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from '../constants/Colors';

export default function Header(props) {
  return (
    <Text style={{ ...styles.headerText, ...props.style }}>{props.children}</Text>
  );
}

styles = StyleSheet.create({
  headerText: {
    color: Colors.primary,
    fontFamily: 'fira-bold'
  }
});
