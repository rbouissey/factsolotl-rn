import React from "react";
import { View, Linking, Text, StyleSheet, Image } from "react-native";
import HeaderImage from "../components/HeaderImage";

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text>Understanding the EPA lead and copper rule:</Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://www.epa.gov/sites/production/files/2019-10/documents/lcr101_factsheet_10.9.19.final_.2.pdf"
          )
        }
      >
        a quick guide
      </Text>
      <Text
        style={{ color: "blue" }}
        onPress={() =>
          Linking.openURL(
            "https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=60001N8P.txt"
          )
        }
      >
        dig a little deeper
      </Text>
    </View>
  );
}

InfoScreen.navigationOptions = {
  title: "More Info",
  headerLeft: <HeaderImage />
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})
