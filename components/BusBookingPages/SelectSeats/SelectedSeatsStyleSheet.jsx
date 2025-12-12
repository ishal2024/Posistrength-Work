import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrap: {
    marginTop: 25,
    marginBottom: 25,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#FFE8CC", // light orange background
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  seatIconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#FF8C00", // orange
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  seatIconText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  infoBox: {
    flex: 1,
  },

  seatType: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  deckText: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },

  rightBox: {
    alignItems: "flex-end",
  },

  priceText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
    marginBottom: 8,
  },

  removeBtn: {
    width: 32,
    height: 32,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#FF4A4A",
    justifyContent: "center",
    alignItems: "center",
  },
});
