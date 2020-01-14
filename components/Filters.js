import React from "react";
import {
  ScrollView,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Switch,
  Picker
} from "react-native";

const Filters = props => {
  let exceedanceCheck;
  props.exceedance ? (exceedanceCheck = "On") : (exceedanceCheck = "Off");

  return (
    <View style={styles.filters}>
 
 <View style={styles.switch}>
      <Switch
          value={props.exceedance}
          onValueChange={props.toggleExceedance}
        />
        <View style={styles.exText}>
          <Text>Exceedance filter: {exceedanceCheck}</Text>
        </View>
       
      </View>
      <Picker
        selectedValue={props.year}
        style={styles.picker}
        onValueChange={e => {
          props.onYearSelect(e);
        }}
      >
        <Picker.Item label="ALL YEARS" value="" />
        <Picker.Item label="2017" value="2017" />
        <Picker.Item label="2018" value="2018" />
        <Picker.Item label="2019" value="2019" />
      </Picker>
  
    </View>
  );
};

const styles = StyleSheet.create({
  filters: {
    flex: 1,
    padding: 10,
    justifyContent: "center"
  },
  switch: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    borderColor: 'grey',
    borderWidth: 0.5,
    alignItems: 'center'
  },
  exText: {
    padding: 10
  },
  picker: {
    width: '50%'
  }
  
});

export default Filters;
