import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
    color: "#333",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical : 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
  },

  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#FFF1E2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  textBox: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 2,
  },

  phone: {
    fontSize: 15,
    color: "#FF8A00",
    fontWeight: "600",
    marginBottom: 3,
  },

  email: {
    fontSize: 15,
    color: "#FF8A00",
    fontWeight: "600",
    marginBottom: 3,
  },

  subText: {
    fontSize: 13,
    color: "#777",
  },

  address: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },

  socialCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },

  socialItem: {
    alignItems: "center",
    width: "25%",
  },

  socialCircle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#FFF1E2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  socialText: {
    fontSize: 13,
    color: "#555",
  },
});