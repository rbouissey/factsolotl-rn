import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";
import StyledText from "../components/StyledText";

const Details = props => {
  let school = null;
  if (props.loadedSchool) {
    const sampleDate = new Date(props.loadedSchool.sample_date);
    const sampleYear = sampleDate.getFullYear();
    const sampleMonth = sampleDate.getMonth() + 1;
    const sampleDay = sampleDate.getDate();

    school = (
      <Modal animationType={"slide"} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <StyledText style={styles.header}>{props.loadedSchool.school_name}</StyledText>
            <StyledText><StyledText style={styles.sub}>School district:</StyledText> {props.loadedSchool.district}</StyledText>
            <StyledText>
              <StyledText style={styles.sub}>Exceedance: </StyledText> {props.loadedSchool.action_level_exceedance}
            </StyledText>
            <StyledText><StyledText style={styles.sub}>Lead concentration:</StyledText> {props.loadedSchool.result} ppb</StyledText>
            <StyledText><StyledText style={styles.sub}>Sampled from: </StyledText> {props.loadedSchool.school_site_name}</StyledText>
            <StyledText>
              <StyledText style={styles.sub}>Date sampled: </StyledText> {sampleMonth}/{sampleDay}/{sampleYear}
            </StyledText>
            <StyledText>
              <StyledText style={styles.sub}>Water system: </StyledText> {props.loadedSchool.water_system_name}
            </StyledText>
            <TouchableHighlight
              style={styles.close}
              onPress={e => props.closeDetails(e)}
            >
              <Text style={styles.closeButton}>X</Text>
            </TouchableHighlight>
          </View>
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
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  close: {
    backgroundColor: "#cc0000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 30,
    top: 0,
    position: 'absolute',
    margin: 10
  },
  closeButton: {
    fontFamily: "fira-light",
    fontSize: 20,
    color: "white"
  },
  modalContent: {
    marginTop: 50,
    padding: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey"
  },
  header: {
    fontFamily: 'fira-bold',
    fontSize: 30
  },
  sub: {
    fontFamily: 'fira-bold'
  }
});
export default Details;
