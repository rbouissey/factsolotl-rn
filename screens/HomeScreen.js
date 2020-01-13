import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Card from "../components/Card";
import Factsolotl from "../assets/images/bubbleF.png";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/factsolotlBG.png")}
        style={styles.backgroundImage}
      />
      <Image style={styles.homeImg} source={Factsolotl} />
      <View style={styles.homeTitle}>
        <Text style={styles.title}>Factsolotl</Text>
        <Text>The water quality fact finder.</Text>
      </View>
     
      <Card>
       
        <Text>
          Use Factsolotl to search for lead results from tap water samples taken
          at public schools across California from 2017 to 2019.
        </Text>
      </Card>

      <Card>
        <Text>
          The map shows the number of samples, per county, that had a lead
          result greater than 15ppb.
        </Text>
        <Text>Hover over a marker for info.</Text>
      </Card>
      <Card style={styles.card1}>
        <Text style={styles.dontPanic}>Dont't Panic!</Text>
        <Text>Stay informed.</Text>
      </Card>
    </View>
  );
}

Home.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  homeImg: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 0,
    left: 0,
    marginVertical: 50
  },
  card1: {
    right: 0,
    position: "absolute",
    bottom: 0,
    marginRight: 50
  },
  homeTitle: {
    position: 'absolute',
    top: 0,
    right: 30,
    marginVertical: 50,
    
  },
  title: {
    fontSize: 60
  },
  dontPanic: {
    fontSize: 40
  }
});
