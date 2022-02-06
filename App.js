
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons'; 
import * as Location  from 'expo-location'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DonorMapScreen({ navigation }){
  const DonorMapComponent = () => {
      const [location, setLocation] = React.useState(null)
      const [error, setError] = React.useState(null)

      React.useEffect(() => {
          (async () =>{
              let { status } = await Location.requestPermissionsAsync();
              if(status !== 'granted'){
                  setError('Permission to access location was denied');
                  return;
              }
              const locate = await Location.getCurrentPositionAsync({});
              setLocation(locate.coords)
          })()
      }, []);

      return (
          <View>
              <Text style={styles.heading}>Mealship</Text>
              <MapView style={styles.map}>
                  {location ? (
                      <Marker coordinate={location} title="your location" >
                          <FontAwesome name="map-marker" size={40} color="#B12A5B" />
                      </Marker>
                  ):
                      <Text>{error}</Text>
                  }
                <MapView.Circle
                  center = { location }
                  radius = { 1000 }
                  strokeWidth = { 1 }
                  strokeColor = { '#1a66ff' }
                  fillColor = { 'rgba(230,238,255,0.5)' }
                />
                <Marker coordinate={location} title="John" >
                          <FontAwesome name="map-pin" size={40} color="#454B1B" />
                </Marker>
              </MapView>
          </View>
      );
  };

  const styles = StyleSheet.create({
      map: {
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height * 0.90,
      },
      heading: {
          alignSelf: 'center',
          paddingTop: 20,
          marginBottom: 10,
          fontSize: 24
      },
  });
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Donor"
        onPress={() => navigation.navigate('Donor Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Donor Home" component={DonorMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;