import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'
import { styles } from './SearchBusStyleSheets';
import { useDispatch } from 'react-redux';
import { addData } from '../../redux_store/BookingSlicer';

const BusRouteCard = ({ cardData, routeDetail }) => {

  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <TouchableOpacity
      style={styles.busCard}
      onPress={() => {
        dispatch(addData({dataType : 'selectedSeats' , data : []}))
        dispatch(addData({dataType : 'passengerDetails' , data : {}}))
        router.push({
        pathname: '/(booking)/busDetail', params: {
          busDetail: JSON.stringify(cardData),
          routeDetail: JSON.stringify(routeDetail)
        }
      })}}
    >
      {/* TOP ROW */}
      <View style={styles.topRow}>
        <View>
          <Text style={styles.busName}>{cardData.bus.name} </Text>
          <Text style={styles.busSub}>{cardData.bus_type}</Text>
        </View>

        <TouchableOpacity style={styles.distanceBadge}>
          <MaterialCommunityIcons
            name="map-marker-distance"
            size={16}
            color="#2563EB"
          />
          <Text style={styles.distanceText}>
            {cardData?.route?.distance} km
          </Text>
        </TouchableOpacity>
      </View>

      {/* TIME ROW */}
      <View style={styles.timeRow}>
        <View style={styles.cityBox}>
          <Text style={styles.timeText}>{cardData.departure_time.slice(0, 5)} </Text>
          <Text style={styles.cityText}>{routeDetail.departure} </Text>
        </View>

        <View style={styles.durationBox}>
          <Ionicons name="time-outline" size={14} color="#777" />
          <Text style={styles.durationText}>{cardData.route.estimated_time} </Text>
        </View>

        <View style={styles.cityBox}>
          <Text style={styles.timeText}>{cardData.arrival_time.slice(0, 5)}</Text>
          <Text style={styles.cityText}>{routeDetail.origin} </Text>
        </View>
      </View>

      {/* BOTTOM ROW */}
      <View style={styles.bottomRow}>
        <View style={styles.seatBox}>
          <MaterialCommunityIcons name="seat-outline" size={18} color="#059f03ff" />
          <Text style={styles.seatText}>
            {cardData.available_seats} seats left
          </Text>
        </View>

        <View style={styles.priceBox}>
          <Text style={styles.price}>₹{cardData.route.base_fare}</Text>
          <Text style={styles.perSeat}>per seat </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BusRouteCard;
