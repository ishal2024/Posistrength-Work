import React from "react";
import { View, Text, TouchableOpacity, StyleSheet  } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {styles} from './TabListStyleSheet'
import {useRouter} from 'expo-router'

const MyDetails = () => {

  const router = useRouter()

  const items = [
    { title: "Bookings", icon: "view-list" , navigate : "/(tabs)/bookings" },
    { title: "Personal information", icon: "account-circle-outline" , navigate : "/(account)/personalDetails"},
    // { title: "Passengers", icon: "account-group-outline" , navigate : "" },
    // { title: "IRCTC details", icon: "train" , navigate : "" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My details</Text>

      {items.map((item, index) => (
        <TouchableOpacity key={index} style={styles.row} onPress={() => router.push(item?.navigate)}>
          <View style={styles.left}>
            <MaterialCommunityIcons name={item.icon} size={24} color="#000" />
            <Text style={styles.label}>{item.title}</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={26} color="#555" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MyDetails;