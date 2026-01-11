import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import PersonalDetailPage from '../../components/TabAccount/PersonalDetailsPage/PersonalDetailsPage'

const personalDetails = () => {
  return (
    <SafeAreaView>
        <ScrollView
        >
           <PersonalDetailPage />
        </ScrollView>
        {/* <View style={styles.footer}>
    <TouchableOpacity style={styles.saveBtn}>
      <Text style={styles.saveText}>Save Changes</Text>
    </TouchableOpacity>
  </View> */}
    </SafeAreaView>
  )
}

export default personalDetails