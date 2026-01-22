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
        dispatch(addData({ dataType: 'selectedSeats', data: [] }))
        dispatch(addData({ dataType: 'passengerDetails', data: {} }))
        router.push({
          pathname: '/(booking)/busDetail', params: {
            busDetail: JSON.stringify(cardData),
            routeDetail: JSON.stringify(routeDetail)
          }
        })
      }}
    >
      {/* TOP ROW */}
      <View style={styles.topRow}>
        <View>
          <Text style={styles.busName}>{cardData?.bus?.name} </Text>
          <Text style={styles.busSub}>{cardData?.bus?.layout?.layout_name}</Text>
        </View>

        <TouchableOpacity style={styles.distanceBadge}>
          <MaterialCommunityIcons
            name="star"
            size={16}
            color="#FACC15"
          />
          <Text style={styles.distanceText}>
            4.6
          </Text>
        </TouchableOpacity>
      </View>

      {/* TIME ROW */}
      <View style={styles.timeRow}>
        <View style={styles.cityBox}>
          <Text style={styles.timeText}>{cardData?.departure_formatted} </Text>
          <Text style={styles.cityText}>{routeDetail?.departure} </Text>
        </View>

        <View style={styles.durationBox}>
          <View style={styles.horizontalLine}></View>
          <View style={styles.estimatedTimeBox}>
            <Ionicons name="time-outline" size={14} color="#777" />
            {
              (() => {
                const depH = Number(cardData.departure_time.slice(0, 2));
                const depM = Number(cardData.departure_time.slice(3, 5));
                const arrH = Number(cardData.arrival_time.slice(0, 2));
                const arrM = Number(cardData.arrival_time.slice(3, 5));

                const depTotal = depH * 60 + depM;
                const arrTotal = arrH * 60 + arrM + (arrH * 60 + arrM < depTotal ? 1440 : 0);

                const diff = arrTotal - depTotal;
                const h = Math.floor(diff / 60);
                const m = diff % 60;
                return (
                  <Text style={styles.durationText}>{h}hr {m}m </Text>
                );
              })()
            }

          </View>
          <View style={styles.horizontalLine}></View>
        </View>

        <View style={styles.cityBox}>

          <Text style={styles.timeText}>{cardData.arrival_formatted}</Text>
          <Text style={styles.cityText}>{routeDetail.origin} </Text>

        </View>
      </View>

      {/* BOTTOM ROW */}
      <View style={styles.bottomRow}>
        <View style={styles.seatBox}>
          <MaterialCommunityIcons name="seat-outline" size={18} color="#059f03ff" />
          <Text style={styles.seatText}>
            {cardData?.available_seats} seats left
          </Text>
        </View>

        <View style={styles.priceBox}>
          <Text style={styles.price}>₹{cardData?.bus?.layout?.default_seater_price || cardData?.bus?.layout?.default_sleeper_price}</Text>
          <Text style={styles.perSeat}>per seat </Text>
        </View>
      </View>
    </TouchableOpacity>


  );
};

export default BusRouteCard;
