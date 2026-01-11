import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { styles } from "./SearchBusStyleSheets";
import BusRouteCard from './BusRouteCard'

import { useLocalSearchParams, useRouter } from 'expo-router'
import Filter from '../Filter/Filter'
import BottomSheet from "../Filter/BottomSheet";
import NoBusFound from './NoBusFound'
import { useSelector } from "react-redux";
import {searchbus} from '../../axios/searchBus'
import SkeletonBlock from '../../constants/SkeletonBlock'

const SearchBus = () => {

  // const router = useRouter()
  const [isFilterOpen, setFilterOpen] = useState(false)
  const { from, to, date } = useSelector((state) => state.search)
  const [loader , setLoader] = useState(true)

  // Search Data
  const [busesData, setBusesData] = useState([])

  async function fetchBusData() {
    try {
      const data = {boarding: from, destination: to, date: date}
      // setLoader(true)
      const response = await searchbus(data)
      console.log(response?.data)
      if (response?.data?.success) {
        setBusesData(response?.data?.data?.schedules)
        setLoader(false)
      }
      else {
        setLoader(false)
      }
    } catch (error) {
       console.log(error?.message)
       setLoader(false)
    }
  }

  useEffect(() => {
    if(from && to && date){
       fetchBusData()
    }
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>

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
            <Text style={styles.routeText}>{from}</Text>

            <View style={styles.swapCircle}>
              <Text style={styles.swapIcon}>⇆</Text>
            </View>

            <Text style={styles.routeText}>{to}</Text>
          </View>

          <TouchableOpacity style={styles.dateBox}>
            <Text style={styles.dateText}>{date}</Text>
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

        {/* Skeleton Loader */}
        {loader && <SkeletonBlock />}

        {/* Bus Route Cards */}

        <View>
          {busesData.map((val) => {
            return (

              <BusRouteCard cardData={val} routeDetail={{ departure: from, origin: to }} />
            )
          })}
        </View>

        {busesData.length == 0 && <NoBusFound />}


      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchBus;
