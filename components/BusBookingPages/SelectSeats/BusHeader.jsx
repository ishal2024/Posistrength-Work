import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {styles} from './BusHeaderStyleSheet'

export default function BusHeader() {
  return (
    <View style={styles.cardWrap}>
      {/* Bus Icon */}
      <MaterialCommunityIcons
        name="bus"
        size={32}
        color="#FF8C00"   // orange
        style={{ marginRight: 12 }}
      />

      {/* Text Section */}
      <View>
        <Text style={styles.title}>Express Lines</Text>

        <View style={styles.subRow}>
          <Text style={styles.subText}>Premium Sleeper </Text>
          <Text style={styles.dot}> • </Text>
          <Text style={styles.subText}>Jun 15, 07:00 AM </Text>
        </View>
      </View>
    </View>
  );
}
