import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginRequired from '../../components/Bookings/LoginRequired'
import { useSelector } from 'react-redux'

const bookings = () => {

  const { status } = useSelector((state) => state.user)
  const message = "Please log in to view your booking history and manage your trips. Sign in to access all your past and upcoming journeys."

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}  >

      {!status ? (
        <LoginRequired message={message} />
      ) : (
        <Text style = {{fontSize : 20 , alignSelf : "center"}}>Coming Soon </Text>
      )}





    </SafeAreaView>
  )
}

export default bookings