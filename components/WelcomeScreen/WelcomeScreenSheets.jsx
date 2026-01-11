import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },


skip: {
   position: 'absolute', 
   top: 50, right: 20, 
   paddingVertical: 8,
   paddingHorizontal: 16,
   backgroundColor: '#FF5722', 
   borderRadius: 20, 
   fontSize: 14, 
   color: 'white', 
   fontWeight : 'bold'
},


  busImage: {
    width: 230,
    height: 230,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    marginTop: 10,
  },

  subtitle: {
    fontSize: 14,
    color: '#6F6F6F',
    textAlign: 'center',
    marginTop: 10,
    width: '85%',
    lineHeight: 20,
  },

  button: {
    backgroundColor: '#FF5722',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 40,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  createAccount: {
    color: '#FF5722',
    fontSize: 14,
    marginTop: 18,
    fontWeight: '600',
  },
});
