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
import List from "./List";
import Details from "../components/DetailsModal";

const Results = props => {
  let details;
  if (props.seeDetails) {
    details = (
      <Details
        id={props.selectedSchoolId}
        loadedSchool={props.loadedSchool}
        closeDetails={e => props.closeDetails(e)}
      />
    );
  }
  return (
    <Modal animationType={"slide"} transparent={false}>
      <View style={styles.modal}>
        <ScrollView>
        <List
          error={props.error}
          schools={props.schools}
          selectedSchoolId={props.selectedSchoolId}
          onSchoolSelect={id => props.onSchoolSelect(id)}
          loadedSchool={props.loadedSchool}
          queried={props.queried}
          toggleDetails={props.toggleDetails}
          mapData={props.mapData}
          total={props.total}
          success={props.success}
        />
        </ScrollView>
       
        {details}

        <TouchableHighlight
          style={styles.close}
          onPress={e => props.closeResults(e)}
        >
          <View>
            <Text style={styles.closeButton}>CLOSE</Text>
          </View>
        </TouchableHighlight>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    padding: 10,
    justifyContent: "center"
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
    backgroundColor: "white"
  }
});
export default Results;
