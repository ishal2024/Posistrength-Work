import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
import {styles} from './PoliciesStyleSheet'

const Policies = () => {
  return (
    <View style={styles.container}>

      {/* Policies Card */}
      <View style={styles.card}>
        {/* Terms & Conditions */}
        <TouchableOpacity style={styles.row}>
          <MaterialCommunityIcons
            name="file-document-outline"
            size={28}
            color="#FF8A00"
          />
          <View style={styles.textBox}>
            <Text style={styles.title}>Terms & Conditions</Text>
            <Text style={styles.subText}>Read our terms of service</Text>
          </View>
        </TouchableOpacity>

        {/* Privacy Policy */}
        <TouchableOpacity style={styles.row}>
          <Ionicons name="shield-outline" size={28} color="#FF8A00" />
          <View style={styles.textBox}>
            <Text style={styles.title}>Privacy Policy</Text>
            <Text style={styles.subText}>How we protect your data</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Still Need Help Section */}
      <View style={styles.helpBoxNoGradient}>
  <Text style={styles.helpHeading}>Still need help?</Text>

  <Text style={styles.helpSubText}>
    Our support team is available 24/7 to assist you
  </Text>

  <TouchableOpacity style={styles.supportBtn}>
    <Text style={styles.supportBtnText}>Contact Support</Text>
  </TouchableOpacity>
</View>

    </View>
  )
}

export default Policies