import React, { useEffect, useState } from "react";
import {  View,Text,TouchableOpacity,StyleSheet,ScrollView,Dimensions } from "react-native";
import { styles } from './BusSeatLayoutStyleSheet'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import {addData} from '../../../redux_store/BookingSlicer'

export default function BusSeatLayout() {
    const { busData, routeData , selectedSeats } = useSelector((state) => state.booking)
    const dispatch = useDispatch()

    const [selectedSeat, setSelectedSeats] = useState(selectedSeats);
    const [activeDeck, setActiveDeck] = useState("lower");
    const [seatData, setSeatData] = useState(busData?.bus?.bus_layout?.lower_deck)

    
    // console.log("SelectSeat Data", busData)
    // console.log(routeData)

    function toggleSeat(seat) {
        if (busData?.booked_seats?.includes(seat?.number)) return;

        if (selectedSeat.some((s) => s.number === seat.number)) {
            const filterSeats = selectedSeat.filter((s) => s.number !== seat.number)
            setSelectedSeats(filterSeats);
            console.log(filterSeats)
            dispatch(addData({dataType : "selectedSeats" , data : filterSeats}))
        } else {
            setSelectedSeats([...selectedSeat, {...seat , deck : activeDeck}]);
            console.log([...selectedSeat, seat])
            dispatch(addData({dataType : "selectedSeats" , data : [...selectedSeat, {...seat , deck : activeDeck}]}))
        }
    }

    function getSeatColor(seat) {
        if (busData?.booked_seats?.includes(seat?.number)) return "#FF4A4A";       
        if (selectedSeat.some((s) => s.number === seat.number))
          return "#FF8C00"; // Orange
        else
        return "#4CAF50";   // Green
    }

    return (
        // <View style={styles.seatContainer}>
        //     <View style={styles.layoutHeader}>
        //         <Text style={styles.title}>Select Your Seats</Text>

        //         <View style={styles.deckSection}>
        //             <TouchableOpacity
        //                 style={[
        //                     styles.deck,
        //                     activeDeck === "lower" && styles.activeDeck
        //                 ]}
        //                 onPress={() => {
        //                     setActiveDeck("lower")
        //                     setSeatData(busData?.bus?.bus_layout?.lower_deck)
        //                 }
        //                 }
        //             >
        //                 <Text
        //                     style={[
        //                         styles.deckText,
        //                         activeDeck === "lower" && styles.activeDeckText
        //                     ]}
        //                 >
        //                     Lower Deck
        //                 </Text>
        //             </TouchableOpacity>

        //             <TouchableOpacity
        //                 style={[
        //                     styles.deck,
        //                     activeDeck === "upper" && styles.activeDeck
        //                 ]}
        //                 onPress={() => {
        //                     setActiveDeck("upper")
        //                     setSeatData(busData?.bus?.bus_layout?.upper_deck)
        //                 }

        //                 }
        //             >
        //                 <Text
        //                     style={[
        //                         styles.deckText,
        //                         activeDeck === "upper" && styles.activeDeckText
        //                     ]}
        //                 >
        //                     Upper Deck
        //                 </Text>
        //             </TouchableOpacity>
        //         </View>
        //     </View>

        //     <View style={styles.busHeader}>
        //         <MaterialCommunityIcons name="door" size={25} color={"#3c3b3bff"} />
        //         <MaterialCommunityIcons name="steering" size={25} color={"#3c3b3bff"} />
        //         {/* <MaterialCommunityIcons name="door" size={25}/> */}
        //     </View>


        //     <View style={styles.deck}>
        //         {seatData?.map((row, rowIndex) => {
        //             const leftSeat = row[0];       // left side (usually sleeper)
        //             const rightSeats = row.slice(1); // right side (seater / sleeper)

        //             return (
        //                 <View key={rowIndex} style={styles.row}>

        //                     {/* LEFT SIDE */}
        //                     {leftSeat && leftSeat.type === 'sleeper' && (
        //                         <TouchableOpacity
        //                             style={styles.sleeperSeat}
        //                             onPress={() => toggleSeat(leftSeat)}
        //                             activeOpacity={0.7}
        //                         >
        //                             <MaterialCommunityIcons
        //                                 name="bed"
        //                                 size={28}
        //                                 color={getSeatColor(leftSeat)}
        //                             />
        //                             <Text style={styles.seatText}>{leftSeat.number}</Text>
        //                         </TouchableOpacity>
        //                     )}

        //                     {/* AISLE SPACE */}
        //                     <View style={styles.aisle} />

        //                     {/* RIGHT SIDE */}
        //                     <View style={styles.rightGroup}>
        //                         {rightSeats?.map(seat => {
        //                             const isSleeper = seat.type === 'sleeper';

        //                             return (
        //                                 <TouchableOpacity
        //                                     key={seat.number}
        //                                     style={isSleeper ? styles.sleeperSeatSmall : styles.seaterSeat}
        //                                     onPress={() => toggleSeat(seat)}
        //                                     activeOpacity={0.7}
        //                                 >
        //                                     <MaterialCommunityIcons
        //                                         name={isSleeper ? 'bed' : 'seat'}
        //                                         size={isSleeper ? 26 : 22}
        //                                         color={getSeatColor(seat)}
        //                                     />
        //                                     <Text style={styles.seatText}>{seat.number}</Text>
        //                                 </TouchableOpacity>
        //                             );
        //                         })}
        //                     </View>

        //                 </View>
        //             );
        //         })}
        //     </View>

        //     {/* Legend */}
        //     <View style={styles.legendRow}>
        //         <View style={styles.legendItem}>
        //             <View style={[styles.dot, { backgroundColor: "#4CAF50" }]} />
        //             <Text style={styles.legendLabel}>Available </Text>
        //         </View>
        //         <View style={styles.legendItem}>
        //             <View style={[styles.dot, { backgroundColor: "#FF8C00" }]} />
        //             <Text style={styles.legendLabel}>Selected </Text>
        //         </View>

        //         <View style={styles.legendItem}>
        //             <View style={[styles.dot, { backgroundColor: "#FF4A4A" }]} />
        //             <Text style={styles.legendLabel}>Booked </Text>
        //         </View>
        //     </View>
        // </View>

        <View style={styles.mainContainer}>
      <View style={styles.layoutHeader}>
        <Text style={styles.title}>Select Your Seats</Text>

        <View style={styles.deckSection}>
          <TouchableOpacity
            style={[styles.deckTab, activeDeck === "lower" && styles.activeDeckTab]}
            onPress={() => {
              setActiveDeck("lower");
              setSeatData(busData?.bus?.bus_layout?.lower_deck);
            }}
          >
            <Text style={[styles.deckText, activeDeck === "lower" && styles.activeDeckText]}>
              Lower Deck
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.deckTab, activeDeck === "upper" && styles.activeDeckTab]}
            onPress={() => {
              setActiveDeck("upper");
              setSeatData(busData?.bus?.bus_layout?.upper_deck);
            }}
          >
            <Text style={[styles.deckText, activeDeck === "upper" && styles.activeDeckText]}>
              Upper Deck
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.busFrame}>
        <View style={styles.steeringRow}>
          <MaterialCommunityIcons name="steering" size={26} color="#555" />
          <View style={styles.entranceDoor}>
            <MaterialCommunityIcons name="door-open" size={22} color="#AAA" />
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.seatsScroll} showsVerticalScrollIndicator={false}>
          {seatData?.map((row, rowIndex) => (
    <View key={`row-${rowIndex}`} style={styles.row}>
      {row.map((seat, seatIndex) => {
        const isSleeper = seat.type === 'sleeper';
        const isNone = seat.type === 'none';
        const isSelected = selectedSeats.includes(seat.number);

        // 1. Handle Aisle/Empty Space
        if (isNone) {
          return <View key={`none-${seatIndex}`} style={styles.aisleSpace} />;
        }

        return (
          <TouchableOpacity
            key={seat.number}
            onPress={() => toggleSeat(seat)}
            activeOpacity={0.7}
            style={[
              styles.seatBase,
              isSleeper ? styles.sleeperBase : styles.seaterBase,
              // Apply dynamic border color from function
              { borderColor: getSeatColor(seat) }, 
              isSelected && styles.selectedBackground
            ]}
          >
            {/* Sleeper Layout: Horizontal / Seater Layout: Vertical */}
            <View style={isSleeper ? styles.sleeperContent : styles.seaterContent}>
              <MaterialCommunityIcons
                name={isSleeper ? "bed-outline" : "seat-recline-extra"}
                size={isSleeper ? 22 : 20}
                color={getSeatColor(seat)}
              />
              
              <View style={isSleeper ? styles.sleeperTextGroup : styles.seaterTextGroup}>
                <Text style={styles.seatNumber}>{seat.number}</Text>
                {seat.price && (
                  <Text style={styles.seatPrice}>₹{seat.price}</Text>
                )}
              </View>
            </View>

            {/* Premium Sleeper Detail: Headrest Indicator */}
            {isSleeper && (
              <View 
                style={[
                  styles.sleeperHeadrest, 
                  { backgroundColor: getSeatColor(seat) }
                ]} 
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  ))}
        </ScrollView>
      </View>

      {/* Legend */}
      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#00ae1d', borderWidth: 1, borderColor: '#DDD' }]} />
          <Text style={styles.legendLabel}>Available</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FF8C00' }]} />
          <Text style={styles.legendLabel}>Selected</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FF4A4A' }]} />
          <Text style={styles.legendLabel}>Booked</Text>
        </View>
      </View>
    </View>
    )
}