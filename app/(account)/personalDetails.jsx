import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import ImageCard from '../../components/TabAccount/PersonalDetailsPage/ImageCard'
import UserDetail from '../../components/TabAccount/PersonalDetailsPage/UserDetail'
import {styles} from '../../components/TabAccount/PersonalDetailsPage/UserInfoStyleSheet'

const personalDetails = () => {
  return (
    <SafeAreaView>
        <ScrollView
        >
            <ImageCard  />
            <UserDetail />
        </ScrollView>
        <View style={styles.footer}>
    <TouchableOpacity style={styles.saveBtn}>
      <Text style={styles.saveText}>Save Changes</Text>
    </TouchableOpacity>
  </View>
    </SafeAreaView>
  )
}

export default personalDetails