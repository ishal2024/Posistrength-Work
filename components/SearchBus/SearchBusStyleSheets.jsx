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

filterSortRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 10,
  marginBottom: 25,
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

  busCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    elevation: 3,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  busName: {
    fontSize: 16,
    fontWeight: '600',
  },

  busSub: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },

  distanceBadge: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#EFF6FF',
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 20,
  gap: 6,
},

distanceText: {
  fontSize: 13,
  fontWeight: '600',
  color: '#2563EB',
},

  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },

  ratingText: {
    marginLeft: 4,
    color: '#1DB954',
    fontWeight: '600',
    fontSize: 13,
  },

  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 14,
  },

  cityBox: {
    alignItems: 'center',
    // justifyContent : 'center' 
  },

  timeText: {
    fontSize: 18,
    fontWeight: '600',
  },

  cityText: {
    fontSize: 12,
    color: '#777',
  },

  durationBox: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  durationText: {
    fontSize: 12,
    color: '#777',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth : 0.5,
    borderTopColor : '#9c9b9bff',
    marginTop : 10,
    paddingTop : 10

  },

  seatBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  seatText: {
    color: '#059f03ff',
    fontSize: 13,
  },

  priceBox: {
    alignItems: 'flex-end',
  },

  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2e9a04ff',
  },

  perSeat: {
    fontSize: 12,
    color: '#777',
  },
});