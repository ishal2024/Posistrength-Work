import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
footerWrap: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingVertical: 15,
  paddingHorizontal: 20,
  backgroundColor: "#fff",

  // Top border
  borderTopWidth: 1,
  borderTopColor: "#f3f3f3",
 
},


  priceBox: {
    flexDirection: "column",
    
  },

  priceText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#03a321ff",   // orange theme
  },

  perPerson: {
    fontSize: 13,
    color: "#666",
  },

  seatBtn: {
    backgroundColor: "#f72323ff",
    paddingVertical: 10,
    paddingHorizontal: 40,   // 👈 button width thoda kam rakha
    borderRadius: 10,
  },

  btnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
});
