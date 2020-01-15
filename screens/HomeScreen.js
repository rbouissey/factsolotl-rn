import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Card from "../components/Card";
import Factsolotl from "../assets/images/bubbleF.png";
import Header from '../components/Header';
import StyledText from '../components/StyledText';



export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/factsolotlBG.png")}
        style={styles.backgroundImage}
      />
      <Image style={styles.homeImg} source={Factsolotl} />
      <View style={styles.homeTitle}>
        <Header style={styles.title}>Factsolotl</Header>
        <StyledText style={styles.subTitle}>The water quality fact finder.</StyledText>
      </View>
     
      <Card style={styles.searchCard}>
       
        <StyledText style={styles.search}>
          Use Factsolotl to <Text style={{color: 'green', fontSize: 25, fontFamily: 'fira-bold'}}>search</Text> for lead results from tap water samples taken
          at public schools across California from 2017 to 2019. 
        </StyledText>
      </Card>

      <Card style={styles.mapCard}>
        <StyledText style={styles.search}>
          The <Text style={{color: 'green', fontSize: 25, fontFamily: 'fira-bold'}}>map</Text> shows the number of samples, per county, that had a lead
          result greater than 15ppb.
        </StyledText>
      </Card>
      <View style={styles.dontpanicCard}>
        <Header style={styles.dontPanic}>Dont't Panic!</Header>
        <StyledText>Stay informed.</StyledText>
      </View>
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
  dontpanicCard: {
    left: 0,
    position: "absolute",
    bottom: 0,
    padding: 10
  },
  homeTitle: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 30,
    marginVertical: 50,

  },
  title: {
    fontSize: 50,
    fontFamily: 'fira-bold'
  },
  dontPanic: {
    fontSize: 40,
    fontFamily: 'fira-bold'

  },
  search: {
    fontSize: 20
  },
  searchCard: {
    width: '60%',
    left: 0,
    position: 'absolute',
    top: '30%'
    
  },
  mapCard: {
    top: '60%',
    width: '55%',
    right: 0,
    position: 'absolute',
  }
});
