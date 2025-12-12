import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // light orange background
    paddingHorizontal: 16,
  },

  searchContainer: {
    marginTop: 10,
    marginBottom: 20,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffffff",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#FF7A00",
  },

  input: {
    marginLeft: 10,
    fontSize: 15,
    flex: 1,
    color: "#000",
  },

  heading: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FF7A00",
    marginBottom: 12,
    marginTop: 10,
  },

  cityRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#FFD4B0",
  },

  cityText: {
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
    color: "#000",
  },
});