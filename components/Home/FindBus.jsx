import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { styles } from './FindBusStyleSheet'
import { router, useLocalSearchParams, useRouter } from "expo-router";

const FindBus = () => {

    const router = useRouter()
    const params = useLocalSearchParams()

    console.log(params)
    const [boarding, setBoarding] = useState(params.from ? JSON.parse(params.from) : "")
    const [destination, setDestination] = useState(params.to ? JSON.parse(params.to) : "")

    const [showCalender, setShowCalender] = useState(false)
    const [inputDate, setInputDate] = useState(null)


    function onReverse() {
        console.log(boarding)
        console.log(destination)
        const temp = boarding
        setBoarding(destination)
        setDestination(temp)
    }

    function onClickToday() {
        const date = new Date();
        const formatted =
            date.getDate().toString().padStart(2, "0") + "-" +
            (date.getMonth() + 1).toString().padStart(2, "0") + "-" +
            date.getFullYear();
        setInputDate(formatted);
    }

    function onClickTommorow() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const formatted =
            tomorrow.getDate().toString().padStart(2, "0") + "-" +
            (tomorrow.getMonth() + 1).toString().padStart(2, "0") + "-" +
            tomorrow.getFullYear();

        setInputDate(formatted);
    }

    const onChangeCalender = (event) => {
        if (event.type === "set") {
            console.log(event)
            let timestamp = event?.nativeEvent?.timestamp
            const date = new Date(timestamp);
            const formatted =
                date.getDate().toString().padStart(2, "0") + "-" +
                (date.getMonth() + 1).toString().padStart(2, "0") + "-" +
                date.getFullYear();
            setInputDate(formatted);
            setShowCalender(false);
        } else if (event.type === "dismissed") {
            setShowCalender(false);
        }
    };

    // useEffect(() => {
    //     if (params.from) setBoarding(JSON.parse(params.from));
    //     if (params.to) setDestination(JSON.parse(params.to));
    // }, [params]);

    return (
        <View style={styles.card}>

            {/* From */}
            <TextInput
                value={boarding?.dropPoint || ""}
                onPress={() => router.push({ pathname: '/(search)/searchLocation', params: { 
                    locationType: "from" ,
                    oldData : JSON.stringify(destination)
                } })}
                placeholder="Boarding From"
                placeholderTextColor="#9e9e9e"
                onChangeText={text => setBoarding(text)}
                style={styles.input}
            />

            {/* To */}
            <TextInput
                value={destination?.dropPoint || ""}
                onPress={() => router.push({ pathname: '/(search)/searchLocation', params: 
                    { locationType: "to" , 
                     oldData : JSON.stringify(boarding)  } })}
                placeholder="Where are you going?"
                placeholderTextColor="#9e9e9e"
                onChangeText={text => setDestination(text)}
                style={styles.input}
            />

            {/* Reverse Icon */}
            <TouchableOpacity
                style={styles.reverseBtn}
                onPress={onReverse}
            >
                <Ionicons name="swap-vertical" size={22} color="orange" />
            </TouchableOpacity>

            {/* Date buttons */}
            <View style={styles.dateRow}>
                <TouchableOpacity
                    style={styles.dateBtn}
                    onPress={onClickToday}
                >
                    <Text style={styles.dateText}>Today</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.dateBtn}
                    onPress={onClickTommorow}
                >
                    <Text style={styles.dateText}>Tomorrow</Text>
                </TouchableOpacity>

                {/* Calendar Button */}
                <TouchableOpacity
                    style={styles.dateBtn}
                    onPress={() => setShowCalender(true)}
                >
                    {inputDate ? <Text style={styles.dateText}>{inputDate} </Text> : <Ionicons name="calendar" size={20} color="#fff" />}
                </TouchableOpacity>
            </View>

            {/* Date Picker */}
            {showCalender && (
                <DateTimePicker
                    value={new Date()}
                    mode="date"
                    display="default"
                    onChange={onChangeCalender}
                />
            )}

            {/* Find Bus */}
            <TouchableOpacity
                style={styles.findButton}
                onPress={() => router.push('/(search)/searchbus')}
            >
                <Text style={styles.findButtonText}>Find Buses</Text>
            </TouchableOpacity>

        </View>
    )
}

export default FindBus