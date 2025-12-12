import React from 'react'
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from 'expo-router';


const SearchOptions = ({ locationData }) => {


    const { locationType, oldData } = useLocalSearchParams()
    console.log("Route Data :- ", locationType, oldData)

    const router = useRouter()
    function handleSendLocation(data) {
        if (locationType == 'from')
            router.push({
                pathname: '/(tabs)/', params: {
                    to: oldData,
                    from: JSON.stringify(data)
                }
            })
        else
            router.push({
                pathname: '/(tabs)/', params: {
                    from: oldData,
                    to: JSON.stringify(data)
                }
            })
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {locationData.map((city, index) => (
                <TouchableOpacity key={city.id} style={styles.cityRow} onPress={() => handleSendLocation(city)}>
                    <View style={styles.leftContainer}>
                        <Ionicons name="business-outline" size={26} color="#FF7A00" />

                        <View style={styles.textContainer}>
                            <Text style={styles.dropName}>{city.dropPoint}</Text>
                            <Text style={styles.cityName}>{city.city}</Text>
                        </View>
                    </View>

                    <Ionicons name="chevron-forward" size={22} color="#FF7A00" />
                </TouchableOpacity>

            ))}
        </ScrollView>
    )
}

export default SearchOptions

const styles = StyleSheet.create({
    cityRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: "#FFD4B0",  // light orange border
    },

    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    textContainer: {
        marginLeft: 12,
    },

    cityName: {

        fontSize: 12,
        marginTop: 2,
        color: "#464646ff",   // orange theme for subtitle
        opacity: 0.8,
    },

    dropName: {
        fontSize: 15,
        fontWeight: "600",
        color: "#222",
    },
});
