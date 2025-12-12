import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import {styles} from './SelectedSeatsStyleSheet'

export default function SelectedSeats() {

    const seats = [
        { id: "B1", seatType: "Window Seat", deck: "Lower Deck", price: 45 },
        { id: "B2", seatType: "Aisle Seat", deck: "Lower Deck", price: 45 },
    ];

    return (
        <View style={styles.wrap}>
            <Text style={styles.heading}>Your Selected Seats</Text>

            {seats.map((seat) => (
                <View key={seat.id} style={styles.card}>

                    {/* Left Seat Icon */}
                    <View style={styles.seatIconBox}>
                        <Text style={styles.seatIconText}>{seat.id}</Text>
                    </View>

                    {/* Seat Info */}
                    <View style={styles.infoBox}>
                        <Text style={styles.seatType}>{seat.seatType}</Text>
                        <Text style={styles.deckText}>{seat.deck}</Text>
                    </View>

                    {/* Price + Remove */}
                    <View style={styles.rightBox}>
                        <Text style={styles.priceText}>₹{seat.price}</Text>

                        <TouchableOpacity
                            style={styles.removeBtn}
                            
                        >
                            <Feather name="x" size={18} color="#FF4A4A" />
                        </TouchableOpacity>
                    </View>

                </View>
            ))}
        </View>
    );
}
