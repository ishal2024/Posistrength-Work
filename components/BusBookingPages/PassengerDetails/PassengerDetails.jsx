import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import StepProgress from '../StepProgess'
import PassengerDetailBox from './PassengerDetailBox'
import FooterSection from '../FooterSection'
import { useRouter } from 'expo-router'

const PassengerDetails = () => {

  const router = useRouter()

  return (
    <SafeAreaView style = {{flex :1, paddingHorizontal : 15, paddingVertical : 15}}>
        <StepProgress activeSteps={['Seats' , 'Pickup' , 'Details']} />
        <ScrollView>
              <PassengerDetailBox />
        </ScrollView>
        <FooterSection text={"Continue"} onRouteChange={() => router.push('/(booking)/verification')} />
    </SafeAreaView>
  )
}

export default PassengerDetails