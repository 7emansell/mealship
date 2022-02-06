import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { LogoWithContainer } from "../components/LogoWithContainer";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import * as Location from "expo-location";
import {Picker} from '@react-native-picker/picker';

export default function DonorMapScreen({ navigation }) {
    const DonorComponent = () => {
      const [location, setLocation] = React.useState(null);
      const [error, setError] = React.useState(null);
      const [region, setRegion] = React.useState(null);
      const [numberMeals, setNumberMeals] = React.useState('1');
      const [cost, setCost] = React.useState('10');
      const totalDonation = cost*numberMeals;
  
      React.useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            setError("Permission to access location was denied");
            return;
          }
          const locate = await Location.getCurrentPositionAsync({});
          setLocation(locate.coords);
          setRegion({
            latitude: locate.coords.latitude,
            longitude: locate.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.0421,
          });
        })();
      }, []);
  
      return (
        <View>
          <LogoWithContainer />
          <MapView region={region} style={styles.map}>
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
          </MapView>
          <Text style={styles.caption}>There are 27 people in your area in need of a hot meal.</Text>
          <Text style={styles.heading}>I would like to give:</Text>
          <Picker
            itemStyle={{height: 44}}
            selectedValue={numberMeals}
            onValueChange={(v) => setNumberMeals(v)}>
            <Picker.Item label="1 meal" value="1" />
            <Picker.Item label="2 meals" value="2" />
            <Picker.Item label="3 meals" value="3" />
            <Picker.Item label="4 meals" value="4" />
            <Picker.Item label="5 meals" value="5" />
          </Picker>
          <Text style={styles.heading}>For each meal:</Text>
          <Picker
            itemStyle={{height: 44}}
            selectedValue={cost}
            onValueChange={(v) => setCost(v)}
            mode="dropdown">
            <Picker.Item label="$10" value="10" />
            <Picker.Item label="$15" value="15" />
            <Picker.Item label="$20" value="20" />
          </Picker>
          <Text style={styles.heading}>Your total donation is ${totalDonation}.</Text>
          <Button
            color="green"
            title="Donate"
            onPress={() => navigation.navigate("Donor Home")}
          />
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
        paddingTop: 10,
        marginBottom: 10,
        fontSize: 24,
      },
      caption: {
        alignSelf: "center",
        paddingTop: 10,
        marginBottom: 10,
        fontSize: 15,
      },
    });
  
    return <DonorComponent />;
  };

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
      </MapView>
    </View>
  );
}

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
