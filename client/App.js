import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Button,
  SafeAreaView,
} from "react-native";
import Logo from "./src/assets/Logo.svg";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import * as Location from "expo-location";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogoWithContainer } from "./src/components/LogoWithContainer";

function RecipientScreen({ navigation }) {
  const RecipientComponent = () => {
    const [location, setLocation] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError("Permission to access location was denied");
          return;
        }
        const locate = await Location.getCurrentPositionAsync({});
        setLocation(locate.coords);
      })();
    }, []);

    return (
      <View>
        <View>
          <LogoWithContainer />
          <Text style={styles.heading}>
            Need assistance? Request a meal using the MealShare Network.
          </Text>
          <Button title="Request a meal" />
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    map: {
      width: Dimensions.get("screen").width,
      height: Dimensions.get("screen").height * 0.9,
    },
    heading: {
      alignSelf: "center",
      paddingTop: 20,
      marginBottom: 200,
      paddingHorizontal: 10,
      fontSize: 24,
    },
  });

  return <RecipientComponent />;
}

function DonorScreen({ navigation }) {
  const DonorComponent = () => {
    const [location, setLocation] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError("Permission to access location was denied");
          return;
        }
        const locate = await Location.getCurrentPositionAsync({});
        setLocation(locate.coords);
      })();
    }, []);

    return (
      <View>
        <LogoWithContainer />
        <MapView style={styles.map}>
          {location ? (
            <Marker coordinate={location} title="your location">
              <FontAwesome name="map-marker" size={40} color="#B12A5B" />
            </Marker>
          ) : (
            <Text>{error}</Text>
          )}
          <MapView.Circle
            center={location}
            radius={1000}
            strokeWidth={1}
            strokeColor={"#1a66ff"}
            fillColor={"rgba(230,238,255,0.5)"}
          />
          <Marker coordinate={location} title="John">
            <FontAwesome name="map-pin" size={40} color="#454B1B" />
          </Marker>
        </MapView>
      </View>
    );
  };

  const styles = StyleSheet.create({
    map: {
      height: Dimensions.get("screen").height * 0.3,
      borderRadius: 10,
      marginHorizontal: 10,
    },
    heading: {
      alignSelf: "center",
      paddingTop: 20,
      marginBottom: 10,
      fontSize: 24,
    },
  });

  return <DonorComponent />;
}

function HomeScreen({ navigation }) {
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
        <Button color="blue" title="Become a Vendor" />
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Donor Home" component={DonorScreen} />
        <Stack.Screen name="Recipient Home" component={RecipientScreen} />
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
