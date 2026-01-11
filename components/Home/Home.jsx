import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import FindBus from './FindBus'
import { SafeAreaView } from 'react-native-safe-area-context'
import PopularRoutes from '../../components/Home/PopularRoutes'
import TopOffers from '../../components/Home/TopOffers'
import LatestTravelStories from './LatestTravelStories'
import HomeHeader from './HomeHeader'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Spinner from '@/constants/Spinner/Spinner'
import {homePageData} from '../../axios/homePage'
import { addData } from '@/redux_store/HomePageSlicer'
import CustomerReviews from './CustomerReviews'
import SkeletonBlock from '../../constants/SkeletonBlock'
import { addUserData } from '@/redux_store/UserDataSlicer'

function Home () {
  const userData = useSelector((state) => state?.user?.userData)
  const dispatch = useDispatch()
  const {status , aboutData} = useSelector((state) => state?.home)
  
  // This function i made just for checking the token is set in async storage or not
  async function check(){
    try {
      const data = await AsyncStorage.getItem('user')
      console.log("User Data :- " , userData)
      console.log("Data :- " , data ? JSON.parse(data) : null)
      
    } catch (error) {
      console.log("Error :- " , error)
    }
  }

  async function handleHomePageData(){
    try {
      const res = await homePageData()
      await AsyncStorage.removeItem("token")
      const user = await AsyncStorage.getItem('user')
      const parsed = user ? JSON.parse(user) : {}
      if(res?.data?.home_about){
        dispatch(addData({
          about : res?.data?.home_about[0],
          blog : res?.data?.blog,
          customer : res?.data?.testimonials
        }))
      }

      if(parsed?.status){
        dispatch(addUserData(parsed?.userData))
      }

    } catch (error) {
      console.log(error?.message)
    }
  }

  useEffect(() => {
     check()
     if(!status)
     handleHomePageData()
  } , [])

  {
    return (
      <SafeAreaView style={styles.container}>
      {/* {loading && <Spinner />} */}
        {status ? <>
          {/* <HomeHeader /> */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }} // bottom tab se overlap na ho
      >
        <FindBus  />
        <PopularRoutes />
        <TopOffers />
        <LatestTravelStories />
        <CustomerReviews />
      </ScrollView>
    </>: <SkeletonBlock screenType = "home" />}
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: "#fff",
    // padding: 20,
  },
})

export default Home