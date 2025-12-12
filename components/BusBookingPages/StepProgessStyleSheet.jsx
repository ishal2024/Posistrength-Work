import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },

  stepWrap: {
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },

  circle: {
    width: 22,
    height: 22,
    borderRadius: 20,
    backgroundColor: "#ddd",
  },

  activeCircle: {
    backgroundColor: "#FF8C00", // orange
  },

  label: {
    marginTop: 6,
    fontSize: 12,
    color: "#666",
  },

  activeLabel: {
    color: "#FF8C00",
    fontWeight: "700",
  },

  line: {
    position: "absolute",
    top: 10,
    left: 35,
    width: 60,
    height: 2,
    backgroundColor: "#ddd",
  },

  activeLine: {
    backgroundColor: "#FF8C00",
  },
});
