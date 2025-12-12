import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    marginBottom: 12,
  },

  card: {
    backgroundColor: "#FFF4E6",
    padding: 18,
    borderRadius: 14,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  busName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  busType: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },

  /* Route Section */
  route: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  routeSymbol : {
    
      alignItems : "center",
      rowGap : 5
  },

  routeDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#FF8C00",
  },

  routeLine: {
    width: 2,
    height: 50,
    backgroundColor: "#FF8C00",
    marginHorizontal: 12,
    borderRadius: 2,
  },

  routeTextWrap: {
    flex: 1,
    justifyContent: "space-between",
  },

  routeBlock: {
    marginBottom: 12,
  },

  routeTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  routeTime: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },

  /* Seats */
  seatHeading: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
  },

  seatRow: {
    flexDirection: "row",
    marginVertical: 10,
    flexWrap: "wrap",
  },

  seatTag: {
    backgroundColor: "#FF8C00",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 8,
  },

  seatTagText: {
    color: "#fff",
    fontWeight: "700",
  },

  /* Price Breakdown */
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  priceLabel: {
    fontSize: 14,
    color: "#444",
  },

  priceValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },

  discountValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FF4A4A",
  },

  separator: {
    height: 1,
    backgroundColor: "#FFD8B0",
    marginVertical: 12,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  totalValue: {
    fontSize: 18,
    fontWeight: "800",
    color: "#03a321ff",
  },
});
