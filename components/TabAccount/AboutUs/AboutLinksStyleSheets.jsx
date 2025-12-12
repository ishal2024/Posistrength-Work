import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 15,
    fontSize: 15,
    color: "#000",
  },
  version: {
    textAlign: "center",
    marginTop: 25,
    marginBottom: 30,
    fontSize: 13,
    color: "#777",
  },
});