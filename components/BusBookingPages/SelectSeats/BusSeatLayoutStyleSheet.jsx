import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  seatContainer: {
  marginTop: 20,
  backgroundColor: '#f6f4f4ff',
  padding: 15,
  borderRadius: 12,
  elevation: 3,
},


  layoutHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    // borderWidth : 1,
    // borderColor : "black"
  },




  title: {
    fontSize: 20,
    fontWeight: "700",

    color: "#222",
  },

  busHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 5
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
    borderRadius: 10,
    borderWidth: 1.2,
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

  // row: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   marginBottom: 12,
  // },

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

  // Seat Layout Styles

  deck: {
    padding: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  aisle: {
    width: 24,
  },

  /* LEFT – BIG SLEEPER */
  sleeperSeat: {
    width: 90,
    height: 44,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D0D0D0',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  /* RIGHT GROUP */
  rightGroup: {
    flexDirection: 'row',
    gap: 10,
  },

  /* SEATER */
  seaterSeat: {
    width: 44,
    height: 44,
   backgroundColor: '#F5F5F5',
borderRadius: 8,
borderWidth: 1,
borderColor: '#D0D0D0',

    alignItems: 'center',
    justifyContent: 'center',
  },

  /* RIGHT SIDE SLEEPER */
  sleeperSeatSmall: {
    width: 70,
    height: 44,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D0D0D0',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  seatText: {
    fontSize: 10,
    fontWeight: '600',
  },
});
