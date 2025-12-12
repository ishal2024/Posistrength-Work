import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {SafeAreaView} from 'react-native-safe-area-context'
import {useLocalSearchParams} from 'expo-router'
import {styles} from './SearchBusLocationStyleSheet'
import {popularCities , cityDropPoints} from './LocationData'
import SearchOptions from "./SearchOptions";
import PopularCities from "./PopularCities";

export default function SearchBusLocation() {
 
    const [boardingPoints , setBoardingPoints] = useState("")
    const [locationData , setLocationData] = useState(null)
    // const {locationType} = useLocalSearchParams()
    // console.log(locationType)

    function onChangeText(){
        const filterData = cityDropPoints.filter((location) => location.city.toLowerCase().includes(boardingPoints?.toLowerCase()));
        setLocationData(filterData || null)
    }

    useEffect(() => {
           if(boardingPoints.length != 0)
           onChangeText()
    } , [boardingPoints])

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Section */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#FF7A00" />
          <TextInput
          value={boardingPoints}
          onChangeText={(text) => setBoardingPoints(text)}
          placeholder="Search by City"
          placeholderTextColor="#999"
          style={styles.input}
          />
        </View>

      </View>

      {
        locationData ?
          <SearchOptions locationData = {locationData}   />
        : <PopularCities />
    }

    
    </SafeAreaView>
  );
}


