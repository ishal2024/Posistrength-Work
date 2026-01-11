import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

// Small card width (like screenshot)
const CARD_WIDTH = width * 0.42;


const COLORS = {
  primary: '#FF5722', // Deep Orange
  secondary: '#FFCCBC',
  white: '#FFFFFF',
  background: '#F8F9FA',
  textDark: '#2D3436',
  textLight: '#636E72',
  accent: '#FF9F43',
  shadow: '#000000',
};

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },

    headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight : 18,
    marginBottom: 10,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },

  viewAll: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FF8C00",
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 16,
    marginBottom: 12,
    color: "#111",
  },

  card: {
    width: CARD_WIDTH,
    backgroundColor: "#fff",
    borderRadius: 14,
    marginRight: 16,
    marginBottom : 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 4,
  },

  image: {
    width: "100%",
    height: CARD_WIDTH * 0.7,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },

  route: {
    fontSize: 15,
    fontWeight: "700",
    paddingHorizontal: 10,
    marginTop: 6,
    color: "#111",
  },

  price: {
    fontSize: 14,
    fontWeight: "600",
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#333",
  },

  bookBtn: {
    backgroundColor: "#ff7a00",
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },

  bookText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  routeCard: {
    width: 200,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    marginRight: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 10,
  },
  routeImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  routeInfo: {
    padding: 12
  },
  routeName: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textDark,
  },
  routePrice: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 4,
  },
});
