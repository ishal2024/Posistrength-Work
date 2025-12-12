import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
    backgroundColor: "#fff",
    flex: 1,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 18,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontSize: 16,
    marginLeft: 12,
    color: "#000",
  },

  deleteText: {
    fontSize: 16,
    marginLeft: 12,
    color: "#D32F2F",
    fontWeight: "600",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E5E5",
  },
});
