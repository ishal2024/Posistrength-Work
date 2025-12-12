import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import LoginRequired from '../../components/Bookings/LoginRequired'

const bookings = () => {
  return (
    <SafeAreaView style = {{flex : 1, justifyContent : "center" }}  >
      
       

        <LoginRequired />
        
     
    </SafeAreaView>
  )
}

export default bookings