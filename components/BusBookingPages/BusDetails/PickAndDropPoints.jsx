import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import {styles} from './PickAndDropPointsStyleSheet'
import { useDispatch, useSelector } from "react-redux";
import {addBoardingPoints , addDroppingPoints} from "../../../redux_store/BookingSlicer"

export default function PickAndDropPoints({boardingPoints , droppingPoints}) {

  const {locations} = useSelector((state) => state?.booking)
  const dispatch = useDispatch()
  const [selectedBoarding, setSelectedBoarding] = useState(locations.pickupPoint ? locations.pickupPoint : {});
  const [selectedDropping, setSelectedDropping] = useState(locations.dropoffPoint ? locations.dropoffPoint : {});

  function handleDroppingPointSelection(item){
       setSelectedDropping(item)
       dispatch(addDroppingPoints(item))
  }

  function handleBoardingPointSelection(item){
       setSelectedBoarding(item)
       dispatch(addBoardingPoints(item))
  }


  return (
    <View style={styles.pointContainer}>
      {/* Pickup Points */}
      <Text style={styles.pointHeading}>Boarding Points</Text>

      {boardingPoints.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.pointRow}
          onPress={() => handleBoardingPointSelection(item)}
          activeOpacity={0.7}
        >
          {/* Radio */}
          <View style={styles.radioWrap}>
            {selectedBoarding?.location === item.location ? (
              <Feather name="check-circle" size={20} color="#FF8C00" />
            ) : (
              <Feather name="circle" size={20} color="#999" />
            )}
          </View>

          {/* Text Info */}
          <View style={styles.pointTextArea}>
            <Text style={styles.pointTitle}>{item.location}</Text>
            <Text style={styles.pointSub}>{item.landmark}</Text>
          </View>

          {/* Time */}
          <Text style={styles.pointTime}>3000 min</Text>
        </TouchableOpacity>
      ))}

      {/* Drop-off Points */}
      <Text style={[styles.pointHeading, { marginTop: 22 }]}>
        Dropping Points
      </Text>

      {droppingPoints.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.pointRow}
          onPress={() => handleDroppingPointSelection(item)}
          activeOpacity={0.7}
        >
          {/* Radio */}
          <View style={styles.radioWrap}>
            {selectedDropping?.location === item.location ? (
              <Feather name="check-circle" size={20} color="#FF8C00" />
            ) : (
              <Feather name="circle" size={20} color="#999" />
            )}
          </View>

          {/* Text Info */}
          <View style={styles.pointTextArea}>
            <Text style={styles.pointTitle}>{item.location}</Text>
            <Text style={styles.pointSub}>{item.landmark}</Text>
          </View>

             
           <Text style={styles.pointTime}>{item.time}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
