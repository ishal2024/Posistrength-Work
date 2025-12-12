import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 25,
    alignItems: "center",
    elevation: 5,
    marginHorizontal: 20,
    marginTop : 40
    
  },

  iconCircle: {
    backgroundColor: "#FFF3E8",
    padding: 40,
    borderRadius: 100,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
    marginBottom: 10,
  },

  desc: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 30,
  },

  loginBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF6600",
    paddingVertical: 14,
    width: "100%",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 15,
  },

  loginText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 8,
  },

  createBtn: {
    backgroundColor: "#FFF5EC",
    paddingVertical: 14,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 25,
  },

  createText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "600",
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },

  footerText: {
    marginLeft: 8,
    color: "#666",
    fontSize: 13,
    textAlign: "left",
    flex: 1,
  },
});