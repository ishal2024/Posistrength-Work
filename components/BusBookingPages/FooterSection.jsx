import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from './FooterSectionStyleSheet'
import { useRouter } from 'expo-router'
import { useSelector } from "react-redux";

export default function FooterSection({ text, onRouteChange , isDisabled }) {

  const router = useRouter()
  const { selectedSeats } = useSelector((state) => state.booking)

  const price = selectedSeats.reduce((acc, seat) => acc + Number(seat.price), 0)

  return (
    <View style={styles.footerWrap}>

      {/* Price Section */}
      <View style={styles.priceBox}>
        <Text style={styles.priceText}>₹{price}</Text>
        <Text style={styles.seatCount}>{selectedSeats.length} seats selected</Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[
          styles.continueBtn,
          isDisabled && styles.disabledBtn
        ]}
        activeOpacity={0.8}
        disabled={isDisabled}
        onPress={onRouteChange}
      >
        <Text style={styles.btnText} >{text}</Text>
      </TouchableOpacity>

    </View>
  );
}
