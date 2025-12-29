import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import BusHeader from './BusHeader'
import BusSeatLayout from './BusSeatLayout'
import SelectedSeats from './SelectedSeats'
import FooterSection from '../FooterSection'
import StepProgress from '../StepProgess'
import { useRouter } from 'expo-router'
import { useSelector } from 'react-redux'

const SeatSelectionPage = () => {

  const router = useRouter()
  const { selectedSeats } = useSelector((state) => state.booking)

  return (
    <SafeAreaView style = {{flex : 1 , paddingHorizontal : 15, paddingVertical : 15 , backgroundColor : "white"}}>
      <StepProgress activeSteps={["Seats"]} />
        <ScrollView style = {{backgroundColor : "white"}}>
            {/* Small Info of bus */}
            <BusHeader />

            {/* Bus Seat Layout Section */}
            <BusSeatLayout />

            {/* Selecetd Seats List section */}
            <SelectedSeats />
        </ScrollView>

        {/* Footer Section */}
        <FooterSection isDisabled={selectedSeats.length !== 0 ? false : true} text={"Continue"} onRouteChange={() => router.push('/(booking)/pickupSelection')} />
    </SafeAreaView>
  )
}

export default SeatSelectionPage