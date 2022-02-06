import React from "react";
import { StyleSheet, View, Text, Dimensions, Button } from "react-native";
import { LogoWithContainer } from "../components/LogoWithContainer";
import axios from "../util/axios";

export default function RecipientRequestScreen({ navigation }) {
  return (
    <View>
      <View>
        <LogoWithContainer />
        <Text style={styles.heading}>
          Need assistance? Request a meal using the MealShip Network.
        </Text>
        <Button title="Request a meal" onPress={() => axios.post("/request-a-meal", {
          recipientId: 
        })} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height * 0.3,
  },
  heading: {
    alignSelf: "center",
    paddingTop: 20,
    marginBottom: 200,
    paddingHorizontal: 10,
    fontSize: 24,
  },
});
