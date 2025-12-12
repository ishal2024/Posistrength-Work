import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
    margin: 20,
  },

  avatarContainer: {
    position: "relative",
    marginBottom: 12,
  },

  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: "#FF7A00",
    justifyContent: "center",
    alignItems: "center",
  },

  initials: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "700",
  },

  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#FF7A00",
    width: 32,
    height: 32,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginTop: 5,
  },

  email: {
    fontSize: 14,
    color: "#777",
    marginTop: 3,
    textAlign : "center"
  },
});