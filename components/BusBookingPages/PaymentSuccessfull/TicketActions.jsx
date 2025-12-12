import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import {styles} from './TicketActionsStyleSheet'
import { useRouter } from "expo-router";

export default function TicketActions() {

    const router = useRouter()

  return (
    <View style={styles.container}>

      {/* View Ticket */}
      <TouchableOpacity style={styles.mainBtn}>
        <Text style={styles.mainBtnText}>View Ticket</Text>
      </TouchableOpacity>

      {/* Download Ticket */}
      <TouchableOpacity style={styles.outlineBtn}>
        <Text style={styles.outlineBtnText}>Download PDF Ticket</Text>
      </TouchableOpacity>

      {/* Back to Home */}
      <TouchableOpacity style={styles.outlineBtn}
      onPress={() => router.push('/(tabs)/')}
      >
        <Text style={styles.outlineBtnText}>Back to Home</Text>
      </TouchableOpacity>

      {/* Share Section */}
      <Text style={styles.shareLabel}>Share your trip details</Text>

      <View style={styles.iconRow}>
        <View style={styles.iconCircle}>
          <FontAwesome name="whatsapp" size={24} color="#FF8C00" />
        </View>
        <View style={styles.iconCircle}>
          <FontAwesome name="facebook" size={24} color="#FF8C00" />
        </View>
        <View style={styles.iconCircle}>
          <FontAwesome name="twitter" size={24} color="#FF8C00" />
        </View>
        <View style={styles.iconCircle}>
          <Feather name="mail" size={24} color="#FF8C00" />
        </View>
      </View>

    </View>
  );
}
