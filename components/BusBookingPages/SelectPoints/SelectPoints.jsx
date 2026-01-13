import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import PickAndDropPoints from '../BusDetails/PickAndDropPoints'
import StepProgress from '../StepProgess'
import FooterSection from '../FooterSection'
import { useRouter } from 'expo-router'
import { useSelector } from 'react-redux'

const SelectPoints = () => {

  const router = useRouter()
  const {busData , locations} = useSelector((state) => state.booking)

  // console.log(busData?.boarding_points_list)
  console.log("Boarding Points :- " , locations?.pickupPoint)
  console.log("Dropping Points :- " , locations?.dropoffPoint)
  let isDisabled = false
  if(!locations?.pickupPoint?.location || !locations.dropoffPoint?.location)
    isDisabled = true

  return (
    <SafeAreaView style = {{flex :1, paddingHorizontal : 15, paddingVertical : 15 , backgroundColor : "white"}}>
        <StepProgress activeSteps={["Seats" , "Pickup"]} />
        <ScrollView style = {{backgroundColor : "white"}}>
            <PickAndDropPoints boardingPoints={busData?.boarding_points_list} droppingPoints={busData?.dropping_points_list} />
        </ScrollView>
        <FooterSection text={"Continue"} onRouteChange={() => router.push('/(booking)/passengerDetails')} isDisabled={isDisabled} />
    </SafeAreaView>
  )
}

export default SelectPoints