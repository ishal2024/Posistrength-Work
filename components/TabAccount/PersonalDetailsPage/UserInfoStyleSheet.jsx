import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  heading: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
    marginTop: 10,
    marginLeft: 20,
    color: "#333",
  },

  inputWrapper: {
    marginBottom: 18,
    paddingHorizontal: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
    marginBottom: 5,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
    borderWidth: 1,
    borderColor: "#bdbdbdff",
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#333",
  },

  footer: {
  position: "absolute",
  marginBottom : 35,
  bottom: 0,
  left: 0,
  right: 0,
  padding: 12,
  // backgroundColor: "#fff",
  // elevation: 10,       
  // shadowColor: "#000",  
},
 

  saveBtn: {
    backgroundColor: "#FF7A00",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  saveText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
