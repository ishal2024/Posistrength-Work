import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {styles} from './TabListStyleSheet'
import { useRouter } from "expo-router";

const MoreSection = () => {

  const router = useRouter()

  const items = [
    { title: "Offers", icon: "offer", navigate : "/(account)/offers" },
    { title: "About Us", icon: "information-outline", navigate : "/(account)/aboutUs" },
    { title: "Blogs", icon: "book-open-page-variant", navigate : "/(blogs)/blogs" },
    { title: "Rate App", icon: "star-half-full", navigate : "" },
    { title: "Help", icon: "help-circle-outline", navigate : "/(tabs)/help" },
    { title: "Account Settings", icon: "account-cog", navigate : "/(account)/accountSetting" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>More</Text>

      {items.map((item, index) => (
        <TouchableOpacity key={index}
         style={styles.row}
         onPress={() => router.push(item?.navigate)}
         >
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

export default MoreSection;