import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ff7a00",
    position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  elevation: 10, 
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 45,
    height: 45,
    borderRadius: 10,
    resizeMode: "cover",
    marginRight: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
  },

  bellWrap: {
    marginRight: 18,
  },

  dot: {
    width: 8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 10,
    position: "absolute",
    top: -2,
    right: -2,
  },
});