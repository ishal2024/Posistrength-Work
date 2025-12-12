import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal : 25,
    paddingTop : 25,
    backgroundColor: '#fff7f1',
    paddingBottom : 80
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    color: "#111",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 10,
  },

  label: {
    fontSize: 14,
    color: "#555",
    marginTop: 10,
  },

  input: {
  
    
    marginTop: 5,
    height: 48,
    borderWidth: 1,
    borderColor: '#878382',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    backgroundColor: '#fff',
  },

  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#878382',
     borderRadius: 10,
    paddingRight: 15,
    marginTop: 5,
  },

  passwordInput: {
    flex: 1,
    fontSize: 14,
    
    
    height: 48,
    paddingHorizontal: 15,
  },

  eyeIcon: {
    fontSize: 18,
    color: "#777",
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 10,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderColor: '#878382',
    borderWidth: 2,
    borderRadius: 3,
    marginRight: 10,
  },

  checkboxText: {
    fontSize: 13,
    color: "#555",
    flex: 1,
  },

  link: {
    color: "orange",
    textDecorationLine: "underline",
  },

  signupBtn: {
    backgroundColor: "orange",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },

  signupBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },

  orText: {
    marginHorizontal: 10,
    color: "#777",
  },

  googleBtn: {
    flexDirection: "row",
    backgroundColor: "#eee",
    padding: 14,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  googleIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },

  googleText: {
    fontSize: 15,
  },

  bottomText: {
    textAlign: "center",
    marginTop: 10,
    color: "#777",
  },

  signInLink: {
    color: "orange",
    fontWeight: "bold",
  },
});