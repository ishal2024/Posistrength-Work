import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from 'react'
import {styles} from './SearchBusLocationStyleSheet'
import {popularCities} from './LocationData'

const PopularCities = () => {
    return (
      <>
     <Text style={styles.heading}>POPULAR CITIES</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {popularCities.map((city, index) => (
          <View key={index} style={styles.cityRow}>
            <Ionicons name="business-outline" size={22} color="#FF7A00" />
            <Text style={styles.cityText}>{city}</Text>
            <Ionicons name="chevron-forward" size={20} color="#FF7A00" />
          </View>
        ))}
      </ScrollView>
      </>
  )
}

export default PopularCities