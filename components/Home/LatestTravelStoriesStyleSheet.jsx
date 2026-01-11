import { Dimensions, StyleSheet } from "react-native";


const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.75; // Shows part of the next card

export const styles = StyleSheet.create({


    sectionContainer: {
    backgroundColor: '',
    paddingVertical: 20,
    marginTop: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  viewAllBtn: {
    fontSize: 14,
    color: '#FF6F00', // Matching the orange theme
    fontWeight: '600',
  },
  listPadding: {
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 10, // Space for shadow
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#FFF',
    borderRadius: 16,
    marginRight: 20,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Elevation for Android
    elevation: 5,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 140,
  },
  cardContent: {
    padding: 15,
  },
  dateText: {
    fontSize: 11,
    color: '#999',
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: 4,
  },
  cardHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginBottom: 12,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMoreText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF6F00',
    marginRight: 6,
  },
  readMoreDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FF6F00',
  },
});
