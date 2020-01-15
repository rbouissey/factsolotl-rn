import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from "react-native";
import Card from "../components/Card";
import StyledText from '../components/StyledText'

const preview = props => {
  let exceedanceCheck;
  if(props.exceedance === 'Yes'){
    exceedanceCheck = styles.openRed
  }
  if(props.exceedance === 'No'){
    exceedanceCheck = styles.openBlue
  }

  return (
    <Card style={styles.preview}>
      <StyledText style={styles.header}>{props.name}</StyledText>
      <StyledText>{props.sampleLocation}</StyledText>
        <TouchableHighlight style={exceedanceCheck} onPress={props.onSelect}>
            <Text style={styles.detailButton}>DETAILS</Text>
        </TouchableHighlight>
    </Card>
  );
};

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    borderColor: "grey",
    borderWidth: 0.5
  },

  openRed: {
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: 'red',
    padding: 5,
    margin: 5,
    borderRadius: 5
  },
  openBlue: {
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: '#0099cc',
    padding: 5,
    margin: 5,
    borderRadius: 5
  },
  detailButton: {
    color: 'white',
    fontFamily: 'fira-bold',

  },
  header: {
    fontFamily: 'fira-bold',
    fontSize: 23,
    width: '75%'
  }
});

export default preview;
