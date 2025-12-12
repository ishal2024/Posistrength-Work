import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom : 30
  },

  /* Primary Button */
  mainBtn: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: "#FF8C00",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },

  mainBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  /* Outline Buttons */
  outlineBtn: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#FF8C00",
    alignItems: "center",
    marginBottom: 15,
  },

  outlineBtnText: {
    color: "#FF8C00",
    fontSize: 15,
    fontWeight: "600",
  },

  shareLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
    marginBottom: 12,
  },

  iconRow: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 18,
  },

  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "#FF8C00",
    justifyContent: "center",
    alignItems: "center",
  },
});
