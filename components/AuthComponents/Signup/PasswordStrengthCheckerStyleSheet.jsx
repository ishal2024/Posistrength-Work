import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex : 1,
  },

  input: {
    // borderWidth: 2,
    // borderColor: "#ccc",
    // padding: 12,
    // borderRadius: 10,
    // fontSize: 16,
    // backgroundColor: "#fff",
    // marginBottom: 10,
     flex: 1,
    fontSize: 14,
    height: 48,
    paddingHorizontal: 15,
    width : "100%"
  },

  checkBox: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    // borderWidth: 1.5,
    // borderColor: "#FFDDC0",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  rowText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#444",
  },
});
