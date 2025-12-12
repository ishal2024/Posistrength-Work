import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { styles } from "./SearchBusStyleSheets";
import BusRouteCard from './BusRouteCard'
import { busData } from "./BusData"
import {useRouter} from 'expo-router'
import Filter from '../Filter/Filter'
import BottomSheet from "../Filter/BottomSheet";

const SearchBus = () => {

  const router = useRouter()
  const [isFilterOpen , setFilterOpen] = useState(false)

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
            <Text style={styles.routeText}>Kelaniya</Text>

            <View style={styles.swapCircle}>
              <Text style={styles.swapIcon}>⇆</Text>
            </View>

            <Text style={styles.routeText}>Colombo</Text>
          </View>

          <TouchableOpacity style={styles.dateBox}>
            <Text style={styles.dateText}>08th - Dec - 2024 | Sunday</Text>
          </TouchableOpacity>
        </View>

        {/* FILTER & SORT ROW */}
        <View style={styles.filterSortRow}>

        <Text style = {styles.totalBus}>15 Bus Found </Text>
          {/* Filter Button */}
          <TouchableOpacity style={styles.filterBtn} onPress={() => setFilterOpen((prev) => !prev)}>
            <Text name="filter" style={styles.filterSortText} > 
              <Feather size={18} name="filter"> </Feather> 
              Filter</Text>
          </TouchableOpacity>


        </View>
        
        {/* Bus Route Cards */}

        <View>
          {busData.map((val) => {
            return (

              <BusRouteCard cardData={val} />
            )
          })}
        </View>



      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchBus;
