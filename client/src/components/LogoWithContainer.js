import React from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../assets/Logo.svg";

export const LogoWithContainer = () => {
  return (
    <View style={styles.logoContainer}>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 20,
  },
});
