import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from './BusSeatLayoutStyleSheet'
import {MaterialCommunityIcons , MaterialIcons} from '@expo/vector-icons'

export default function BusSeatLayout() {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [activeDeck, setActiveDeck] = useState("lower");

    const seatLayout = [
        [
            { id: "A1", status: "available", seatType: "window" },
            { id: "A2", status: "available", seatType: "aisle" },
            { id: "A3", status: "booked", seatType: "window" },
            { id: "A4", status: "booked", seatType: "aisle" },
        ],
        [
            { id: "B1", status: "selected", seatType: "window" },
            { id: "B2", status: "selected", seatType: "aisle" },
            { id: "B3", status: "booked", seatType: "window" },
            { id: "B4", status: "booked", seatType: "aisle" },
        ],
        [
            { id: "C1", status: "available", seatType: "window" },
            { id: "C2", status: "available", seatType: "aisle" },
            { id: "C3", status: "available", seatType: "window" },
            { id: "C4", status: "available", seatType: "aisle" },
        ],
        [
            { id: "E1", status: "available", seatType: "window" },
            { id: "E2", status: "available", seatType: "aisle" },
            { id: "E3", status: "available", seatType: "window" },
            { id: "E4", status: "available", seatType: "aisle" },
        ],
        [
            { id: "F1", status: "available", seatType: "window" },
            { id: "F2", status: "available", seatType: "aisle" },
            { id: "F3", status: "available", seatType: "window" },
            { id: "F4", status: "available", seatType: "aisle" },
        ],
        [
            { id: "G1", status: "available", seatType: "window" },
            { id: "G2", status: "available", seatType: "aisle" },
            { id: "G3", status: "available", seatType: "window" },
            { id: "G4", status: "available", seatType: "aisle" },
        ],
    ];

    function toggleSeat(seat) {
        if (seat.status === "booked") return;

        if (selectedSeats.includes(seat.id)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat.id));
        } else {
            setSelectedSeats([...selectedSeats, seat.id]);
        }
    }

    function getSeatColor(seat) {
        if (seat.status === "booked") return "#FF4A4A";       // Red
        if (selectedSeats.includes(seat.id)) return "#FF8C00"; // Orange
        return "#4CAF50";                                      // Green
    }

    return (
        <View style={styles.seatContainer}>
            <View style={styles.layoutHeader}>
                <Text style={styles.title}>Select Your Seats</Text>

                <View style={styles.deckSection}>
                    <TouchableOpacity
                        style={[
                            styles.deck,
                            activeDeck === "lower" && styles.activeDeck
                        ]}
                        onPress={() => setActiveDeck("lower")}
                    >
                        <Text
                            style={[
                                styles.deckText,
                                activeDeck === "lower" && styles.activeDeckText
                            ]}
                        >
                            Lower Deck
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.deck,
                            activeDeck === "upper" && styles.activeDeck
                        ]}
                        onPress={() => setActiveDeck("upper")}
                    >
                        <Text
                            style={[
                                styles.deckText,
                                activeDeck === "upper" && styles.activeDeckText
                            ]}
                        >
                            Upper Deck
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.busHeader}>
                <MaterialCommunityIcons name="door" size={25} color={"#3c3b3bff"}/>
                <MaterialCommunityIcons name="steering" size={25} color={"#3c3b3bff"}/>
                {/* <MaterialCommunityIcons name="door" size={25}/> */}
            </View>


            {seatLayout.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((seat) => (
                        <TouchableOpacity
                            key={seat.id}
                            style={styles.seatIconWrap}
                            onPress={() => toggleSeat(seat)}
                            activeOpacity={0.7}
                            disabled={seat.status === "booked"}   // booked cannot be tapped
                        >
                            <MaterialCommunityIcons
                                name="sofa-single"                // 👈 seat icon
                                size={32}
                                color={getSeatColor(seat)} // selected/available/booked color
                            />
                            <Text style={styles.seatLabel}>{seat.id}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}

            {/* Legend */}
            <View style={styles.legendRow}>
                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: "#4CAF50" }]} />
                    <Text style={styles.legendLabel}>Available </Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: "#FF8C00" }]} />
                    <Text style={styles.legendLabel}>Selected </Text>
                </View>

                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: "#FF4A4A" }]} />
                    <Text style={styles.legendLabel}>Booked </Text>
                </View>
            </View>
        </View>
    )
}