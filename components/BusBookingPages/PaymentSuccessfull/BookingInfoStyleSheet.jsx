import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#FFEFE0", // light orange shade
    padding: 18,
    borderRadius: 14,
    borderLeftWidth: 5,
    borderLeftColor: "#FF8C00", // orange border
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  label: {
    fontSize: 14,
    color: "#555",
  },

  value: {
    fontSize: 14,
    color: "#222",
    fontWeight: "600",
  },

  amountPaid: {
    fontSize: 15,
    color: "#03a321ff",
    fontWeight: "700",
  },
});
