import React from "react";
import { View, Text, TextInput,  TouchableOpacity, ScrollView } from "react-native";
import HelpHeaderBox from "./HelpHeaderBox";
import FAQ from "./FAQ";
import {SafeAreaView} from 'react-native-safe-area-context'
import GetHelp from "./GetHelp";
import Policies from "./Policies";

const Help = () => {
  return (
    <SafeAreaView>
       <ScrollView
       showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }}
       >
        <HelpHeaderBox />
        <FAQ />
        <GetHelp />
        <Policies />
       </ScrollView>
       </SafeAreaView>
  )
}

export default Help