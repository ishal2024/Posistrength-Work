import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './BusDetailPageStyleSheet'
import BusImagesSlider from './BusImagesSlider'
import PickAndDropPoints from './PickAndDropPoints'
import ReviewsSection from './ReviewsSection'
import FooterSection from './FooterSection'
import { useLocalSearchParams } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../../../redux_store/BookingSlicer'

const BusDetailPage = () => {

  const dispatch = useDispatch()
  const { busDetail, routeDetail } = useLocalSearchParams()

  const {busData , routeData} = useSelector((state) => state.booking)

  function setBusDetailData() {
    try {
      const busres = JSON.parse(busDetail)
      const routeres = JSON.parse(routeDetail)
      dispatch(addData({dataType : "busData" , data : busres}))
      dispatch(addData({dataType : "routeData" , data : routeres}))
    } catch (error) {
      console.log(error?.message)
    }
  }


  useEffect(() => {
    setBusDetailData()
  }, [])

  console.log(routeData)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 15, paddingTop: 15 }}>

        {/* Image Header */}
        <View style={styles.cardContainer}>

          {/* Back Icon */}
          <TouchableOpacity style={styles.leftIcon}>
            <Feather name="arrow-left" size={22} color="#000" />
          </TouchableOpacity>

          {/* Share Icon */}
          <TouchableOpacity style={styles.rightIcon}>
            <Feather name="share-2" size={22} color="#000" />
          </TouchableOpacity>

          {/* Image */}
          <Image
            source={{ uri: busData?.bus?.vehicle_image[0] }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* Bus Detail Section */}
        <View style={styles.container}>

          {/* Title Row */}
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.busName}>{busData?.bus?.name}</Text>
              <Text style={styles.typeText}>{busData?.bus_type}</Text>
            </View>

            <TouchableOpacity style={styles.distanceBadge}>
              <MaterialCommunityIcons
                name="map-marker-distance"
                size={16}
                color="#2563EB"
              />
              <Text style={styles.distanceText}>
                {busData?.route?.distance} km
              </Text>
            </TouchableOpacity>
          </View>

          {/* Route Card */}
          <View style={styles.routeCard}>

            {/* Left Dots and Line */}
            <View style={styles.leftColumn}>
              <View style={styles.dot} />
              <View style={styles.line} />
              <View style={styles.dot} />
            </View>

            {/* Station & Time */}
            <View style={styles.textColumn}>
              <View style={styles.stationRow}>
                <Text style={styles.stationName}>{routeData?.departure}</Text>
                <Text style={styles.durationLabel}>Duration</Text>
              </View>

              <View style={styles.stationRow}>
                <Text style={styles.timeText}>{new Date(busData?.departure_date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  })} , {busData?.departure_time?.slice(0, 5)}</Text>
                <Text style={styles.durationText}>{busData?.route?.estimated_time}</Text>
              </View>

              <View style={{ marginTop: 14 }}>
                <Text style={styles.stationName}>{routeData.origin}</Text>
                <Text style={styles.timeText}>{new Date(busData?.arrival_date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                })} , {busData?.arrival_time?.slice(0, 5)}</Text>
              </View>
            </View>

          </View>
        </View>

        {/* Seats Detail Section */}
        <View style={styles.card}>
          {/* Header */}
          <View style={styles.header}>

            <Text style={styles.headerText}>Seat Availability</Text>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={[styles.statBox, styles.availableBg]}>
              <Text style={[styles.statNumber, styles.availableText]}>{busData?.available_seats}</Text>
              <Text style={[styles.statLabel, styles.availableText]}>
                Available
              </Text>
            </View>

            <View style={[styles.statBox, styles.seaterBg]}>
              <Text style={[styles.statNumber, styles.seaterText]}>{busData?.bus?.bus_layout?.seater_count}</Text>
              <Text style={[styles.statLabel, styles.seaterText]}>
                Seater
              </Text>
            </View>

            <View style={[styles.statBox, styles.sleeperBg]}>
              <Text style={[styles.statNumber, styles.sleeperText]}>{busData?.bus?.bus_layout?.sleeper_count}</Text>
              <Text style={[styles.statLabel, styles.sleeperText]}>
                Sleeper
              </Text>
            </View>
          </View>

        </View>

        {/* Price Detail Section */}
        <View style={styles.pricingContainer}>
          {/* Header */}
          <View style={styles.pricingHeader}>

            <Text style={styles.pricingHeaderText}>Pricing</Text>
          </View>

          {/* Seater */}
          <View style={styles.pricingCard}>
            <View style={styles.pricingLeft}>
              <View style={[styles.pricingIconBox, styles.pricingSeaterBg]}>
                <MaterialCommunityIcons
                  name="seat-outline"
                  size={22}
                  color="#FF6B00"
                />
              </View>

              <View>
                <Text style={styles.pricingTitle}>Seater</Text>
                <Text style={styles.pricingSubText}>Push back seats</Text>
              </View>
            </View>

            <Text style={styles.pricingSeaterPrice}>₹{busData?.bus?.bus_layout?.default_seater_price}</Text>
          </View>

          {/* Sleeper */}
          <View style={styles.pricingCard}>
            <View style={styles.pricingLeft}>
              <View style={[styles.pricingIconBox, styles.pricingSleeperBg]}>
                <MaterialCommunityIcons
                  name="moon-waning-crescent"
                  size={22}
                  color="#7C3AED"
                />
              </View>

              <View>
                <Text style={styles.pricingTitle}>Sleeper</Text>
                <Text style={styles.pricingSubText}>Flat bed seats</Text>
              </View>
            </View>

            <Text style={styles.pricingSleeperPrice}>₹{busData?.bus?.bus_layout?.default_sleeper_price}</Text>
          </View>
        </View>

        {/* Amenities Section */}
        <View style={styles.amenContainer}>
          <Text style={styles.amenTitle}>Amenities</Text>

          <View style={styles.amenGrid}>

            <View style={styles.amenItem}>
              <Feather name="wifi" size={26} color="#FF8C00" />
              <Text style={styles.amenLabel}>WiFi</Text>
            </View>

            <View style={styles.amenItem}>
              <Feather name="power" size={26} color="#FF8C00" />
              <Text style={styles.amenLabel}>Power Outlet</Text>
            </View>

            <View style={styles.amenItem}>
              <Feather name="tv" size={26} color="#FF8C00" />
              <Text style={styles.amenLabel}>TV</Text>
            </View>

            <View style={styles.amenItem}>
              <MaterialCommunityIcons
                name="coffee-outline"
                size={26}
                color="#FF8C00"
              />
              <Text style={styles.amenLabel}>Snacks</Text>
            </View>

            <View style={styles.amenItem}>
              <MaterialCommunityIcons
                name="snowflake"
                size={26}
                color="#FF8C00"
              />
              <Text style={styles.amenLabel}>AC</Text>
            </View>

            <View style={styles.amenItem}>
              <MaterialCommunityIcons
                name="waves"
                size={26}
                color="#FF8C00"
              />
              <Text style={styles.amenLabel}>Toilet</Text>
            </View>

            <View style={styles.amenItem}>
              <Feather name="briefcase" size={26} color="#FF8C00" />
              <Text style={styles.amenLabel}>Luggage</Text>
            </View>

            <View style={styles.amenItem}>
              <MaterialCommunityIcons
                name="usb"
                size={26}
                color="#FF8C00"
              />
              <Text style={styles.amenLabel}>USB</Text>
            </View>

          </View>
        </View>

        {/* Vehicle Specifications */}
        <View style={styles.vehicleSpecContainer}>
          {/* Header */}
          <View style={styles.vehicleSpecHeader}>
            <Text style={styles.vehicleSpecHeaderText}>
              Vehicle Specifications
            </Text>
          </View>

          {/* Grid */}
          <View style={styles.vehicleSpecGrid}>
            {/* Fuel Type */}
            <View style={styles.vehicleSpecCard}>
              <MaterialCommunityIcons
                name="fuel"
                size={24}
                color="#FF6B00"
              />
              <Text style={styles.vehicleSpecLabel}>Fuel Type</Text>
              <Text style={styles.vehicleSpecValue}>{busData?.bus?.fuel_type}</Text>
            </View>

            {/* Gear System */}
            <View style={styles.vehicleSpecCard}>
              <MaterialCommunityIcons
                name="cog"
                size={24}
                color="#FF6B00"
              />
              <Text style={styles.vehicleSpecLabel}>Gear System</Text>
              <Text style={styles.vehicleSpecValue}>{busData?.bus?.gear_system}</Text>
            </View>

            {/* Total Seats */}
            <View style={styles.vehicleSpecCard}>
              <MaterialCommunityIcons
                name="seat-outline"
                size={24}
                color="#FF6B00"
              />
              <Text style={styles.vehicleSpecLabel}>Total Seats</Text>
              <Text style={styles.vehicleSpecValue}>{busData?.bus?.total_seats}</Text>
            </View>

            {/* Type */}
            <View style={styles.vehicleSpecCard}>
              <MaterialCommunityIcons
                name="snowflake"
                size={24}
                color="#FF6B00"
              />
              <Text style={styles.vehicleSpecLabel}>Type</Text>
              <Text style={styles.vehicleSpecValue}>{busData?.bus?.vehicle_type}</Text>
            </View>
          </View>
        </View>

        {/* Bus Image Slider */}
        <BusImagesSlider />

        {/* Pick Up and Drop Off Points */}
        {/* <PickAndDropPoints /> */}

        {/* Review Section */}
        <ReviewsSection />
      </ScrollView>

      {/* Footer Section */}
      <FooterSection  />
    </SafeAreaView>
  )
}

export default BusDetailPage