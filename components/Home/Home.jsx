import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import FindBus from './FindBus'
import { SafeAreaView } from 'react-native-safe-area-context'
import PopularRoutes from '../../components/Home/PopularRoutes'
import TopOffers from '../../components/Home/TopOffers'
import LatestTravelStories from './LatestTravelStories'
import HomeHeader from './HomeHeader'

function Home () {
  {
    return (
      <SafeAreaView style={styles.container}>

        <HomeHeader />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }} // bottom tab se overlap na ho
      >
        <FindBus />
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
    flex: 1,
    backgroundColor: "",
    // padding: 20,
  },
})

export default Home