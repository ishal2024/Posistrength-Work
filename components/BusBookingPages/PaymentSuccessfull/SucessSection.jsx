import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import {styles} from './SucessSectionStyleSheet'

export default function SuccessSection() {
  return (
    <View style={styles.container}>
      {/* Success Icon */}
      <View style={styles.iconCircle}>
        <Feather name="check" size={48} color="#03a321ff" />
      </View>

      {/* Title */}
      <Text style={styles.title}>Payment Successful!</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Your booking has been confirmed. Ticket details have been sent to your email.
      </Text>
    </View>
  );
}
