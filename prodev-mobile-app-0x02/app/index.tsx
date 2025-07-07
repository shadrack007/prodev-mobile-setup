import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
        <ImageBackground
          resizeMode="cover"
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
        >
          <View style={styles.container}>
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>
                Find your favorite place here
              </Text>
              <Text style={styles.textSmall}>The best prices for over 2 </Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.button}>
                <Text>Join here</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.transparentButton}>
                <Text style={{ color: "white" }}>Sign In</Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: "center", paddingVertical: 20 }}>
              <Text style={{ color: "white" }}>Continue to home</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("window").height,
  },

  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },

  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },

  textGroup: {
    alignItems: "center",
    flex: 1,
  },

  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },

  button: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 40,
    flex: 1,
  },

  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
});
