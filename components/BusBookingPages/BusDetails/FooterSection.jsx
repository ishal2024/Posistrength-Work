import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from './FooterSectionStyleSheet'
import { useRouter } from 'expo-router'
import { Route } from "expo-router/build/Route";

export default function FooterSection() {
  const router = useRouter()
  return (
    <View style={styles.footerWrap}>

      {/* Price */}
      <View style={styles.priceBox}>
        <Text style={styles.priceText}>₹45.00</Text>
        <Text style={styles.perPerson}>per person</Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.seatBtn} onPress={() => router.push('/(booking)/selectSeats')}>
        <Text style={styles.btnText}>Select Seats</Text>
      </TouchableOpacity>

    </View>
  );
}
