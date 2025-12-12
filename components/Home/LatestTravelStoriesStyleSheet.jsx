import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
    const CARD_WIDTH = width * 0.88;

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#ff8c32",
    paddingVertical: 20,
    marginVertical: 20,
    marginTop : 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 12,
    alignItems: "center",
  },

  heading: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
  },

  sliderBox: {
    alignItems: "center",
  },

  card: {
    width: CARD_WIDTH,
    backgroundColor: "#fff",
    borderRadius: 16,
    flexDirection: "row",
    overflow: "hidden",
  },

  image: {
    width: CARD_WIDTH * 0.42,
    height: 150,
  },

  infoBox: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },

  desc: {
    fontSize: 13,
    color: "#444",
  },

  date: {
    fontSize: 12,
    color: "#777",
  },

  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: CARD_WIDTH,
    marginTop: 12,
  },

  arrowBtn: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
});
