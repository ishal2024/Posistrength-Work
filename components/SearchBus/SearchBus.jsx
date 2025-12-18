import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { styles } from "./SearchBusStyleSheets";
import BusRouteCard from './BusRouteCard'
import { busData } from "./BusData"
import { useLocalSearchParams, useRouter } from 'expo-router'
import Filter from '../Filter/Filter'
import BottomSheet from "../Filter/BottomSheet";

const SearchBus = () => {

  const router = useRouter()
  const [isFilterOpen, setFilterOpen] = useState(false)
  const { searchData } = useLocalSearchParams()

  // Search Data
  const [routeData, setRouteData] = useState([])
  const [busesData, setBusesData] = useState([])

  function setSearchData() {
    const response = JSON.parse(searchData)
    setRouteData([response.origin_city, response.destination_city, { travel_date: response?.travel_date }])
    setBusesData(response?.schedules)
  }

  useEffect(() => {
    setSearchData()
  }, [searchData])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff7f1" }}>

      {/* Bottom Sheet Fol Filter */}
      <BottomSheet visible={isFilterOpen} onClose={() => setFilterOpen(false)}>
        <Filter />
      </BottomSheet>

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}  // 👈 bottom tab se bachane ke liye
      >

        {/* TOP ROUTE CARD */}
        <View style={styles.routeCard}>


          <View style={styles.routeRow}>
            <Text style={styles.routeText}>{routeData[0]?.name}</Text>

            <View style={styles.swapCircle}>
              <Text style={styles.swapIcon}>⇆</Text>
            </View>

            <Text style={styles.routeText}>{routeData[1]?.name}</Text>
          </View>

          <TouchableOpacity style={styles.dateBox}>
            <Text style={styles.dateText}>{routeData[2]?.travel_date}</Text>
          </TouchableOpacity>
        </View>

        {/* FILTER & SORT ROW */}
        <View style={styles.filterSortRow}>

          <Text style={styles.totalBus}>{busesData.length} Bus Found </Text>
          {/* Filter Button */}
          <TouchableOpacity style={styles.filterBtn} onPress={() => setFilterOpen((prev) => !prev)}>
            <Text name="filter" style={styles.filterSortText} >
              <Feather size={18} name="filter"> </Feather>
              Filter</Text>
          </TouchableOpacity>


        </View>

        {/* Bus Route Cards */}

        <View>
          {busesData.map((val) => {
            return (

              <BusRouteCard cardData={val} routeDetail = {{departure : routeData[0]?.name , origin : routeData[1]?.name}} />
            )
          })}
        </View>



      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchBus;
