import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {SafeAreaView} from 'react-native-safe-area-context'
import {useLocalSearchParams} from 'expo-router'
import {styles} from './SearchBusLocationStyleSheet'
import SearchOptions from "./SearchOptions";
import PopularCities from "./PopularCities";
import { citiesData } from "../../../axios/homePage";
import { useSelector } from "react-redux";

export default function SearchBusLocation() {
 
    const [boardingPoints , setBoardingPoints] = useState("")
    const [locationData , setLocationData] = useState([])
    const [citiesList , setCitiesList] = useState([])
  
    const { locationType } = useLocalSearchParams()
    const {from , to} = useSelector((state) => state.search)

    function handleChangeText(){
        const filterData = locationData.filter((location) => location?.name?.toLowerCase().startsWith(boardingPoints.trim().toLowerCase()));
        setCitiesList(filterData.length ? filterData : [])
    }

    async function handleCitiesData(){
      try {
        const res = await citiesData()
        if(res?.data?.success){
          if(locationType == 'from'){
            const filterData = res?.data?.data.filter((location) => location?.name != to)
            console.log("Data is Changed of " , to)
            setLocationData(filterData)
          }
          else{
            const filterData = res?.data?.data.filter((location) => location?.name != from)
            console.log("Data is Changed of " , from)
            setLocationData(filterData)
          }
        }
      } catch (error) {
        console.log(error?.message)
      }
    }

    useEffect(() => {
      if(!locationData.length)
      handleCitiesData()
           if(boardingPoints.length != 0)
           handleChangeText()
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
        boardingPoints.length ?
          <SearchOptions locationData = {citiesList}   />
        : <PopularCities />
    }

    
    </SafeAreaView>
  );
}


