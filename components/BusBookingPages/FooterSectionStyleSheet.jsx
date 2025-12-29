import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  footerWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 5,
    backgroundColor: "#fff",

    borderTopWidth: 1,
    borderTopColor: "#f3f3f3",

    position: "relative",  // for top shadow
  },

  // Top shadow (soft)
  topShadow: {
    position: "absolute",
    top: -4,
    left: 0,
    right: 0,
    height: 6,
    backgroundColor: "rgba(0,0,0,0.05)",
  },

  priceBox: {
    flexDirection: "column",
  },

  priceText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#03a321ff", // orange
  },

  seatCount: {
    fontSize: 13,
    marginTop: 2,
    color: "#666",
  },

  continueBtn: {
    backgroundColor: "#f72323ff",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 12,
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  disabledBtn: {
  opacity: 0.5,
}
});
