function DonorMapScreen({ navigation }) {
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
          </MapView>
        </View>
      );
    };
  
    const styles = StyleSheet.create({
      map: {
        height: Dimensions.get("screen").height * 0.7,
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
  