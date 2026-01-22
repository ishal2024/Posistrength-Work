import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from './FooterSectionStyleSheet'
import { useRouter } from 'expo-router'
import { Route } from "expo-router/build/Route";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginRequiredDialog from "../../../constants/Dialogs/LoginRequiredDialog";

export default function FooterSection() {
  const router = useRouter()
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const {busData} = useSelector((state) => state?.booking)


  const { status } = useSelector((state) => state.user)

  function onPressSelectSeat() {
    if (status)
      router.push('/(booking)/selectSeats')
    else {
      setShowLoginDialog(true)
      // return (
      //   <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      //     <LoginRequiredDialog />
      //   </SafeAreaView>
      // )
    }
  }

  return (
    
    <View style={styles.footerWrap}>
     {showLoginDialog &&  <LoginRequiredDialog onCancel = {setShowLoginDialog} />}
      {/* Price */}
      <View style={styles.priceBox}>
        <Text style={styles.priceText}>₹{busData?.bus?.layout?.default_seater_price || 
        busData?.bus?.bus_layout?.default_sleeper_price }</Text>
        <Text style={styles.perPerson}>per person</Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.seatBtn} onPress={() => onPressSelectSeat()}>
        <Text style={styles.btnText}>Select Seats</Text>
      </TouchableOpacity>

    </View>
  );
}
