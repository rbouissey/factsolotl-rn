import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Picker
} from "react-native";
import StyledText from "./StyledText";

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
          <StyledText>Only show schools with exceedances: <StyledText style={styles.exToggle}>{exceedanceCheck}</StyledText></StyledText>
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
        <Picker.Item label="2019" value="2019" />
        <Picker.Item label="2018" value="2018" />
        <Picker.Item label="2017" value="2017" />
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
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap'
    
  },
  exText: {
    padding: 10
  },
  picker: {
    width: '50%'
  },
  exToggle: {
    fontFamily: 'fira-bold',
    width: '90%'
  }
  
});

export default Filters;
