import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {styles} from './ReviewsSectionStyleSheet'

export default function ReviewsSection() {
  // Example review JSON — you can replace with API data
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      date: "June 10, 2025",
      rating: 4.5,
      review:
        "Very comfortable bus with excellent service. The staff was friendly and the bus was right on time. Would definitely travel again.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      date: "June 8, 2025",
      rating: 5.0,
      review:
        "Amazing experience! The bus was clean, WiFi worked perfectly, and we arrived ahead of schedule. Highly recommended!",
    },
  ];

  // Average rating calculation
  const avgRating =
    reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length;

  return (
    <View style={styles.revContainer}>
      {/* Header Row */}
      <View style={styles.revHeaderRow}>
        <Text style={styles.revTitle}>Reviews</Text>

        <View style={styles.avgRatingBox}>
          <FontAwesome name="star" size={16} color="#FF8C00" />
          <Text style={styles.avgRatingText}>{avgRating.toFixed(1)}</Text>
        </View>
      </View>

      {/* Review Cards */}
      {reviews.map((item) => (
        <View key={item.id} style={styles.revCard}>
          
          {/* Top Row with Avatar + Name + Rating */}
          <View style={styles.revTopRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.name.charAt(0)}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>

            <View style={styles.ratingRight}>
              <FontAwesome name="star" size={16} color="#FF8C00" />
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
          </View>

          {/* Review Text */}
          <Text style={styles.reviewText}>{item.review}</Text>
        </View>
      ))}
    </View>
  );
}
