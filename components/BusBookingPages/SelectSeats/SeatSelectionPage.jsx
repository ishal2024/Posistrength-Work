import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import BusHeader from './BusHeader'
import BusSeatLayout from './BusSeatLayout'
import SelectedSeats from './SelectedSeats'
import FooterSection from '../FooterSection'
import StepProgress from '../StepProgess'
import { useRouter } from 'expo-router'

const SeatSelectionPage = () => {

  const router = useRouter()

  return (
    <SafeAreaView style = {{flex : 1 , paddingHorizontal : 15, paddingVertical : 15}}>
      <StepProgress activeSteps={["Seats"]} />
        <ScrollView >
            {/* Small Info of bus */}
            <BusHeader />

            {/* Bus Seat Layout Section */}
            <BusSeatLayout />

            {/* Selecetd Seats List section */}
            <SelectedSeats />
        </ScrollView>

        {/* Footer Section */}
        <FooterSection text={"Continue"} onRouteChange={() => router.push('/(booking)/pickupSelection')} />
    </SafeAreaView>
  )
}

export default SeatSelectionPage