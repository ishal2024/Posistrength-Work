import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'expo-checkbox'

const BusType = () => {

    const [selected, setSelected] = useState([])
    const options = ["AC Sleeper", "Non-AC Sleeper","AC Seater","Non-AC Seater","Volvo", "Multi-Axle",];

    function toggle(item) {
        if (selected.includes(item)) {
            setSelected(selected.filter((i) => i !== item));
        } else {
            setSelected([...selected, item]);
        }
    }


        return (
            <View style={styles.container}>
                {options.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.row}
                        onPress={() => toggle(item)}
                        activeOpacity={0.8}
                    >
                        <Checkbox
                            value={selected.includes(item)}
                            onValueChange={() => toggle(item)}
                            color={selected.includes(item) ? "#ff6b00" : undefined}
                            style={styles.checkbox}
                        />
                        <Text style={styles.label}>{item}  </Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }


    export default BusType

    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: 10,
            paddingHorizontal : 15
        },

        row: {
            width: "48%",
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
        },

        checkbox: {
            marginRight: 8,
            borderColor: "#ff6b00",
        },

        label: {
            fontSize: 15,
            color: "#333",
        },
    })