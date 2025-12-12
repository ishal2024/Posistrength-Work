import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet , ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {styles} from './HomeHeaderStyleSheet'


const HomeHeader = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingTop: 70 }}>
     <View style={styles.container}>
      
      {/* Left: Image + Title */}
      <View style={styles.left}>
        <Image
          source={{ uri: "https://imgs.search.brave.com/INlEiuBCnZS9in0s8mBrhMwl34uArsnZYL2PHUcUlzY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvcmVhbGlzdGlj/LWJ1cy12ZWN0b3It/aWxsdXN0cmF0aW9u/LWNvbmNlcHRfMTI1/MzIwMi0xOTE3Mi5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA" }}
          style={styles.logo}
        />
        <Text style={styles.title}>Express Bus</Text>
      </View>

      {/* Right: Bell + Profile */}
      <View style={styles.right}>
        <TouchableOpacity style={styles.bellWrap}>
          <Ionicons name="notifications-outline" size={24} color="white" />
          <View style={styles.dot} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

    </View>
    </ ScrollView >
  )
}

export default HomeHeader