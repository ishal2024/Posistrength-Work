import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // card: {
  //   backgroundColor: "#fff",
  //   padding: 20,
  //   marginHorizontal : 20,
  //   borderRadius: 20,
  //   marginVertical: 20,
  //   elevation: 4,
  // },
  // input: {
  //   backgroundColor: "#fff",
  //   borderWidth: 1,
  //   borderColor: "#ff7a00",
  //   borderRadius: 12,
  //   padding: 15,
  //   marginBottom: 15,
  // },
  // reverseBtn: {
  //   position: "absolute",
  //   right: 15,
  //   top: 55,
  //   backgroundColor: "#fff",
  //   padding: 8,
  //   borderRadius: 50,
  //   elevation: 5,
  // },
  // dateRow: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   marginTop: 5,
  //   marginBottom: 20,
  // },
  // dateBtn: {
  //   backgroundColor: "#ff7a00",
  //   paddingVertical: 10,
  //   paddingHorizontal: 18,
  //   borderRadius: 10,
  // },
  // dateText: {
  //   color: "#fff",
  //   fontWeight: "bold",
  // },
  // findButton: {
  //   backgroundColor: "#ff7a00",
  //   padding: 15,
  //   borderRadius: 12,
  //   alignItems: "center",
  // },
  // findButtonText: {
  //   color: "#fff",
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },


  mainContainer: {
    backgroundColor: '#F8F9FA',
    flex: 1,
    marginBottom : 25
  },
  // --- Header Styles ---
  orangeHeader: {
    backgroundColor: '#FF5722',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingHorizontal: 20,
    paddingBottom: 80, // Space for the card to overlap
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    color: '#FFF',
    letterSpacing: 1,
  },
  logoBold: {
    fontWeight: '900',
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  headerTagline: {
    color: '#FFE0B2',
    fontSize: 16,
    marginTop: 15,
    fontWeight: '500',
  },
  // --- Card Styles ---
  cardWrapper: {
    marginTop: -60, // Overlap onto orange background
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    // Shadows
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  inputsWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F3F5',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  textInputContainer: {
    marginLeft: 12,
    flex: 1,
  },
  inputLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#ADB5BD',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  input: {
    fontSize: 16,
    color: '#212529',
    fontWeight: '700',
    padding: 0, // Removes default padding for cleaner look
  },
  verticalLine: {
    position: 'absolute',
    left: 23,
    top: 35,
    bottom: 35,
    width: 1.5,
    backgroundColor: '#DEE2E6',
    zIndex: -1,
  },
  reverseBtn: {
    position: 'absolute',
    right: 15,
    top: '50%',
    marginTop: -18,
    backgroundColor: '#FF5722',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    borderWidth: 3,
    borderColor: '#FFF',
    elevation: 5,
  },
  // --- Date Button Styles ---
  dateSection: {
    marginTop: 5,
    marginBottom: 25,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#ADB5BD',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 10,
    marginLeft: 4,
  },
  // Row 1: Today/Tomorrow
  quickDateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  quickDateBtn: {
    flex: 1,
    height: 42,
    backgroundColor: '#FFF3E0', // Very light orange
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#FFE0B2',
  },
  quickDateText: {
    color: '#FF5722',
    fontSize: 14,
    fontWeight: '700',
  },
  // Row 2: Main Display
  fullDateDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F9FA',
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    marginHorizontal: 4,
  },
  dateInfoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarIconBg: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  dateTextContainer: {
    marginLeft: 15,
  },
  dateValueText: {
    fontSize: 16,
    color: '#212529',
    fontWeight: '800',
  },
  // --- Search Button Styles ---
  findButton: {
    backgroundColor: '#FF5722',
    height: 55,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#FF5722',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  findButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.5,
  },


  
});