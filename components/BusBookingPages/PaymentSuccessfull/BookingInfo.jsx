import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {styles} from './BookingInfoStyleSheet'

export default function BookingInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Booking Information</Text>

      <View style={styles.card}>

        {/* Booking ID */}
        <View style={styles.row}>
          <Text style={styles.label}>Booking ID</Text>
          <Text style={styles.value}>BUS-98234177</Text>
        </View>

        {/* Booking Date */}
        <View style={styles.row}>
          <Text style={styles.label}>Booking Date</Text>
          <Text style={styles.value}>May 12, 2025</Text>
        </View>

        {/* Payment Method */}
        <View style={styles.row}>
          <Text style={styles.label}>Payment Method</Text>
          <Text style={styles.value}>Visa •••• 5421</Text>
        </View>

        {/* Total Paid */}
        <View style={styles.row}>
          <Text style={styles.label}>Amount Paid</Text>
          <Text style={styles.amountPaid}>₹900</Text>
        </View>

      </View>
    </View>
  );
}
