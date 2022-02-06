import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Button,
  SafeAreaView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import * as Location from "expo-location";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DonorMapScreen from "./src/screens/DonorMapScreen";
import RecipientRequestScreen from "./src/screens/RecipientRequestScreen";
import HomeScreen from "./src/screens/HomeScreen";
import VendorMenu from "./src/screens/VendorMenu";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Donor Home" component={DonorMapScreen} />
        <Stack.Screen name="Vendor Home" component={VendorMenu} />
        <Stack.Screen
          name="Recipient Home"
          component={RecipientRequestScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    paddingTop: 100,
    marginBottom: 250,
  },
  subheading: {
    fontSize: 30,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
  },
});

export default App;
