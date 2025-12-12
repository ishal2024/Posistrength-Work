import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  category: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 15,
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  question: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    flex: 1,
    paddingRight: 10,
  },
  answer: {
    marginTop: 10,
    fontSize: 14,
    color: "#767676ff",
    lineHeight: 20,
  },
});