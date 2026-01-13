import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import {styles} from './SelectedSeatsStyleSheet'
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../../redux_store/BookingSlicer";

export default function SelectedSeats() {

    const {selectedSeats} = useSelector((state) => state.booking)
    const dispatch = useDispatch()



    return (
        <View style={styles.wrap}>
            <Text style={styles.heading}>Your Selected Seats</Text>

            {selectedSeats.map((seat) => (
                <View key={seat.id} style={styles.card}>

                    {/* Left Seat Icon */}
                    <View style={styles.seatIconBox}>
                        <Text style={styles.seatIconText}>{seat.number}</Text>
                    </View>

                    {/* Seat Info */}
                    <View style={styles.infoBox}>
                        <Text style={styles.seatType}>{seat.type}</Text>
                        <Text style={styles.deckText}>{seat.deck}</Text>
                    </View>

                    {/* Price + Remove */}
                    <View style={styles.rightBox}>
                        <Text style={styles.priceText}>₹{seat.price}</Text>

                        {/* <TouchableOpacity
                            style={styles.removeBtn}
                            onPress = {() => removeSeat(seat)}
                        >
                            <Feather name="x" size={18} color="#FF4A4A" />
                        </TouchableOpacity> */}
                    </View>

                </View>
            ))}
        </View>
    );
}
