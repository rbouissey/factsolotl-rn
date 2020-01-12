import React, { useState } from "react";
import {
  Button,
  ScrollView,
  Picker,
  TextInput,
  Image,
  Text,
  StyleSheet,
  View
} from "react-native";
import HeaderImage from "../components/HeaderImage";
import axios from "axios";
import { v4 } from "uuid";
import List from '../components/List';

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
    total: null
  };

  queryHandler() {
    let baseQuery =
      "https://data.ca.gov/api/3/action/datastore_search?resource_id=5ebb2d68-1186-4937-acaf-8564c9a01ed6&q=" +
      this.state.schoolQuery +
      ", " +
      this.state.countyQuery +
      ", " +
      this.state.yearQuery;

    let exQuery = baseQuery + ", yes";

    if (
      this.state.schoolQuery === "" &&
      this.state.countyQuery === "" &&
      this.state.yearQuery === ""
    ) {
      return (
        <Text>
          Please select a year or enter an input in one of the search fields.
        </Text>
      );
    } else if (!this.state.exceedance) {
      axios
        .get(baseQuery)
        .then(response => {
          let schools = response.data.result.records;
          let total = response.data.result.total;

          if (schools.length === 0) {
            return <Text>No schools matched this search</Text>;
          }
          const newSchool = schools.map(school => {
            return {
              ...school,
              id: v4()
            };
          });
          this.setState({
            schools: newSchool,
            queried: true,
            total: total
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else if (this.state.exceedance) {
      axios
        .get(exQuery)
        .then(response => {
          let schools = response.data.result.records;
          let total = response.data.result.total;

          if (schools.length === 0) {
            alert("No schools matched this search");
          }
          const newSchool = schools.map(school => {
            return {
              ...school,
              id: v4()
            };
          });

          this.setState({
            schools: newSchool,
            queried: true,
            total: total
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  handleYearFilter(e, state) {
    this.setState({
      ...state,
      yearQuery: e.target.value
    });
  }

  handleSchoolFilter(e, state) {
    this.setState({
      ...state,
      schoolQuery: e.target.value
    });
  }

  handleCountyFilter(e, state) {
    this.setState({
      ...state,
      countyQuery: e.target.value
    });
  }

  render() {
    let totalSchools;
    let total = this.state.total;
    if (this.state.total === 0) {
      totalSchools = "Loading...";
    } else {
      totalSchools = "Total schools matching query:" + { total };
    }

    return (
      <ScrollView style={styles.container}>
        <Image
          source={require("../assets/images/factsolotlBG.png")}
          style={styles.backgroundImage}
        />
        <Text>Search by school:</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Search..."
          onChangeText={e => this.setState({ schoolQuery: e })}
          value={this.state.schoolQuery}
        />

        <Text>Search by county:</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Search..."
          onChangeText={e => this.setState({ countyQuery: e })}
          value={this.state.countyQuery}
        />
        <Picker
          selectedValue={this.state.yearQuery}
          style={{ height: 50, width: 100 }}
          onValueChange={e => {
            this.setState({ yearQuery: e });
          }}
        >
          <Picker.Item label="ALL YEARS" value="" />
          <Picker.Item label="2017" value="2017" />
          <Picker.Item label="2018" value="2018" />
          <Picker.Item label="2019" value="2019" />
        </Picker>
        <Button
          title="Search"
          onPress={e => {
            this.queryHandler(e);
          }}
        />

        <List 
           error={this.state.error}
           schools={this.state.schools}
           selectedSchoolId={this.state.selectedSchoolId}
           onSchoolSelect={id => this.schoolDetailsHandler(id)}
           loadedSchool={this.state.loadedSchool}
           queried={this.state.queried}
           toggleDetails={this.state.detailsSelected}
           mapData={this.mapDataHandler}
        />
      </ScrollView>
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
  }
});

export default SearchScreen;
