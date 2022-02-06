import React from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";
import Logo from "../assets/Logo.svg";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.logoContainer}>
        <Logo height={100} width={300} />
        <Text style={styles.subheading}>Share meals with your community</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color="red"
          title="Recipient Signup"
          onPress={() => navigation.navigate("Recipient Home")}
        />
        <Button
          color="green"
          title="Donor Signup"
          onPress={() => navigation.navigate("Donor Home")}
        />
        <Button
          color="blue"
          title="Become a Vendor"
          onPress={() => navigation.navigate("Vendor Home")}
        />
      </View>
    </SafeAreaView>
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
