import React, { useState } from "react";
import {
  Button,
  ScrollView,
  Picker,
  TextInput,
  Image,
  Text,
  StyleSheet,
  View,
  Switch
} from "react-native";
import HeaderImage from "../components/HeaderImage";
import axios from "axios";
import { v4 } from "uuid";
import List from "../containers/List";
import Card from "../components/Card";
import Details from '../components/DetailsModal';

class SearchScreen extends React.Component {
  state = {
    schools: [],
    selectedschoolId: "",
    loadedSchool: null,
    schoolQuery: "",
    countyQuery: "",
    yearQuery: "",
    exceedance: false,
    exceedanceCheck: false,
    total: null,
    queried: false,
    querySuccess: false,
    detailsSelected: false
  };

  queryHandler() {
    this.setState({ queried: true, querySuccess: false });
    let baseQuery =
      "https://data.ca.gov/api/3/action/datastore_search?resource_id=5ebb2d68-1186-4937-acaf-8564c9a01ed6&q=" +
      this.state.schoolQuery +
      ", " +
      this.state.countyQuery +
      ", " +
      this.state.yearQuery;

    let exQuery = baseQuery + ", yes";

    if (!this.state.exceedance) {
      axios
        .get(baseQuery)
        .then(response => {
          this.setState({ querySuccess: true });
          let schools = response.data.result.records;
          let total = response.data.result.total;

          const newSchool = schools.map(school => {
            return {
              ...school,
              id: v4()
            };
          });
          this.setState({
            schools: newSchool,
            total: total
          });
        })
        .catch(error => {
          this.setState({ error: error });
        });
    } else if (this.state.exceedance) {
      axios
        .get(exQuery)
        .then(response => {
          this.setState({ querySuccess: true });
          let schools = response.data.result.records;
          let total = response.data.result.total;

          const newSchool = schools.map(school => {
            return {
              ...school,
              id: v4()
            };
          });

          this.setState({
            schools: newSchool,
            total: total
          });
        })
        .catch(error => {
          this.setState({ error: error });
        });
    }
  }

  toggleDetails() {
    this.setState({
      loadedSchool: null
    });
  }

  onToggleQuery() {
    this.setState({
      exceedance: !this.state.exceedance
    });
  }

  schoolDetailsHandler(id) {
    this.setState({detailsSelected: true})
    console.log('id: ' + id)
    this.setState({ selectedSchoolId: id });
    let currentSchool = this.state.schools;
    for (let i = 0; i < currentSchool.length; i++) {
      if (currentSchool[i].id === id) {
        this.setState({
         
          loadedSchool: currentSchool[i],
          
        });
      }
    }
  }

  render() {
    let content = (
      <Text>Filter search by school name, county, year, and exceedance.</Text>
    );
    if (
      this.state.schoolQuery === "" &&
      this.state.countyQuery === "" &&
      this.state.yearQuery === "" &&
      this.state.queried === true
    ) {
      content = (
        <Text>
          Please select a year or enter an input in one of the search fields.
        </Text>
      );
    } else if (
      this.state.queried === true &&
      this.state.querySuccess === true
    ) {
      content = (
        <List
          error={this.state.error}
          schools={this.state.schools}
          selectedSchoolId={this.state.selectedSchoolId}
          onSchoolSelect={id => this.schoolDetailsHandler(id)}
          loadedSchool={this.state.loadedSchool}
          queried={this.state.queried}
          toggleDetails={this.state.detailsSelected}
          mapData={this.mapDataHandler}
          total={this.state.total}
          success={this.state.querySuccess}
          focus={this.state.detailsSelected}
        />
      );
    } else if (
      this.state.queried === true &&
      this.state.querySuccess === false
    ) {
      content = <Text>Loading...</Text>;
    } 

    let details;
    if(this.state.detailsSelected){
      details =   <Details 
      id={this.state.selectedSchoolId}
      loadedSchool={this.state.loadedSchool}
      closeDetails={e => this.toggleDetails(e)}
      />
    }

    
    
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/factsolotlBG.png")}
          style={styles.backgroundImage}
        />
        <Card style={styles.filters}>

       
        <Switch 
          style={styles.switch}
        />
        <Picker
            selectedValue={this.state.yearQuery}
            style={styles.picker}
            onValueChange={e => {
              this.setState({ yearQuery: e });
            }}
          >
            <Picker.Item label="ALL YEARS" value="" />
            <Picker.Item label="2017" value="2017" />
            <Picker.Item label="2018" value="2018" />
            <Picker.Item label="2019" value="2019" />
          </Picker>
          </Card>
        <Card>
          <Text>Search by school:</Text>
          <TextInput
            style={{ height: 40, width: "50%" }}
            placeholder="Search..."
            onChangeText={e => this.setState({ schoolQuery: e })}
            value={this.state.schoolQuery}
          />
        </Card>
        <Card>
        <Text>Search by county:</Text>
        <TextInput
          style={{ height: 40, width: "50%" }}
          placeholder="Search..."
          onChangeText={e => this.setState({ countyQuery: e })}
          value={this.state.countyQuery}
        />
        </Card>

        <Button
          title="Search"
          onPress={e => {
            this.queryHandler(e);
          }}
        />
        {details}
        <ScrollView>{content}</ScrollView>
      </View>
    );
  }
}

SearchScreen.navigationOptions = {
  title: "Search",
  headerLeft: <HeaderImage />
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  picker: {
    height: 30,
    width: '50%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  switch: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  filters: {
    flex: 1
  }
});

export default SearchScreen;
