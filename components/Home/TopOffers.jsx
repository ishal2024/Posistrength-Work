import React, { useRef, useState } from "react";
import { View, Text, FlatList, Dimensions, TouchableOpacity , ScrollView } from "react-native";
import { styles } from "./TopOfferStyleSheet";
import { ImageBackground } from "expo-image";
import { Feather } from "@expo/vector-icons";
import TopOfferCard from './TopOfferCrad'
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const OfferSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatRef = useRef(null);
    const router = useRouter()
    const handleScroll = (e) => {
        const index = Math.round(e.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
    };

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
];


    return (
        <View style={{ marginTop: 40 }}>

            {/* Header */}
            <View style={styles.headerRow}>
                <Text style={styles.heading}>Top Offers</Text>
                <TouchableOpacity onPress={() => router.push('/(account)/offers')}>
                    <Text style={styles.viewAll
                      
                    }>View All</Text>
                </TouchableOpacity>
            </View>

            {/* Slider */}
           <ScrollView
  horizontal
  pagingEnabled
  showsHorizontalScrollIndicator={false}
  onScroll={handleScroll}
  ref={flatRef}
  scrollEventThrottle={16}
>
  {offersData.map((item) => (
    <TopOfferCard data = {item} />
  ))}
</ScrollView>


            {/* Dots Indicator */}
            <View style={styles.dotContainer}>
                {offersData.map((_, i) => (
                    <View
                        key={i}
                        style={[
                            styles.dot,
                            currentIndex === i && styles.activeDot,
                        ]}
                    />
                ))}
            </View>

        </View>
    );
};

export default OfferSlider;