import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions , Image } from "react-native";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from './FindBusStyleSheet'
import { router, useLocalSearchParams, useRouter } from "expo-router";
import { searchbus } from '../../axios/searchBus'
import Spinner from "@/constants/Spinner/Spinner";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { addDate } from "@/redux_store/FindBusSlicer";

const FindBus = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const { from, to, date } = useSelector((state) => state.search)
    const { status } = useSelector((state) => state.user)

    console.log("From Point " , from)
    console.log("To Point " , to)
    console.log("Find Bus Component Re-Render")

    const [boarding, setBoarding] = useState(from.length != 0 ? from : "")
    const [destination, setDestination] = useState(to.length != 0 ? to : "")

    const [showCalender, setShowCalender] = useState(false)
    const [inputDate, setInputDate] = useState(date.length != 0 ? date : null)

    function onReverse() {
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
        dispatch(addDate(formatted))
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
        dispatch(addDate(formatted))
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
            dispatch(addDate(formatted))
            setShowCalender(false);
        } else if (event.type === "dismissed") {
            setShowCalender(false);
        }
    };

    async function handleOnSearch() {

        if (!inputDate || !destination || !boarding) {
            Toast.show({
                type: 'error',
                text1: 'Incomplete Details',
                text2: 'Please select your departure date and destination city.'
            });
            return
        }
        router.push('/(search)/searchbus')
    }

    return (
        <View style={styles.mainContainer}>
            {/* 1️⃣ Header Section */}
            <View style={styles.orangeHeader}>
                <View style={styles.headerTopRow}>
                    {/* <Text style={styles.logoText}>Express<Text style={styles.logoBold}>Way </Text></Text> */}
                    <Image
                        source={require('../../assets/images/appLogo.png')}
                        style={styles.logo}
                        resizeMode="cover"
                    />
                    <TouchableOpacity style={styles.profileCircle} onPress={() => {
                        if (status)
                            router.push('/(account)/personalDetails')
                    }}>
                        <Ionicons name="person" size={20} color="#FF5722" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.headerTagline}>Where would you like to go?</Text>
            </View>

            {/* 2️⃣ Search Bus Box (Floating Card) */}
            <View style={styles.cardWrapper}>
                <View style={styles.card}>

                    {/* Input Section */}
                    <View style={styles.inputsWrapper}>
                        {/* From Input */}
                        <View style={styles.inputRow}>
                            <MaterialCommunityIcons name="circle-slice-8" size={18} color="#FF5722" />
                            <View style={styles.textInputContainer}>
                                <Text style={styles.inputLabel}>From</Text>
                                <TextInput
                                    value={from.length != 0 ? from : boarding}
                                    onPress={() => router.push({
                                        pathname: '/(search)/searchLocation', params: {
                                            locationType: "from",
                                        }
                                    })}
                                    placeholder="Boarding From"
                                    placeholderTextColor="#9e9e9e"
                                    onChangeText={text => setBoarding(text)}
                                    style={styles.input}
                                />
                            </View>
                        </View>

                        {/* Visual Divider Line */}
                        <View style={styles.verticalLine} />

                        {/* Reverse Icon (Redesigned & Positioned) */}
                        <TouchableOpacity
                            style={styles.reverseBtn}
                            onPress={onReverse}
                            activeOpacity={0.8}
                        >
                            <Ionicons name="swap-vertical" size={20} color="#FFF" />
                        </TouchableOpacity>

                        {/* To Input */}
                        <View style={[styles.inputRow, { marginTop: 10 }]}>
                            <MaterialIcons name="location-on" size={20} color="#4CAF50" />
                            <View style={styles.textInputContainer}>
                                <Text style={styles.inputLabel}>To</Text>
                                <TextInput
                                    value={to.length != 0 ? to : destination}
                                    onPress={() => router.push({
                                        pathname: '/(search)/searchLocation', params:
                                        {
                                            locationType: "to",
                                        }
                                    })}
                                    placeholder="Where are you going?"
                                    placeholderTextColor="#9e9e9e"
                                    onChangeText={text => setDestination(text)}
                                    style={styles.input}
                                />
                            </View>
                        </View>
                    </View>

                    {/* Date Section Wrapper */}
                    <View style={styles.dateSection}>
                        <Text style={styles.inputLabel}>Departure Date</Text>

                        {/* Row 1: Quick Select Buttons */}
                        <View style={styles.quickDateRow}>
                            <TouchableOpacity
                                style={styles.quickDateBtn}
                                onPress={onClickToday}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.quickDateText}>Today</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.quickDateBtn}
                                onPress={onClickTommorow}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.quickDateText}>Tomorrow</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Row 2: Main Date Selector Display */}
                        <TouchableOpacity
                            style={styles.fullDateDisplay}
                            onPress={() => setShowCalender(true)}
                            activeOpacity={0.8}
                        >
                            <View style={styles.dateInfoLeft}>
                                <View style={styles.calendarIconBg}>
                                    <Ionicons name="calendar" size={20} color="#FF5722" />
                                </View>
                                <View style={styles.dateTextContainer}>
                                    <Text style={styles.dateValueText}>
                                        {inputDate ? inputDate : "Select Journey Date"}
                                    </Text>
                                </View>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="#ADB5BD" />
                        </TouchableOpacity>
                    </View>

                    {/* Date Picker Logic (Unchanged) */}
                    {showCalender && (
                        <DateTimePicker
                            value={new Date()}
                            mode="date"
                            display="default"
                            minimumDate={new Date()}
                            onChange={onChangeCalender}
                        />
                    )}

                    {/* Find Bus Button */}
                    <TouchableOpacity
                        style={styles.findButton}
                        onPress={() => handleOnSearch()}
                        activeOpacity={0.9}
                    >
                        <Text style={styles.findButtonText}>Find Buses</Text>
                        <MaterialIcons name="arrow-forward" size={20} color="#FFF" style={{ marginLeft: 10 }} />
                    </TouchableOpacity>

                </View>
            </View>
        </View>



    )
}

export default FindBus