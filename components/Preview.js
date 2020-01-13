import React from "react";
import {
  Button,
  ScrollView,
  Picker,
  TextInput,
  Image,
  Text,
  StyleSheet,
  View,
  Platform,
  TouchableWithoutFeedback,
  TouchableHighlight
} from "react-native";
import Card from "../components/Card";

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
      <Text>{props.name}</Text>
      <Text>{props.sampleLocation}</Text>

      <View style={exceedanceCheck}>
        <TouchableHighlight onPress={props.onSelect}>
          <View>
            <Text style={styles.detailButton}>DETAILS</Text>
          </View>
        </TouchableHighlight>
      </View>
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
  },
  openBlue: {
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: 'blue',
    padding: 5,
  },
  detailButton: {
    color: 'white'
  }
});

export default preview;
