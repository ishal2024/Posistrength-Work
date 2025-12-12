import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import {styles} from './PickAndDropPointsStyleSheet'

export default function PickAndDropPoints() {
  const [selectedPickup, setSelectedPickup] = useState(null);
  const [selectedDrop, setSelectedDrop] = useState(null);

  // Example JSON data (later you can replace with API data)
  const pickupPoints = [{
      id: 1,
      title: "New York Central Station",
      sub: "Gate 5, Platform B",
      time: "07:00 AM",
    },
    {
      id: 2,
      title: "Grand Central Terminal",
      sub: "Bus Bay 3",
      time: "07:15 AM",
    },
  ];

  const dropPoints = [
    {
      id: 1,
      title: "Boston South Station",
      sub: "Main Terminal",
      time: "11:30 AM",
    },
    {
      id: 2,
      title: "Boston Back Bay Station",
      sub: "Exit Gate 2",
      time: "11:45 AM",
    },
  ];

  return (
    <View style={styles.pointContainer}>
      {/* Pickup Points */}
      <Text style={styles.pointHeading}>Pickup Points</Text>

      {pickupPoints.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.pointRow}
          onPress={() => setSelectedPickup(item.id)}
          activeOpacity={0.7}
        >
          {/* Radio */}
          <View style={styles.radioWrap}>
            {selectedPickup === item.id ? (
              <Feather name="check-circle" size={20} color="#FF8C00" />
            ) : (
              <Feather name="circle" size={20} color="#999" />
            )}
          </View>

          {/* Text Info */}
          <View style={styles.pointTextArea}>
            <Text style={styles.pointTitle}>{item.title}</Text>
            <Text style={styles.pointSub}>{item.sub}</Text>
          </View>

          {/* Time */}
          <Text style={styles.pointTime}>{item.time}</Text>
        </TouchableOpacity>
      ))}

      {/* Drop-off Points */}
      <Text style={[styles.pointHeading, { marginTop: 22 }]}>
        Drop-off Points
      </Text>

      {dropPoints.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.pointRow}
          onPress={() => setSelectedDrop(item.id)}
          activeOpacity={0.7}
        >
          {/* Radio */}
          <View style={styles.radioWrap}>
            {selectedDrop === item.id ? (
              <Feather name="check-circle" size={20} color="#FF8C00" />
            ) : (
              <Feather name="circle" size={20} color="#999" />
            )}
          </View>

          {/* Text Info */}
          <View style={styles.pointTextArea}>
            <Text style={styles.pointTitle}>{item.title}</Text>
            <Text style={styles.pointSub}>{item.sub}</Text>
          </View>

             
           <Text style={styles.pointTime}>{item.time}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
