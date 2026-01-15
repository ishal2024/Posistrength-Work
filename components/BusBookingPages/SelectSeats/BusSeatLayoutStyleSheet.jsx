import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //   seatContainer: {
  //   marginTop: 20,
  //   backgroundColor: '#f6f4f4ff',
  //   padding: 15,
  //   borderRadius: 12,
  //   elevation: 3,
  // },


  //   layoutHeader: {
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     alignItems: "center",
  //     marginBottom: 30,
  //   },




  //   title: {
  //     fontSize: 20,
  //     fontWeight: "700",

  //     color: "#222",
  //   },

  //   busHeader: {
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     marginBottom: 20,
  //     paddingHorizontal: 5
  //   },

  //   deckSection: {
  //     flexDirection: "row",
  //     columnGap: 5,
  //   },

  //   deck: {
  //     paddingVertical: 4,
  //     paddingHorizontal: 6,
  //     borderRadius: 10,
  //     borderWidth: 1.2,
  //     borderColor: "#ccc",
  //     backgroundColor: "#fff",
  //   },

  //   activeDeck: {
  //     borderRadius: 10,
  //     borderWidth: 1.2,
  //     backgroundColor: "#FF8C00",  // Orange theme
  //     borderColor: "#FF8C00",
  //   },

  //   deckText: {
  //     fontSize: 10,
  //     color: "#444",
  //     fontWeight: "600",
  //   },

  //   activeDeckText: {
  //     color: "#fff",
  //   },

  //   // row: {
  //   //   flexDirection: "row",
  //   //   justifyContent: "space-between",
  //   //   marginBottom: 12,
  //   // },

  //   legendRow: {
  //     flexDirection: "row",
  //     justifyContent: "space-around",
  //     marginTop: 20,
  //   },

  //   legendItem: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //   },

  //   dot: {
  //     width: 14,
  //     height: 14,
  //     borderRadius: 10,
  //     marginRight: 6,
  //   },

  //   legendLabel: {
  //     fontSize: 14,
  //     color: "#555",
  //   },

  //   // Seat Layout Styles

  //   deck: {
  //     padding: 10,
  //   },

  //   row: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     justifyContent: 'space-between',
  //     marginBottom: 14,
  //   },

  //   aisle: {
  //     width: 24,
  //   },

  //   /* LEFT – BIG SLEEPER */
  //   sleeperSeat: {
  //     width: 90,
  //     height: 44,
  //     backgroundColor: '#F5F5F5',
  //     borderRadius: 8,
  //     borderWidth: 1,
  //     borderColor: '#D0D0D0',

  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     justifyContent: 'space-around',
  //   },

  //   /* RIGHT GROUP */
  //   rightGroup: {
  //     flexDirection: 'row',
  //     gap: 10,
  //   },

  //   /* SEATER */
  //   seaterSeat: {
  //     width: 44,
  //     height: 44,
  //    backgroundColor: '#F5F5F5',
  // borderRadius: 8,
  // borderWidth: 1,
  // borderColor: '#D0D0D0',

  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },

  //   /* RIGHT SIDE SLEEPER */
  //   sleeperSeatSmall: {
  //     width: 70,
  //     height: 44,
  //     backgroundColor: '#F5F5F5',
  //     borderRadius: 8,
  //     borderWidth: 1,
  //     borderColor: '#D0D0D0',

  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     justifyContent: 'space-around',
  //   },

  //   seatText: {
  //     fontSize: 10,
  //     fontWeight: '600',
  //   },

  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  layoutHeader: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  deckSection: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 4,
  },
  deckTab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  activeDeckTab: {
    backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  deckText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeDeckText: {
    color: '#FF6B00',
  },
  busFrame: {
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderRadius: 20,
    padding: 12,
    flex: 1,
  },
  steeringRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  entranceDoor: {
    width: 40,
    height: 4,
    backgroundColor: '#EEE',
    borderRadius: 2,
  },
  seatsScroll: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    alignItems: 'center',
  },
  seatBase: {
    flex: 1, // Dynamic width allocation
    marginHorizontal: 4,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1.5,
  },
  seaterDimensions: {
    aspectRatio: 0.9,
  },
  sleeperDimensions: {
    aspectRatio: 1.8, // Make sleepers look longer
    flex: 1.5, // Sleepers naturally take a bit more horizontal space
  },
  aisleSpace: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: 'transparent',
  },
  availableSeat: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
  },
  selectedSeat: {
    backgroundColor: '#FF6B00',
    borderColor: '#FF6B00',
  },
  bookedSeat: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E0E0E0',
  },
  seatNumber: {
    fontSize: 10,
    fontWeight: '700',
    color: '#444',
    marginTop: 2,
  },
  seatPrice: {
    fontSize: 8,
    color: '#888',
  },
  selectedSeatText: {
    color: '#FFFFFF',
  },

  legendSection: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    marginTop: 10,
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12, // Space between the two rows
    columnGap : 30
  },
  legendItem: {
    flex: 1, // Ensures equal width for all 3 slots
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
   
  },
  legendDot: {
    width: 14,
    height: 14,
    borderRadius: 3,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  legendLabel: {
    fontSize: 12,
    color: '#666666',
    fontWeight: '500',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    width: '100%',
  },
  seatBase: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2, // Fixed consistent border thickness
    borderRadius: 6,
    position: 'relative',
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  // Seater: Compact Square/Rounded
  seaterBase: {
    flex: 1,
    aspectRatio: 1,
    maxWidth: 55,
  },
  // Sleeper: Horizontally Elongated (Bed style)
  sleeperBase: {
    flex: 2.2, // Takes up more horizontal space than seater
    height: 50,
    flexDirection: 'row',
    paddingRight: 10,
  },
  seaterContent: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  sleeperContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  seaterTextGroup: {
    alignItems: 'center',
    marginTop: 2,
  },
  sleeperTextGroup: {
    marginLeft: 8,
    justifyContent: 'center',
  },
  seatNumber: {
    fontSize: 10,
    fontWeight: '700',
    color: '#333',
  },
  seatPrice: {
    fontSize: 8,
    color: '#777',
    fontWeight: '600',
  },
  aisleSpace: {
    flex: 1, // Matches seater width to keep columns aligned
    marginHorizontal: 4,
  },
  selectedBackground: {
    backgroundColor: '#FFF8F4', // Subtle tint to show selection inside the border
  },
  // Sleeper specific UI element (the "pillow" area)
  sleeperHeadrest: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 5,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    opacity: 0.5,

    // Design for booked seat
 bookedSeat: {
    borderColor: '#D1D1D1', // Professional gray border
    backgroundColor: '#F2F2F2', // Light gray fill
    overflow: 'hidden', // Keeps diagonal lines inside the box
    borderWidth: 1.5,
  },
  crossLine1: {
    position: 'absolute',
    width: '150%', // Extra width to ensure it covers diagonal corner-to-corner
    height: 1,
    backgroundColor: '#D1D1D1',
    transform: [{ rotate: '45deg' }],
  },
  crossLine2: {
    position: 'absolute',
    width: '150%',
    height: 1,
    backgroundColor: '#D1D1D1',
    transform: [{ rotate: '-45deg' }],
  },
  genderIconContainer: {
    backgroundColor: '#F2F2F2', // Matches bookedSeat bg to clear lines behind icon
    paddingHorizontal: 4,
    borderRadius: 10,
    zIndex: 2, // Ensures icon is above the cross lines
  },
  genderIcon: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color : "#4d4d4d"
  },
  // Added for Sleeper specific booked look
  sleeperBase: {
    flex: 2.2,
    height: 50,
    marginHorizontal: 4,
  },
  seaterBase: {
    flex: 1,
    aspectRatio: 1,
    maxWidth: 55,
    marginHorizontal: 4,
  },
  seatBase: {
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  }


  }
});
