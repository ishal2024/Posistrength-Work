import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopOfferCard from '../../Home/TopOfferCrad'

const Offers = () => {

    const offersData = [
        {
            id: "1",
            title: "50% OFF on First Booking",
            valid: "Valid till 31 Dec 2025",
        },
        {
            id: "2",
            title: "Flat ₹100 OFF on Sleeper Seats",
            valid: "Valid till 20 Jan 2026",
        },
        {
            id: "3",
            title: "Special Holiday Offer",
            valid: "Valid till 25 Dec 2025",

        },
        {
            id: "4",
            title: "Special Holiday Offer",
            valid: "Valid till 25 Dec 2025",

        },
        {
            id: "5",
            title: "Special Holiday Offer",
            valid: "Valid till 25 Dec 2025",

        },
    ];

    return (
        <SafeAreaView >
            <ScrollView>
                 <View style = {styles.container}>
                    {offersData.map((item) => {
                        return(
                            <TopOfferCard data = {item} />
                        )
                    })}
                 </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Offers

const styles = StyleSheet.create({
    container : {
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        rowGap : 20
    }
})