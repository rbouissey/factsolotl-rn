import React from "react";
import {
  ScrollView,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Button
} from "react-native";

const Details = props => {
  let school = null;
  if (props.loadedSchool) {
    const sampleDate = new Date(props.loadedSchool.sample_date);
    const sampleYear = sampleDate.getFullYear();
    const sampleMonth = sampleDate.getMonth() + 1;
    const sampleDay = sampleDate.getDate();

    school = (
      <Modal animationType={"slide"} transparent={false}>
        <View style={styles.modal}>
      
          <View style={styles.modalContent}>
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
          <TouchableHighlight style={styles.close} onPress={e => props.closeDetails(e)}>
            <View >
              <Text style={styles.closeButton}>CLOSE</Text>
            </View>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
  return school;
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  close: {
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    height: 30,
    borderRadius: 5
  },
  closeButton: {
    
    color: "white"
  },
  modalContent: {
    marginTop: 50,
    backgroundColor: 'white'
  }
});
export default Details;
