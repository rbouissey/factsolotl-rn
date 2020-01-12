import React from "react";
import Preview from "./Preview";
import { StyleSheet, Text, View, Image } from 'react-native';



const List = (props) => {
  let schools =  <Text>Enter a search to see a list of sample previews by school here.</Text>;
  if (props.queried && props.schools.length > 0) {
    schools = props.schools.map(school => {
      
      return (
        <View key={school.id}>        
        <Preview
          name={school.school_name}
          // district={school.district}
          // exceedance={school.action_level_exceedance}
          // toggleDetails={school.toggleDetails}
          // closeDetais={school.closeDetais}
          // sampleLocation={school.school_site_name}
          // clicked={() => props.onSchoolSelect(school.id)}
        />
        </View>
      );
    });
  } else if(props.queried && props.schools.length === 0) {
    schools = 
    
      <Text>No schools matched your search.</Text>
    
  } else if (props.queried && props.schools.length === null) {
    <Text>Loading...</Text>
  }
  return (
    <View>
      {schools}
    </View>
  );
};

export default List;