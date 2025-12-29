import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { styles } from './HelpHeaderBoxStyleSheet'

const HelpHeaderBox = () => {



  return (
    
<View style={styles.headerContainer}>
  <TouchableOpacity style={styles.backBtn} >
    <Ionicons name="arrow-back" size={24} color="#fff" />
  </TouchableOpacity>

  <Text style={styles.headerText}>Help & Support</Text>

  {/* Empty view to balance center alignment */}
  <View style={styles.rightSpace} />
</View>
  )
}

export default HelpHeaderBox