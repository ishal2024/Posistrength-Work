import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from './PassengerDetailBoxStyleSheet'
import { useDispatch, useSelector } from "react-redux";
import {addData} from '../../../redux_store/BookingSlicer'

export default function PassengerDetailBox() {

  const { selectedSeats , passengerDetails } = useSelector((state) => state.booking)
  const dispatch = useDispatch()
  
  const options = ['Male', 'Female', 'Other'];

  const [open, setOpen] = useState(false);
  const [passengerDetail , setPassengerDetails] = useState(passengerDetails)
  const [openIndex, setOpenIndex] = useState(selectedSeats.map((s) => s?.number));

  function onToggle(seatId) {
    if (openIndex.includes(seatId)) {
      const newData = openIndex.filter((seat) => seat != seatId)
      setOpenIndex(newData)
    }
    else
      setOpenIndex([...openIndex, seatId])
  }

function handlePassengerDetails(seatNumber, inputKey, inputValue) {
  setPassengerDetails(prev => {
    const updatedState = {
      ...prev,
      [seatNumber]: {
        ...prev[seatNumber],
        [inputKey]: inputValue,
        "seatNumber" : seatNumber
      }
    };

    dispatch(addData({dataType : 'passengerDetails' , data : updatedState})); 

    return updatedState;
  });
}

  console.log(passengerDetail)

  return (
    <View style={styles.container}>
      {selectedSeats.map((item, index) => {
        const isOpen = openIndex.includes(item?.number);

        return (
          <View key={index} style={styles.card}>
            {/* Header */}
            <TouchableOpacity
              style={styles.header}
              onPress={() => onToggle(item?.number)}
            >
              <View style={styles.numberCircle}>
                <Text style={styles.numberText}>{item?.number} </Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.passengerTitle}>Passenger {index + 1} </Text>
                <Text style={styles.seatText}>Seat {item?.number} </Text>
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
                value={passengerDetail[item?.number]?.name || ""}
                  style={styles.input}
                  placeholder="Enter passenger name"
                  placeholderTextColor="#999"
                  onChangeText={(text) => handlePassengerDetails(item?.number , "name" , text)}
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
                value={passengerDetail[item?.number]?.contact || ""}
                  style={styles.input}
                  placeholder="Enter Contact  Number"
                  keyboardType="numeric"
                  placeholderTextColor="#6b6a6a"
                  onChangeText={(text) => handlePassengerDetails(item?.number , "contact" , text)}
                />

                {/* Age + Gender Row */}
                <View style={styles.row}>
                  <TextInput
                  value={passengerDetail[item?.number]?.age || ""}
                    style={[styles.input, styles.smallInput]}
                    placeholder="Enter Age"
                    keyboardType="numeric"
                    placeholderTextColor="#6b6a6a"
                    onChangeText={(text) => handlePassengerDetails(item?.number , "age" , text)}
                  />

                  <TextInput
                  value={passengerDetail[item?.number]?.gender || ""}
                    style={[styles.input, styles.smallInput]}
                    placeholder="Enter Gender"
                    placeholderTextColor="#6b6a6a"
                    onChangeText={(text) => handlePassengerDetails(item?.number , "gender" , text)}
                    
                  />
                </View>
               </View>
            )}
          </View>
        );
      })}
    </View>
  );
}
