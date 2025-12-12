import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import {styles} from './BusImagesSliderStyleSheet'

export default function BusImagesSlider() {
  const images = [
    { id: 1, url: "https://picsum.photos/400/250?random=1" },
    { id: 2, url: "https://picsum.photos/400/250?random=2" },
    { id: 3, url: "https://picsum.photos/400/250?random=3" },
    { id: 4, url: "https://picsum.photos/400/250?random=4" },
  ];

  return (
    <View style={styles.photoContainer}>
      <Text style={styles.photoTitle}>Bus Photos</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollArea}
      >
        {images.map((item) => (
          <Image
            key={item.id}
            source={{ uri: item.url }}
            style={styles.photoCard}
          />
        ))}
      </ScrollView>
    </View>
  );
}
