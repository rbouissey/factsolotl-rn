import React from "react";
import {
  Button,
  ScrollView,
  Picker,
  TextInput,
  Image,
  Text,
  StyleSheet,
  View
} from "react-native";

const preview = props => {
  // let exceedanceCheck;

  // if (props.exceedance === 'Yes') {
  //     exceedanceCheck = 'redBG pulse btn-floating btn waves-effect waves-dark red'
  // } else if (props.exceedance === 'No') {
  //     exceedanceCheck = 'greenBG btn-floating btn waves-effect waves-dark white'
  // }

  return <Text>{props.name}</Text>;
};

export default preview;
