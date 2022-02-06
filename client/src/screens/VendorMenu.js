import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";

export default function VendorMenu({ navigation }) {
  const [message, setMessage] = useState("");
  const [showQR, setShowQR] = useState(false);

  return (
    <View>
      <Image
        style={{ width: 400, height: 600 }}
        source={require("../assets/qr.png")}
      />
      <View style={styles.pictureButtonContainer}>
        <View style={styles.pictureButton}>
          <View style={styles.innerPictureButton}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pictureButton: {
    backgroundColor: "black",
    borderRadius: 100,
    height: 100,
    width: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  innerPictureButton: {
    backgroundColor: "gray",
    borderRadius: 100,
    height: 80,
    width: 80,
  },
  pictureButtonContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
  },
});
