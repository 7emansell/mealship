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
  