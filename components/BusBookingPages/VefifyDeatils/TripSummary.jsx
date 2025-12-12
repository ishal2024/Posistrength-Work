import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {styles} from './TripSummaryStyleSheet'

export default function TripSummary() {
    const seats = ["B1", "B2"]
    const baseFare = 900
    const serviceFee = 5
    const discount = 5
    const total = baseFare + serviceFee - discount;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trip Summary</Text>

      <View style={styles.card}>
        {/* Bus Info */}
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="bus"
            size={32}
            color="#FF8C00"
            style={{ marginRight: 12 }}
          />
          <View>
            <Text style={styles.busName}>Express Line </Text>
            <Text style={styles.busType}>Premium Sleeper </Text>
          </View>
        </View>

        {/* Route */}
        <View style={styles.route}>
        <View style = {styles.routeSymbol}>
          <View style={styles.routeDot} />
          <View style={styles.routeLine} />
          <View style={styles.routeDot} />
          </View>

          <View style={styles.routeTextWrap}>
            <View style={styles.routeBlock}>
              <Text style={styles.routeTitle}>New York Central Station </Text>
              <Text style={styles.routeTime}>Jun 15, 07:00 AM </Text>
            </View>

            <View style={styles.routeBlock}>
              <Text style={styles.routeTitle}>Boston South Station </Text>
              <Text style={styles.routeTime}>Jun 15, 11:30 AM </Text>
            </View>
          </View>
        </View>

        {/* Selected Seats */}
        <Text style={styles.seatHeading}>Selected Seats</Text>
        <View style={styles.seatRow}>
          {seats.map((s) => (
            <View key={s} style={styles.seatTag}>
              <Text style={styles.seatTagText}>{s}</Text>
            </View>
          ))}
        </View>

        {/* Fare Breakdown */}
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>
            Base Fare ({seats.length} seats)
          </Text>
          <Text style={styles.priceValue}>₹{baseFare.toFixed(2)}</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Service Fee</Text>
          <Text style={styles.priceValue}>₹{serviceFee.toFixed(2)}</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Discount</Text>
          <Text style={styles.discountValue}>-₹{discount.toFixed(2)}</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.priceRow}>
          <Text style={styles.totalLabel}>Total Amount</Text>
          <Text style={styles.totalValue}>₹{total.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}
