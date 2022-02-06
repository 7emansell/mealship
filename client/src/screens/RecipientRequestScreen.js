function RecipientRequestScreen({ navigation }) {
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
              Need assistance? Request a meal using the MealShip Network.
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