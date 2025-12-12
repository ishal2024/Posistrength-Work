import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

  container : {
     width : "100%",
     height : 180,
 
  },

  headerBg: {
    width: "100%",
    height : "100%",
    // paddingHorizontal: 20,
    // paddingTop: 40,
    // paddingBottom: 25,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    overflow: "hidden",
    
  },

  profileRow: {
    flexDirection: "row",
    marginTop : 100,
    marginLeft : 10,
  },

  avatar: {
    width: 65,
    height: 65,
    borderRadius: 40,
    marginRight: 15,
  },

  userName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },

  email: {
    fontSize: 14,
    color: "#f2f2f2",
    marginTop: 2,
  },
});
