import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardWrap: {
    backgroundColor: "#FFE8CC",  // light orange shade
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  subRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  subText: {
    color: "#555",
    fontSize: 14,
  },

  dot: {
    fontSize: 18,
    color: "#555",
    marginHorizontal: 5,
    fontWeight: "700",
  },
});
