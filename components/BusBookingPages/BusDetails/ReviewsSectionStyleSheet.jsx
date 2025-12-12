import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  revContainer: {
    marginTop: 25,
    marginBottom : 30
  },

  revHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  revTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  avgRatingBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF4E5",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    elevation: 2,
  },

  avgRatingText: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
  },

  revCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: "#FF8C00",
  },

  revTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#FFE1C4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  avatarText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FF8C00",
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  date: {
    fontSize: 13,
    color: "#777",
  },

  ratingRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  ratingText: {
    marginLeft: 4,
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
  },

  reviewText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
});
