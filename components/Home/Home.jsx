import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import FindBus from './FindBus'
import { SafeAreaView } from 'react-native-safe-area-context'
import PopularRoutes from '../../components/Home/PopularRoutes'
import TopOffers from '../../components/Home/TopOffers'
import LatestTravelStories from './LatestTravelStories'
import HomeHeader from './HomeHeader'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Spinner from '@/constants/Spinner/Spinner'

function Home () {
  const userData = useSelector((state) => state?.user?.userData)
  const [loading , setLoading] = useState(false)
  
  async function check(){
    try {
      const token = await AsyncStorage.getItem('token')
      console.log("User Data :- " , userData)
      console.log("Token :- " , token)
      
    } catch (error) {
      console.log("Error :- " , error)
    }
  }

  useEffect(() => {
     check()
  } , [])

  {
    return (
      <SafeAreaView style={styles.container}>
      {loading && <Spinner />}
        <HomeHeader />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }} // bottom tab se overlap na ho
      >
        <FindBus setLoading = {setLoading} />
        <PopularRoutes />
        <TopOffers />
        <LatestTravelStories />
      </ScrollView>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: "",
    // padding: 20,
  },
})

export default Home