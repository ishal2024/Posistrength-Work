import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {styles} from './ImageCardStyleSheets'

const ImageCard = () => {
  return (
    <View style={styles.card}>
      {/* Avatar Section */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarCircle}>
          <Text style={styles.initials}>JD</Text>
        </View>

        {/* Camera Icon */}
        <TouchableOpacity style={styles.cameraIcon}>
          <Ionicons name="camera" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>john.doe@example.com</Text>
    </View>
  )
}

export default ImageCard