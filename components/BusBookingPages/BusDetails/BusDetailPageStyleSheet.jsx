import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 220,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginTop: 10,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  leftIcon: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 50,
    zIndex: 10,
  },

  rightIcon: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 50,
    zIndex: 10,
  },
  container: {
    marginTop: 15,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  busName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  typeText: {
    fontSize: 14,
    color: "#777",
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

  routeCard: {
    marginTop: 15,
    backgroundColor: "#FFE8CC",  // orange theme soft bg
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
  },

  leftColumn: {
    alignItems: "center",
    width: 20,
    marginRight: 10,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#FF8C00",  // orange
  },

  line: {
    width: 3,
    height: 40,
    backgroundColor: "#FF8C00",
    marginVertical: 5,
    borderRadius: 2,
  },

  textColumn: {
    flex: 1,
  },

  stationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  stationName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },

  timeText: {
    color: "#555",
    marginTop: 3,
  },

  durationLabel: {
    fontSize: 13,
    color: "#555",
  },

  durationText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FF8C00",
  },
  amenContainer: {
    marginTop: 25,
  },

  amenTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    marginBottom: 12,
  },

  amenGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  amenItem: {
    width: "23%",
    alignItems: "center",
    marginBottom: 20,
  },

  amenLabel: {
    fontSize: 13,
    color: "#444",
    marginTop: 6,
    textAlign: "center",
  },

  // Seat Details Section
  card: {
    backgroundColor: '#FFF',
    // padding: 16,
    // elevation: 3,
    marginTop : 25,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },

  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  statBox: {
    width: '30%',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 22,
    fontWeight: '700',
  },

  statLabel: {
    fontSize: 13,
    marginTop: 4,
  },

  availableBg: {
    backgroundColor: '#ECFDF3',
  },

  availableText: {
    color: '#16A34A',
  },

  seaterBg: {
    backgroundColor: '#FFF1E6',
  },

  seaterText: {
    color: '#FF6B00',
  },

  sleeperBg: {
    backgroundColor: '#F6F0FF',
  },

  sleeperText: {
    color: '#7C3AED',
  },

  layoutRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 12,
  },

  layoutLabel: {
    color: '#777',
    fontSize: 14,
  },

  layoutValue: {
    fontSize: 14,
    fontWeight: '600',
  },

  // Price Detail Section

  pricingContainer: {
    backgroundColor: '#FFF',
    marginTop : 25,
  },

  pricingHeader: {
    marginBottom: 12,
  },

  pricingHeaderText: {
    fontSize: 20,
  },

  pricingCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAF9F7',
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
  },

  pricingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  pricingIconBox: {
    width: 42,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pricingSeaterBg: {
    backgroundColor: '#FFF1E6',
  },

  pricingSleeperBg: {
    backgroundColor: '#F3ECFF',
  },

  pricingTitle: {
    fontSize: 15,
    fontWeight: '600',
  },

  pricingSubText: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },

  pricingSeaterPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF6B00',
  },

  pricingSleeperPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7C3AED',
  },

  // Vehicle Specification Section
  vehicleSpecContainer: {
    backgroundColor: '#FFF',
    marginTop : 25
  },

  vehicleSpecHeader: {
    marginBottom: 12,
  },

  vehicleSpecHeaderText: {
    fontSize: 20,
  },

  vehicleSpecGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  vehicleSpecCard: {
    width: '48%',
    backgroundColor: '#FAF9F7',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    alignItems: 'center',
  },

  vehicleSpecLabel: {
    fontSize: 13,
    color: '#777',
    marginTop: 10,
  },

  vehicleSpecValue: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 4,
  },

});