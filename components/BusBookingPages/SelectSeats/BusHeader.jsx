import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {styles} from './BusHeaderStyleSheet'
import { useSelector } from "react-redux";

export default function BusHeader() {

  const {busData} = useSelector((state) => state.booking)

  return (
    <View style={styles.cardWrap}>
      {/* Bus Icon */}
      <MaterialCommunityIcons
        name="bus"
        size={32}
        color="#FF8C00"   // orange
        style={{ marginRight: 12 }}
      />

      {/* Text Section */}
      <View>
        <Text style={styles.title}>{busData?.bus?.name}</Text>

        <View style={styles.subRow}>
          <Text style={styles.subText}>{busData?.bus?.layout?.layout_name} </Text>
          {/* <Text style={styles.dot}> • </Text>
          <Text style={styles.subText}>{busData?.route?.route_name} </Text> */}
        </View>
      </View>
    </View>
  );
}
