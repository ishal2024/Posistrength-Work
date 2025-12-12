import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import {styles} from './PassengerDetailBoxStyleSheet'

export default function PassengerDetailBox() {
    const seats =  [
    { id: "L1" },
    { id: "L2" },
  ];
  const [openIndex, setOpenIndex] = useState(["L1" , "L2"]); 

  function onToggle(seatId){
      if(openIndex.includes(seatId)){
        const newData = openIndex.filter((seat) => seat != seatId)
        setOpenIndex(newData)
      }
      else
        setOpenIndex([...openIndex , seatId])
  }

  return (
    <View style={styles.container}>
      {seats.map((item, index) => {
        const isOpen = openIndex.includes(item.id);

        return (
          <View key={index} style={styles.card}>
            {/* Header */}
            <TouchableOpacity
              style={styles.header}
              onPress={() =>  onToggle(item.id)}
            >
              <View style={styles.numberCircle}>
                <Text style={styles.numberText}>{index + 1}</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.passengerTitle}>Passenger {index + 1}</Text>
                <Text style={styles.seatText}>Seat {item.id}</Text>
              </View>

              <Feather
                name={isOpen ? "chevron-up" : "chevron-down"}
                size={22}
                color="#444"
              />
            </TouchableOpacity>

            {/* Body Form */}
            {isOpen && (
              <View style={styles.body}>
                {/* Full Name */}
                <View style={styles.labelRow}>
                  <MaterialCommunityIcons
                    name="account-outline"
                    size={18}
                    color="#FF8C00"
                  />
                  <Text style={styles.label}>Full Name</Text>
                </View>

                <TextInput
                  style={styles.input}
                  placeholder="Enter passenger name"
                  placeholderTextColor="#999"
                />

                {/* Contact Number */}
                <View style={styles.labelRow}>
                  <MaterialCommunityIcons
                    name="phone"
                    size={18}
                    color="#FF8C00"
                  />
                  <Text style={styles.label}>Contact Number </Text>
                </View>

                <TextInput
                  style={styles.input}
                  placeholder="Enter Contact  Number"
                  keyboardType="numeric"
                  placeholderTextColor="#999"
                />

                {/* Age + Gender Row */}
                <View style={styles.row}>
                  <TextInput
                    style={[styles.input, styles.smallInput]}
                    placeholder="Age"
                    keyboardType="numeric"
                  />

                  <TouchableOpacity
                    style={[styles.input, styles.smallInput]}
                    onPress={() => {}}
                  >
                    <Text style={{ color: item.gender ? "#000" : "#999" }}>
                      Select
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}
