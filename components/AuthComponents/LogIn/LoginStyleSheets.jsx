import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7f1',
    paddingHorizontal: 25,
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
    color: '#1a1a1a',
  },

  subTitle: {
    textAlign: 'center',
    color: '#b57c5d',
    marginBottom: 25,
  },

  label: {
    fontSize: 14,
    color: '#444',
    marginBottom: 6,
    marginTop: 12,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#878382',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    backgroundColor: '#fff',
  },

  passwordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  forgot: {
    fontSize: 12,
    color: '#ec3b10',
  },

  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderColor: '#878382',
    borderWidth: 2,
    borderRadius: 3,
    marginRight: 10,
  },

  checkText: {
    color: '#555',
  },

  loginBtn: {
    backgroundColor: '#ff7a00',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26,
    marginTop: 5,
  },

  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },

  or: {
    marginHorizontal: 12,
    color: '#777',
  },

  googleBtn: {
    height: 50,
    backgroundColor: '#e8e8e8',
    borderRadius: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'center',
    paddingHorizontal: 20,
  },

  googleIcon: {
    width: 30,
    height: 30,
    marginRight: 12,
  },

  googleText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },

  createAccount: {
    textAlign: 'center',
    color: '#ff7a00',
    marginTop: 28,
    fontWeight: '600',
  },
});
