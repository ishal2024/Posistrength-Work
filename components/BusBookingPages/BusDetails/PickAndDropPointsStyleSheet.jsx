import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  pointContainer: {
    marginTop: 25,
  },

  pointHeading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    marginBottom: 12,
  },

  pointRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    gap : 8
  },

  radioWrap: {
    width: 30,
    alignItems: "center",
  },

  pointTextArea: {
    flex: 1, 
  },

  pointTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  pointSub: {
    fontSize: 10,
    color: "#666",
    marginTop: 2,
  },

  pointTime: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },
});
