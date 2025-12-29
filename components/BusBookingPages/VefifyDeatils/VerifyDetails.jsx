import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import FooterSection from '../FooterSection'
import StepProgress from '../StepProgess'
import TripSummary from './TripSummary'
import PassengerDetailSection from './PassengerDetailSection'
import { useRouter } from 'expo-router'

const VerifyDetails = () => {

  const router = useRouter()

  return (
    <SafeAreaView style = {{flex : 1 , paddingHorizontal : 15 , paddingVertical : 15 , backgroundColor : "white"}}>
        <StepProgress activeSteps={['Seats' , 'Pickup' , 'Details' , 'Verify']} />
        <ScrollView style = {{backgroundColor : "white"}}>
            {/* Trip Summary Section */}
            <TripSummary />

            {/* Passenger Details Section */}
            <PassengerDetailSection />
        </ScrollView>
        <FooterSection text={"Proceed to Payment"} onRouteChange={() => router.push('/(booking)/paymentSuccess')} />
    </SafeAreaView>
  )
}

export default VerifyDetails