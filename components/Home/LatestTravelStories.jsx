import React, { useRef } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import {styles} from './LatestTravelStoriesStyleSheet'



export default function LatestTravelStories() {
    const [index, setIndex] = React.useState(0);
    
    const stories = [
      {
        id: "1",
        title: "Exploring the Hills of Manali",
        desc: "A peaceful escape into the mountains with scenic views.",
        date: "18 Nov 2024",
        image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
      },
      {
        id: "2",
        title: "Beaches of Goa",
        desc: "Golden sand beaches and an unforgettable nightlife.",
        date: "10 Nov 2024",
        image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
      },
      {
        id: "3",
        title: " Jaipur – Pink City Tour ",
        desc: "A royal journey through palaces and colorful markets.",
        date: "1 Nov 2024",
        image: "https://images.pexels.com/photos/302263/pexels-photo-302263.jpeg",
      },
    ];

  const goNext = () => {
    if (index < stories.length - 1) setIndex(index + 1);
  };

  const goPrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const current = stories[index];

  return (
    <View style={styles.wrapper}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.heading}>Latest Travel Stories</Text>
        <Feather name="book-open" size={22} color="#fff" />
      </View>

      {/* CARD */}
      <View style={styles.sliderBox}>
        <View style={styles.card}>
          <Image source={{ uri: current.image }} style={styles.image} />

          <View style={styles.infoBox}>
            <Text style={styles.title}>{current.title}</Text>
            <Text style={styles.desc}>{current.desc}</Text>
            <Text style={styles.date}>Published: {current.date}</Text>
          </View>
        </View>

        {/* SLIDER BUTTONS */}
        <View style={styles.btnRow}>
          <TouchableOpacity
            disabled={index === 0}
            onPress={goPrev}
            style={[styles.arrowBtn, index === 0 && { opacity: 0.4 }]}
          >
            <Feather name="chevron-left" size={28} color="#f5a623" />
          </TouchableOpacity>

          <TouchableOpacity
            disabled={index === stories.length - 1}
            onPress={goNext}
            style={[
              styles.arrowBtn,
              index === stories.length - 1 && { opacity: 0.4 },
            ]}
          >
            <Feather name="chevron-right" size={28} color="#f5a623" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

