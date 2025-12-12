import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginHorizontal : 20,
    borderRadius: 20,
    marginVertical: 20,
    elevation: 4,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ff7a00",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  reverseBtn: {
    position: "absolute",
    right: 15,
    top: 55,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 50,
    elevation: 5,
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 20,
  },
  dateBtn: {
    backgroundColor: "#ff7a00",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  dateText: {
    color: "#fff",
    fontWeight: "bold",
  },
  findButton: {
    backgroundColor: "#ff7a00",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  findButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});