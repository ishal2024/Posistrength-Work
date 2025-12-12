import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff7a00",
    padding: 20,
    paddingTop: 40,
  },

  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 30,
  },

  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    color: "#333",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  card: {
    width: "30%",
    backgroundColor: "#fff",
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  iconCircle: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#FFF3E5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  cardText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
});