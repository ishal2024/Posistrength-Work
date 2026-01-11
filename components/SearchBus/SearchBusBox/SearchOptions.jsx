import React from 'react'
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import {addFromPoint , addToPoint} from '../../../redux_store/FindBusSlicer'

const SearchOptions = ({ locationData }) => {


    const { locationType } = useLocalSearchParams()
    const dispatch = useDispatch()

    const router = useRouter()
    function handleSendLocation(data) {
        if (locationType == 'from'){
            dispatch(addFromPoint(data?.name))
            router.push('/(tabs)/')
        }
        else{
            dispatch(addToPoint(data?.name))
            router.push('/(tabs)/')
        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {locationData.map((data, index) => (
                <TouchableOpacity key={data.id} style={styles.cityRow} onPress={() => handleSendLocation(data)}>
                    <View style={styles.leftContainer}>
                        <Ionicons name="business-outline" size={26} color="#FF7A00" />

                        <View style={styles.textContainer}>
                            <Text style={styles.dropName}>{data.name}</Text>
                            {/* <Text style={styles.cityName}>{data.city}</Text> */}
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
