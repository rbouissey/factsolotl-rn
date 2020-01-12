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
  TouchableWithoutFeedback
} from "react-native";
import Card from "../components/Card";
import Icon from "../components/TabBarIcon";

const preview = props => {
  // let exceedanceCheck;

  // if (props.exceedance === 'Yes') {
  //     exceedanceCheck = 'redBG pulse btn-floating btn waves-effect waves-dark red'
  // } else if (props.exceedance === 'No') {
  //     exceedanceCheck = 'greenBG btn-floating btn waves-effect waves-dark white'
  // }

  return (
    <Card style={styles.preview}>
      <Text>{props.name}</Text>
      <Text>{props.sampleLocation}</Text>

      <View style={styles.open}>
        
          <Button
            
            onPress={props.onSelect}
            title='DETAILS'
          />
       
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  preview: {
    flex: 1
  },
  open: {
    right: 0,
    top: 0,
    position: "absolute",
  }
});

export default preview;
