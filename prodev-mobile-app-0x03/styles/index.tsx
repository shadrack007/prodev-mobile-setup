import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    position: "relative",
  },
  navGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 11,
    marginBottom: 20,
  },

  largeText: {
    fontSize: 40,
    fontWeight: 700,
  },

  smallText: {
    fontSize: 16,
    color: "#7E7B7B",
    fontWeight: "500",
  },

  formGroup: {
    marginTop: 44,
  },

  placeholderText: {
    fontSize: 18,
    color: "#7E7B7B",
    marginBottom: 7,
  },

  inputField: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#7E7B7B",
    paddingHorizontal: 10,
    height: 50,
  },

  passwordGroup: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: "#7e7b7b",
  },

  forgotPasswordText: {
    fontSize: 17,
    marginTop: 9,
    textAlign: "right",
    color: "#34967C",
  },

  button: {
    backgroundColor: "#2B876E",
    height: 53,
    borderRadius: 10,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 17,
    color: "white",
  },

  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },

  divider: {
    borderWidth: 0.5,
    borderColor: "#c2c2c2",
    flex: 1,
  },

  dividerText: {
    fontSize: 17,
    color: "#C2C2C2",
  },

  socialMediaButtonGroup: {
    gap: 15,
    marginTop: 25,
  },

  socialMediaButton: {
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  socialMediaButtonText: {
    fontSize: 18,
    color: "#0D0D0D",
    fontWeight: 400,
  },

  subTextGroup: {
    flexDirection: "row",
    position: "absolute",
    bottom: 33,
    left: 77,
    right: 76,
  },

  subText: {
    fontSize: 18,
    color: "#b5b5b5",
  },

  subTextJoin: {
    fontSize: 18,
    color: "#FFA800",
    fontWeight: 600,
  },
});

export { styles };
