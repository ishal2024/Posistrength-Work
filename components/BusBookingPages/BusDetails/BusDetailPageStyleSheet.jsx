import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 220,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginTop: 10,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  leftIcon: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 50,
    zIndex: 10,
  },

  rightIcon: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 50,
    zIndex: 10,
  },
  container: {
    marginTop: 15,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  busName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  typeText: {
    fontSize: 14,
    color: "#777",
    marginTop: 2,
  },

  ratingBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff7e6",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    elevation: 2,
  },

  ratingText: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: "600",
    color: "#444",
  },

  routeCard: {
    marginTop: 15,
    backgroundColor: "#FFE8CC",  // orange theme soft bg
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
  },

  leftColumn: {
    alignItems: "center",
    width: 20,
    marginRight: 10,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#FF8C00",  // orange
  },

  line: {
    width: 3,
    height: 40,
    backgroundColor: "#FF8C00",
    marginVertical: 5,
    borderRadius: 2,
  },

  textColumn: {
    flex: 1,
  },

  stationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  stationName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },

  timeText: {
    color: "#555",
    marginTop: 3,
  },

  durationLabel: {
    fontSize: 13,
    color: "#555",
  },

  durationText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FF8C00",
  },
  amenContainer: {
    marginTop: 25,
  },

  amenTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    marginBottom: 12,
  },

  amenGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  amenItem: {
    width: "23%",
    alignItems: "center",
    marginBottom: 20,
  },

  amenLabel: {
    fontSize: 13,
    color: "#444",
    marginTop: 6,
    textAlign: "center",
  },

});