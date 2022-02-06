import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, Button } from "react-native";
import { LogoWithContainer } from "../components/LogoWithContainer";
import QRCode from "react-native-qrcode-generator";

export default function RecipientRequestScreen({ navigation }) {
  const [message, setMessage] = useState("");
  const [showQR, setShowQR] = useState(false);

  async function handleMessages() {
    setShowQR(false);
    setMessage(
      "Your request for a meal has been received! Your request will be fulfilled promptly as we wait for a donor."
    );

    await new Promise((resolve) => setTimeout(resolve, 5000));

    setMessage(
      "Your request for a meal has been fulfilled! Here is your QR code that you may scan at any of our supported locations:"
    );
    setShowQR(true);
  }

  return (
    <View>
      <View>
        <LogoWithContainer />
        <Text style={styles.heading}>
          Need assistance? Request a meal using the MealShip Network.
        </Text>
        <Button title="Request a meal" onPress={handleMessages} />
        <Text style={styles.processingMessage}>{message}</Text>
        <View style={styles.qrCodeContainer}>
          {showQR && (
            <QRCode value="http://localhost:3000/?purchaseAmount=$14.53&amp;voucherId=12345" />
          )}
        </View>
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
  processingMessage: {
    paddingHorizontal: 20,
    fontSize: 20,
    textAlign: "center",
  },
  qrCodeContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
  },
});
