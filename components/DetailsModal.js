import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

const Details = props => {
  let school = null;
  if (props.loadedSchool) {
    const sampleDate = new Date(props.loadedSchool.sample_date);
    const sampleYear = sampleDate.getFullYear();
    const sampleMonth = sampleDate.getMonth() + 1;
    const sampleDay = sampleDate.getDate();

    school = (
      <View style={styles.modal}>
        <Button onPress={e => props.closeDetails(e)} title="close" />

        <Text>{props.loadedSchool.school_name}</Text>
        <Text>School district: {props.loadedSchool.district}</Text>
        <Text>Exceedance: {props.loadedSchool.action_level_exceedance}</Text>
        <Text>Lead concentration: {props.loadedSchool.result} ppb</Text>
        <Text>Sampled from: {props.loadedSchool.school_site_name}</Text>
        <Text>
          Date sampled: {sampleMonth}/{sampleDay}/{sampleYear}
        </Text>
        <Text>Water system: {props.loadedSchool.water_system_name}</Text>
      </View>
    );
  }
  return school;
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    position: "absolute",
    zIndex: 1,
    top: 0,
    right: 0
  }
})
export default Details;
