import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },

  card: {
    backgroundColor: "#FFF7EE",
    borderRadius: 14,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#FFE2C4",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#FFE2C4",
  },

  numberCircle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#FF8C00",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  numberText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  passengerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },

  seatText: {
    fontSize: 12,
    color: "#777",
  },

  body: {
    padding: 15,
    backgroundColor : "white"
  },

  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  label: {
    marginLeft: 6,
    fontSize: 14,
    color: "#444",
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FFE2C4",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 14,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  smallInput: {
    width: "48%",
  },
});
