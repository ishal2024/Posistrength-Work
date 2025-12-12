import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {styles} from './FooterSectionStyleSheet'
import {useRouter} from 'expo-router'

export default function FooterSection({text , onRouteChange}) {

  const router = useRouter()

  return (
    <View style={styles.footerWrap}>

      {/* Price Section */}
      <View style={styles.priceBox}>
        <Text style={styles.priceText}>₹800.00</Text>
        <Text style={styles.seatCount}>2 seats selected</Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.continueBtn}
        activeOpacity={0.8}
        onPress={() => onRouteChange()}
      >
        <Text style={styles.btnText} >{text}</Text>
      </TouchableOpacity>

    </View>
  );
}
