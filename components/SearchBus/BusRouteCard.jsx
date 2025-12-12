import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useRouter} from 'expo-router'
import { styles } from './SearchBusStyleSheets';

const BusRouteCard = ({cardData}) => {
  
  const router = useRouter()

  return (
    <TouchableOpacity style = {styles.busCard} onPress={() => router.push('/(booking)/busDetail')} >
      
      {/* LEFT SIDE TEXT */}
      <View>
        <Text style={styles.busName}>{cardData.name}</Text>
        <Text style={styles.busSub}>{cardData.type}</Text>
        <Text style={styles.timeText}>{cardData.time}</Text>
        <Text style={styles.seatGreen}>{cardData.seatsLeft} Seats left </Text>
      </View>

      {/* RIGHT SIDE PRICE BOX */}
      <View style={styles.rightBox}>
        <Text style={styles.price}>{cardData.price}</Text>
        <Text style={styles.duration}>{cardData.duration} </Text>
      </View>

    </TouchableOpacity>
  );
};

export default BusRouteCard;
