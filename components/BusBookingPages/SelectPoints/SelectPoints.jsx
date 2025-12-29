import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import PickAndDropPoints from '../BusDetails/PickAndDropPoints'
import StepProgress from '../StepProgess'
import FooterSection from '../FooterSection'
import { useRouter } from 'expo-router'

const SelectPoints = () => {

  const router = useRouter()

  return (
    <SafeAreaView style = {{flex :1, paddingHorizontal : 15, paddingVertical : 15 , backgroundColor : "white"}}>
        <StepProgress activeSteps={["Seats" , "Pickup"]} />
        <ScrollView style = {{backgroundColor : "white"}}>
            <PickAndDropPoints />
        </ScrollView>
        <FooterSection text={"Continue"} onRouteChange={() => router.push('/(booking)/passengerDetails')} />
    </SafeAreaView>
  )
}

export default SelectPoints