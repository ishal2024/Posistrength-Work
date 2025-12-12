import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
 
  card: {
    paddingVertical: 18,
    // paddingHorizontal: 18,
    backgroundColor: "#fff",
    // borderRadius: 8,
    borderWidth: 1,
    borderBottomColor: "#E5E5E5",
    borderColor : "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 10,
  },


  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
    marginBottom : 40
  },

  cancelBtn: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1.5,
    borderColor: "#FF6B00",
    borderRadius: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  cancelText: {
    color: "#FF6B00",
    fontSize: 15,
    fontWeight: "600",
  },

  applyBtn: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: "#FF6B00",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  applyText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
