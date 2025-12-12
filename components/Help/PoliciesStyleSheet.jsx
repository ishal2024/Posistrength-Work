import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF7EE",
    flex: 1,
  },

  /* Card */
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  textBox: {
    marginLeft: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 2,
  },

  subText: {
    fontSize: 13,
    color: "#777",
  },

  /* Help Box */
  helpBox: {
    borderRadius: 15,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  helpHeading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 10,
  },

  helpSubText: {
    fontSize: 14,
    color: "#FFE7D0",
    textAlign: "center",
    marginBottom: 20,
  },

  supportBtn: {
    backgroundColor: "#fff",
    width: "75%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  supportBtnText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },
  
  helpBoxNoGradient: {
  backgroundColor: "#FF6A00",   // solid orange color
  borderRadius: 15,
  paddingVertical: 30,
  paddingHorizontal: 20,
  alignItems: "center",
},

});