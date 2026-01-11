import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import AboutInfo from './AboutInfo'
import AboutLinks from './AboutLinks'

const AboutUs = () => {
  return (
    <SafeAreaView style = {{backgroundColor : "#FFF"}}>
        <ScrollView style = {{backgroundColor : "#FFF"}}>
            <AboutInfo />
            <AboutLinks />
        </ScrollView>
    </SafeAreaView>
  )
}

export default AboutUs