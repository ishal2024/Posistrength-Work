import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7f1",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  routeCard: {
    backgroundColor: "#ff6f00",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },

  busImage: {
    width: 120,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },

  routeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  routeText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 15,
  },

  swapCircle: {
    width: 40,
    height: 40,
    backgroundColor: "#782e03ff",
    borderRadius: 120,
    justifyContent: "center",
    alignItems: "center",
  },

  swapIcon: {
    color: "#fff",
    fontSize: 20,
  },

  dateBox: {
    backgroundColor: "#d44f00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  dateText: {
    color: "#fff",
    fontWeight: "600",
  },

  busCard: {
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems : 'center',
    elevation: 3,
  },

  busName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#333",
  },

  busSub: {
    color: "#777",
    marginBottom: 6,
  },

  timeText: {
    color: "#444",
    fontSize: 13,
  },

  seatGreen: {
    color: "green",
    fontWeight: "bold",
    marginTop: 5,
  },

  seatRed: {
    color: "red",
    fontWeight: "bold",
    marginTop: 5,
  },

  rightBox: {
    alignItems: "flex-end",
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff6f00",
  },

  duration: {
    fontSize: 14,
    color: "#444",
    marginTop: 5,
  },
  filterSortRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 10,
  marginBottom: 5,
  paddingHorizontal: 5,
},

totalBus : {
   color : "green",
   alignSelf : "center",
   fontSize : 16,
   
},

filterBtn: {
  backgroundColor: "#ff7f32",
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 10,
  elevation: 2,
},

sortBtn: {
  backgroundColor: "#ff7f32",
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 10,
  elevation: 2,
},

filterSortText: {
  color: "#fff",
  fontWeight: "600",
  fontSize: 15,
},

});