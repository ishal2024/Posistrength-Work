import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import {styles} from './SpinnerStyleSheet'

export default function Spinner() {
  const moveAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveAnim, {
          toValue: 25,
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(moveAnim, {
          toValue: -25,
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.overlay}>
      <BlurView intensity={60} tint="light" style={styles.blur} />

      <Animated.View
        style={[
          styles.busContainer,
          { transform: [{ translateX: moveAnim }] },
        ]}
      >
        <Ionicons name="bus" size={65} color="#ff8800" />
      </Animated.View>
    </View>
  );
}
