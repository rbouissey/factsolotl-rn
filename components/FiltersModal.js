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
  return(
    <Modal animationType={"slide"} transparent={false}>
        <View style={styles.modal}>
      
         
        <Switch 
          style={styles.switch}
          value={props.exceedance}
          onValueChange={props.toggleExceedance}
        />
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

          <TouchableHighlight style={styles.close} onPress={e => props.applyFilters(e)}>
            <View >
              <Text style={styles.closeButton}>Apply Filters</Text>
            </View>
          </TouchableHighlight>



        </View>
      </Modal>
  )


      
    
  
  
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
export default Filters;
