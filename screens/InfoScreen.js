import React from "react";
import {
  View,
  Text,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import HeaderImage from "../components/HeaderImage";
import StyledText from "../components/StyledText";
import Card from "../components/Card";
import BG from '../components/HeaderBG'


export default function InfoScreen() {
  return (
    <ScrollView style={styles.container}>
      <StyledText style={styles.header}>How the search works:</StyledText>
      <Card style={styles.searchInfo}>
        <StyledText>
          Your search will return a result for each sample taken that matches
          the search criteria.
        </StyledText>
        <StyledText>
          Most schools will have several results and results with no exceedance
          (lead less than 15ppb) will look the same, with lead = 5ppb.
        </StyledText>
      </Card>
      <StyledText style={styles.header}>What is an exceedance?</StyledText>
      <Card>
        <StyledText>
          "Systems compare sample results from homes to EPA’s action level of
          0.015 mg/L (15 ppb). Exceeding the action level is not a violation.
          Violations can be assessed if a system does not perform certain
          required actions (e.g., public education or lead service line
          replacement) after the action level is exceeded. Other violations may
          also be assessed under the rule. For example, if samples are collected
          improperly, samples are not reported, or if treatment is done
          incorrectly."
        </StyledText>
        <StyledText> -The EPA Lead and Copper rule</StyledText>
      </Card>

      <StyledText style={styles.header}>
        Understanding the EPA lead and copper rule:
      </StyledText>
      <Card>
        <TouchableHighlight
          style={styles.link}
          onPress={() =>
            Linking.openURL(
              "https://www.epa.gov/sites/production/files/2019-10/documents/lcr101_factsheet_10.9.19.final_.2.pdf"
            )
          }
        >
          <Text style={styles.linkText}>A quick guide.</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() =>
            Linking.openURL(
              "https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=60001N8P.txt"
            )
          }
          style={styles.link}
        >
          <Text style={styles.linkText}>Dig a little deeper.</Text>
        </TouchableHighlight>
      </Card>
      <StyledText style={styles.header}>
        Find out more about the data that powers this app:
      </StyledText>
      <Card>
        <StyledText>
          "The Division of Drinking Water (DDW), in collaboration with the
          California Department of Education, has taken the initiative to begin
          testing for lead in drinking water at all public K-12 schools."
        </StyledText>
        <TouchableHighlight onPress={() =>
            Linking.openURL(
              "https://data.ca.gov/dataset/drinking-water-results-of-lead-sampling-of-drinking-water-in-california-schools"
            )
          } style={styles.link}>
        <Text
          style={styles.linkText}
          
        >
          CA.gov Open Data Portal
        </Text>
        </TouchableHighlight>
      </Card>
    </ScrollView>
  );
}

InfoScreen.navigationOptions = {
  title: "More Info",
  headerLeft: <HeaderImage />,
  headerBackground: <BG/>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 20
  },
  searchInfo: {
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontFamily: "fira-bold"
  },
  link: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0099cc",
    margin: 2,
    padding: 5,
    borderRadius: 5,
  },
  linkText: {
    color: "white",
    fontFamily: 'fira-bold'
  }
});
