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
  Switch,
  TouchableHighlight
} from "react-native";
import HeaderImage from "../components/HeaderImage";
import axios from "axios";
import { v4 } from "uuid";
import Card from "../components/Card";
import Filters from "../components/Filters";
import Results from "../containers/ResultsModal";

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
    detailsSelected: false,
    filtersSelected: false
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
    this.setState({ selectedSchoolId: id });
    let currentSchool = this.state.schools;
    for (let i = 0; i < currentSchool.length; i++) {
      if (currentSchool[i].id === id) {
        this.setState({
          loadedSchool: currentSchool[i],
          detailsSelected: true
        });
      }
    }
  }

  newSearchHandler() {
    this.setState({
      queried: !this.state.queried,
      querySuccess: !this.state.querySuccess,
      schools: [],
      schoolQuery: "",
      countyQuery: ""
    });
  }

  render() {
    let content = (
      <Text>Filter search by school name, county, year, and exceedance.</Text>
    );
    if (this.state.total > 100) {
      content = (
        <Text>
          Your query returned too many results. Try refining your search.
        </Text>
      );
    } else if (
      this.state.queried === true &&
      this.state.querySuccess === true
    ) {
      content = (
        <Results
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
          closeResults={() => this.newSearchHandler()}
          id={this.state.selectedSchoolId}
          loadedSchool={this.state.loadedSchool}
          closeDetails={e => this.toggleDetails(e)}
          seeDetails={this.state.detailsSelected}
        />
      );
    } else if (
      this.state.queried === true &&
      this.state.querySuccess === false
    ) {
      content = <Text>Loading...</Text>;
    }

    return (
      <ScrollView style={styles.container}>
        <Card>{content}</Card>
        

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
        <View style={styles.filters}>
          <Filters
            filterSelected={this.state.filterSelected}
            applyFilters={() =>
              this.setState({ filtersSelected: !this.state.filtersSelected })
            }
            toggleExceedance={() =>
              this.setState({ exceedance: !this.state.exceedance })
            }
            year={this.state.yearQuery}
            onYearSelect={e => this.setState({ yearQuery: e })}
            exceedance={this.state.exceedance}
          />
        </View>
        <TouchableHighlight
          style={styles.search}
          onPress={e => this.queryHandler(e)}
        >
          <View>
            <Text style={styles.searchButton}>Search</Text>
          </View>
        </TouchableHighlight>
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
  filters: {
    flex: 1
  },
  exCheck: {
    padding: 10
  },
  searchButton: {
    flex: 1,
    width: "100%",
    color: "white",
    padding: 5
  },
  search: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "lightblue",
    marginBottom: 20,
    position: 'absolute',
    bottom: 0,
    right: 0
    
  }
});

export default SearchScreen;
