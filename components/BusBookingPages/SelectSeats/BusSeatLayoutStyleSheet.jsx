import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  seatContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    elevation: 4,
  },

 layoutHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 30,
  // borderWidth : 1,
  // borderColor : "black"
},

deckSection: {
  flexDirection: "row",
  columnGap: 5,
},

deck: {
  paddingVertical: 4,
  paddingHorizontal: 6,
  borderRadius: 10,
  borderWidth: 1.2,
  borderColor: "#ccc",
  backgroundColor: "#fff",
},

activeDeck: {
  backgroundColor: "#FF8C00",  // Orange theme
  borderColor: "#FF8C00",
},

deckText: {
  fontSize: 10,
  color: "#444",
  fontWeight: "600",
},

activeDeckText: {
  color: "#fff",
},


  title: {
    fontSize: 20,
    fontWeight: "700",
    
    color: "#222",
  },

  busHeader : {
    flexDirection : "row",
    justifyContent : "space-between",
    marginBottom : 20,
    paddingHorizontal : 5
  },


  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  seatIconWrap: {
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: 8,
  marginVertical: 10,
},

seatLabel: {
  marginTop: 4,
  fontSize: 12,
  color: "#333",
  fontWeight: "600",
},


  legendRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },

  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  dot: {
    width: 14,
    height: 14,
    borderRadius: 10,
    marginRight: 6,
  },

  legendLabel: {
    fontSize: 14,
    color: "#555",
  },
});
