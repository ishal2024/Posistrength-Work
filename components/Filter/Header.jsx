import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Filter & Sort</Text>

      <View style={styles.rightSection}>
        <TouchableOpacity>
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.closeBtn}>
          <MaterialIcons name="close" size={22} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    // position: "absolute",
    // top: 0,
    // left: 0,
    // right: 0,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    borderWidth : 1,
    borderColor : "white",
    borderBottomColor : "grey",
    paddingVertical: 16,
    borderTopLeftRadius : 20,
    borderTopRightRadius : 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    

    // Slight shadow for floating effect
    // elevation: 3,
    // shadowColor: "#000",
    // shadowOpacity: 0.1,
    // shadowRadius: 3,
    // zIndex: 999,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  clearText: {
    color: "#FF6B00",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 12,
  },

  closeBtn: {
    padding: 2,
  },
});
