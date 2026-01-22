import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from "react-native";
import { styles } from './BusSeatLayoutStyleSheet'
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { addData } from '../../../redux_store/BookingSlicer'

export default function BusSeatLayout() {
  const { busData, routeData, selectedSeats } = useSelector((state) => state.booking)
  const dispatch = useDispatch()

  const [selectedSeat, setSelectedSeats] = useState(selectedSeats);
  const [activeDeck, setActiveDeck] = useState("lower_deck");
  const [seatData, setSeatData] = useState(busData?.bus?.layout?.lower_deck)


  // console.log("SelectSeat Data", busData)
  // console.log(routeData)

  function toggleSeat(seat , seatIndex , rowIndex) {
    if (busData?.booked_seats?.includes(seat?.number)) return;

    if (selectedSeat.some((s) => s.number === seat.number)) {
      const filterSeats = selectedSeat.filter((s) => s.number !== seat.number)
      setSelectedSeats(filterSeats);
      console.log(filterSeats)
      dispatch(addData({ dataType: "selectedSeats", data: filterSeats }))
    } else {

      const prevSeat =
        busData?.bus?.layout?.[activeDeck]?.[rowIndex]?.[seatIndex - 1]?.number;
      const nextSeat =
        busData?.bus?.layout?.[activeDeck]?.[rowIndex]?.[seatIndex + 1]?.number;
      if (
        busData?.booked_seat_gender?.[prevSeat] === "female" ||
        busData?.booked_seat_gender?.[nextSeat] === "female"
      ) {
        setSelectedSeats([...selectedSeat, { ...seat, deck: activeDeck , gender : "female" }]);
        dispatch(addData({ dataType: "selectedSeats", data: [...selectedSeat, { ...seat, deck: activeDeck , gender : "female" }] }))
        return
      }

      if (
        busData?.booked_seat_gender?.[prevSeat] === "male" ||
        busData?.booked_seat_gender?.[nextSeat] === "male"
      ) {
        setSelectedSeats([...selectedSeat, { ...seat, deck: activeDeck , gender : "male" }]);
        dispatch(addData({ dataType: "selectedSeats", data: [...selectedSeat, { ...seat, deck: activeDeck , gender : "male" }] }))
        return
      }
      
      else{
        setSelectedSeats([...selectedSeat, { ...seat, deck: activeDeck }]);
           dispatch(addData({ dataType: "selectedSeats", data: [...selectedSeat, { ...seat, deck: activeDeck }] }))
      }

    }
  }

  function getSeatColor(seat, seatIndex, rowIndex) {
    const prevSeat =
      busData?.bus?.layout?.[activeDeck]?.[rowIndex]?.[seatIndex - 1]?.number;
    const nextSeat =
      busData?.bus?.layout?.[activeDeck]?.[rowIndex]?.[seatIndex + 1]?.number;

    if (busData?.booked_seats?.includes(seat?.number)) return "#FF4A4A";

    if (selectedSeat.some((s) => s.number === seat.number)) return "#FF8C00";

    if (
      busData?.booked_seat_gender?.[prevSeat] === "female" ||
      busData?.booked_seat_gender?.[nextSeat] === "female"
    ) {
      return "#ff4bed";
    }

    if (
      busData?.booked_seat_gender?.[prevSeat] === "male" ||
      busData?.booked_seat_gender?.[nextSeat] === "male"
    ) {
      return "#0c26ee";
    }



    return "#4CAF50";
  }


  return (

    <View style={styles.mainContainer}>
      <View style={styles.layoutHeader}>
        <Text style={styles.title}>Select Your Seats</Text>

        <View style={styles.deckSection}>
          <TouchableOpacity
            style={[styles.deckTab, activeDeck === "lower_deck" && styles.activeDeckTab]}
            onPress={() => {
              setActiveDeck("lower_deck");
              setSeatData(busData?.bus?.layout?.lower_deck);
            }}
          >
            <Text style={[styles.deckText, activeDeck === "lower_deck" && styles.activeDeckText]}>
              Lower Deck
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.deckTab, activeDeck === "upper_deck" && styles.activeDeckTab]}
            onPress={() => {
              setActiveDeck("upper_deck");
              setSeatData(busData?.bus?.layout?.has_upper_deck && busData?.bus?.layout?.upper_deck);
            }}
          >
            <Text style={[styles.deckText, activeDeck === "upper_deck" && styles.activeDeckText]}>
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
                const isBookedGender = busData?.booked_seat_gender?.[seat?.number]

                // 1. Handle Aisle/Empty Space
                if (isNone) {
                  return <View key={`none-${seatIndex}`} style={styles.aisleSpace} />;
                }

                // return (
                {
                  return !isBookedGender ? (<TouchableOpacity
                    key={seat.number}
                    onPress={() => toggleSeat(seat, seatIndex, rowIndex)}
                    activeOpacity={0.7}
                    style={[
                      styles.seatBase,
                      isSleeper ? styles.sleeperBase : styles.seaterBase,
                      // Apply dynamic border color from function
                      { borderColor: getSeatColor(seat, seatIndex, rowIndex) },
                      isSelected && styles.selectedBackground
                    ]}
                  >
                    {/* Sleeper Layout: Horizontal / Seater Layout: Vertical */}
                    <View style={isSleeper ? styles.sleeperContent : styles.seaterContent}>
                      <MaterialCommunityIcons
                        name={isSleeper ? "bed-outline" : "seat-recline-extra"}
                        size={isSleeper ? 22 : 20}
                        color={getSeatColor(seat, seatIndex, rowIndex)}
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
                          { backgroundColor: getSeatColor(seat, seatIndex, rowIndex) }
                        ]}
                      />
                    )}
                  </TouchableOpacity>) :
                    (
                      <View
                        style={[
                          styles.seatBase,
                          isSleeper ? styles.sleeperBase : styles.seaterBase,
                          styles.bookedSeat
                        ]}
                      >
                        {/* Diagonal Cross Lines */}
                        <View style={styles.crossLine1} />
                        <View style={styles.crossLine2} />

                        {/* Centered Gender Icon with a small background to break the lines */}
                        <View style={styles.genderIconContainer}>
                          <Text style={[
                            styles.genderIcon,
                            // { color: isBookedGender === "female" ? "#E91E63" : "#0c26ee" }
                            { color: "#D1D1D1" }
                          ]}>
                            <FontAwesome
                              name={isBookedGender === "female" ? "female" : "male"}
                              size={20}
                            >

                            </FontAwesome>
                          </Text>
                        </View>
                      </View>
                    )

                }
                // );
              })}
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Legend */}
      <View style={styles.legendSection}>
        {/* First Row: Status */}
        <View style={styles.legendRow}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#00ae1d' }]} />
            <Text style={styles.legendLabel}>Available</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#FF8C00' }]} />
            <Text style={styles.legendLabel}>Selected</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#D1D1D1' }]} />
            <Text style={styles.legendLabel}>Booked</Text>
          </View>
        </View>

        {/* Second Row: Gender */}
        <View style={styles.legendRow}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#ff4bed' }]} />
            <Text style={styles.legendLabel}>Female (Reserved) </Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#0c26ee' }]} />
            <Text style={styles.legendLabel}>Male (Reserved) </Text>
          </View>
          {/* Empty view to maintain 3-column alignment if needed */}
          <View style={styles.legendItem} />
        </View>
      </View>
    </View>
  )
}