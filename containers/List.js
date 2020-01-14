import React from "react";
import Preview from "../components/Preview";
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';



const List = (props) => {
  let schools =  <Text>Enter a search to see a list of sample previews by school here.</Text>;
  if (props.queried && props.schools.length > 0) {
    schools = props.schools.map(school => {
      return (
        <View key={school.id}>        
        <Preview
          name={school.school_name}
          district={school.district}
          exceedance={school.action_level_exceedance}
          toggleDetails={school.toggleDetails}
          closeDetais={school.closeDetais}
          sampleLocation={school.school_site_name}
          onSelect={() => props.onSchoolSelect(school.id)}
          focus={props.focus}
        />
        </View>
      );
    });
  } else if(props.queried && props.success && props.total === 0) {
    schools = <Text>No schools matched your search.</Text>
  } 
  return (
    <View>
      <Text>Total schools matching search: {props.total}</Text>
      {schools}
    </View>
  );
};

export default List;