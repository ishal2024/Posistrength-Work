import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginBottom: 10,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },

  viewAll: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FF8C00",
  },

  cardBg: {
    width: width * 0.92,
    height: 180,
    borderRadius: 16,
    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "flex-end",
    padding: 16,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
    borderRadius: 16,
  },

  offerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 6,
  },

  validText: {
    color: "#f0f0f0",
    fontSize: 13,
    marginBottom: 12,
  },

  detailsBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF8C00",
    paddingVertical: 8,
    alignSelf: "flex-start",
    paddingHorizontal: 14,
    borderRadius: 8,
  },

  detailsText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },

  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: "#FF8C00",
    width: 10,
  },
});
