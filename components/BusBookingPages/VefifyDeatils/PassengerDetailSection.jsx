import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from './PassengerDetailSectionStyleSheet'

export default function PassengerDetailSection() {

    const passengers = [
        {
            name: "John Doe",
            contact: "+1 202 555 0120",
            age: 28,
            gender: "Male",
        },
        {
            name: "Sarah Miller",
            contact: "+1 202 555 8910",
            age: 24,
            gender: "Female",
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Passenger Details</Text>

            {passengers.map((p, index) => (
                <View key={index} style={styles.card}>

                    {/* Icon + Name */}
                    <View style={styles.row}>
                        <MaterialCommunityIcons
                            name="account-circle"
                            size={34}
                            color="#FF8C00"
                        />
                        <View style={{ marginLeft: 12 }}>
                            <Text style={styles.nameText}>{p.name}</Text>
                            <Text style={styles.labelSmall}>Passenger {index + 1}</Text>
                        </View>
                    </View>

                    {/* Contact */}
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Contact Number </Text>
                        <Text style={styles.value}>{p.contact}</Text>
                    </View>

                    {/* Age */}
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Age </Text>
                        <Text style={styles.value}>{p.age}</Text>
                    </View>

                    {/* Gender */}
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Gender </Text>
                        <Text style={styles.value}>{p.gender}</Text>
                    </View>

                </View>
            ))}
        </View>
    );
}
