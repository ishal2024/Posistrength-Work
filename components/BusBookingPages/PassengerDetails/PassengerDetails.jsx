import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import StepProgress from '../StepProgess'
import PassengerDetailBox from './PassengerDetailBox'
import FooterSection from '../FooterSection'
import { useRouter } from 'expo-router'
import { useSelector } from 'react-redux'

const PassengerDetails = () => {

  const router = useRouter()
  const {selectedSeats , passengerDetails} = useSelector((state) => state.booking)

  // function handlePageChange(){
  //   selectedSeats.map((s) => {
      
  //   })
  // }

  const isDisabled = selectedSeats.every(
  seat => passengerDetails.hasOwnProperty(seat.number)
);


  return (
    <SafeAreaView style = {{flex :1, paddingHorizontal : 15, paddingVertical : 15 , backgroundColor : "white"}}>
        <StepProgress activeSteps={['Seats' , 'Pickup' , 'Details']} />
        <ScrollView>
              <PassengerDetailBox />
        </ScrollView>
        <FooterSection isDisabled={!isDisabled} text={"Continue"} onRouteChange={() => router.push('/(booking)/verification')} />
    </SafeAreaView>
  )
}

export default PassengerDetails