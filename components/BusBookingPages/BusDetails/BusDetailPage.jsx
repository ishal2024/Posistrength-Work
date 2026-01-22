import { View, Text, TouchableOpacity, Image, ScrollView, LayoutAnimation, Platform, UIManager, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './BusDetailPageStyleSheet'
import BusImagesSlider from './BusImagesSlider'
import PickAndDropPoints from './PickAndDropPoints'
import ReviewsSection from './ReviewsSection'
import FooterSection from './FooterSection'
import { useLocalSearchParams } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../../../redux_store/BookingSlicer'
import BusRouteCard from './BusRouteCard'
import StopsList from './StopsList'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const BusDetailPage = () => {

  const ICON_MAP = {
    "fa-chair": "chair",
    "fa-door-open": "door-open",
    "fa-location-dot": "location-dot",
    "fa-mug-hot": "mug-hot",
    "fa-mug-saucer": "mug-hot",
    "fa-bolt": "bolt",
    "fa-curtain": "curtains",
    "fa-lightbulb": "lightbulb",
    "fa-suitcase-rolling": "suitcase-rolling",
  };

  const dispatch = useDispatch()
  const { busDetail, routeDetail } = useLocalSearchParams()

  const { busData, routeData } = useSelector((state) => state.booking)

  function setBusDetailData() {
    try {
      const busres = JSON.parse(busDetail)
      const routeres = JSON.parse(routeDetail)
      dispatch(addData({ dataType: "busData", data: busres }))
      dispatch(addData({ dataType: "routeData", data: routeres }))
    } catch (error) {
      console.log(error?.message)
    }
  }


  // Dropping and Boarding Points Accordin
  const [isBoardingAccorinOpen, setBoardingAccorinOpen] = useState(false)
  const [isDroppingAccorinOpen, setDroppingAccorinOpen] = useState(false)

  const toggleDroppingAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setDroppingAccorinOpen(!isDroppingAccorinOpen);
  };
  const toggleBoardingAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setBoardingAccorinOpen(!isBoardingAccorinOpen);
  };


  useEffect(() => {
    setBusDetailData()
  }, [])

  console.log(busData?.boarding_points_list)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ paddingHorizontal: 15, paddingTop: 15, backgroundColor: "white" }}>

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
              <Text style={styles.typeText}>{busData?.bus?.layout?.layout_name}</Text>
            </View>

            <TouchableOpacity style={styles.distanceBadge}>
              <MaterialCommunityIcons
                name="sofa-single"
                size={16}
                color="#2563EB"
              />
              <Text style={styles.distanceText}>
                {busData?.bus?.layout?.total_seats} Seats
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
              </View>

              <View style={styles.stationRow}>
                <Text style={styles.timeText}>{new Date(busData?.departure_date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                })} , {busData?.departure_formatted}  </Text>

              </View>

              <View style={{ marginTop: 14 }}>
                <Text style={styles.stationName}>{routeData.origin}</Text>
                <Text style={styles.timeText}>{new Date(busData?.arrival_date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                })} , {busData?.arrival_formatted}</Text>
              </View>
            </View>

          </View>
        </View>

        {/* <BusRouteCard /> */}

        {/* boarding Points Accordin  */}
        <View style={styles.accordcontainer}>
          {/* Accordion Header */}
          <TouchableOpacity
            style={[styles.accordheader, isBoardingAccorinOpen && styles.accordheaderActive]}
            onPress={toggleBoardingAccordion}
            activeOpacity={0.7}
          >
            <View style={styles.accordheaderTitleRow}>
              <View style={styles.accordiconCircle}>
                <MaterialCommunityIcons name="map-marker-radius" size={20} color="#FF5722" />
              </View>
              <Text style={styles.accordheaderTitle}>Boarding Points</Text>
            </View>
            <Feather
              name={isBoardingAccorinOpen ? "chevron-up" : "chevron-down"}
              size={24}
              color={isBoardingAccorinOpen ? "#FF5722" : "#636E72"}
            />
          </TouchableOpacity>

          {/* Accordion Content */}
          {isBoardingAccorinOpen && (
            <View style={styles.accordcontent}>
              {busData?.boarding_points_list.map((item, index) => {
                const isFirst = index === 0;
                const isLast = index === busData?.boarding_points_list.length - 1;

                return (
                  <BusRouteCard
                    key={item.id ?? index}
                    item={item}
                    isFirst={isFirst}
                    isLast={isLast}
                  />
                );
              })}
            </View>
          )}
        </View>
        {/* Drooping Points Accordin  */}
        <View style={styles.accordcontainer}>
          {/* Accordion Header */}
          <TouchableOpacity
            style={[styles.accordheader, isDroppingAccorinOpen && styles.accordheaderActive]}
            onPress={toggleDroppingAccordion}
            activeOpacity={0.7}
          >
            <View style={styles.accordheaderTitleRow}>
              <View style={styles.accordiconCircle}>
                <MaterialCommunityIcons name="map-marker-radius" size={20} color="#FF5722" />
              </View>
              <Text style={styles.accordheaderTitle}>Dropping Points</Text>
            </View>
            <Feather
              name={isDroppingAccorinOpen ? "chevron-up" : "chevron-down"}
              size={24}
              color={isDroppingAccorinOpen ? "#FF5722" : "#636E72"}
            />
          </TouchableOpacity>

          {/* Accordion Content */}
          {isDroppingAccorinOpen && (
            <View style={styles.accordcontent}>
              {busData?.dropping_points_list?.map((item, index) => {
                const isFirst = index === 0;
                const isLast = index === busData?.dropping_points_list?.length - 1;

                return (
                  <BusRouteCard
                    key={item.id ?? index}
                    item={item}
                    isFirst={isFirst}
                    isLast={isLast}
                  />
                );
              })}
            </View>
          )}
        </View>

        {/* Stops List  */}
        <StopsList />


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
              <Text style={[styles.statNumber, styles.seaterText]}>{busData?.bus?.layout?.seater_count}</Text>
              <Text style={[styles.statLabel, styles.seaterText]}>
                Seater
              </Text>
            </View>

            <View style={[styles.statBox, styles.sleeperBg]}>
              <Text style={[styles.statNumber, styles.sleeperText]}>{busData?.bus?.layout?.sleeper_count}</Text>
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

            <Text style={styles.pricingSeaterPrice}>₹{busData?.bus?.layout?.default_seater_price}</Text>
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

            <Text style={styles.pricingSleeperPrice}>₹{busData?.bus?.layout?.default_sleeper_price}</Text>
          </View>
        </View>

        {/* Amenities Section */}
        <View style={styles.amenContainer}>
          <Text style={styles.amenTitle}>Amenities</Text>

          <View style={styles.amenGrid}>

            {busData?.bus?.amenities.map((item) => {
              return (
                <View key={item?.id} style={styles.amenItem}>
                  <FontAwesome5 name={"wifi"} size={26} color="#FF8C00" />
                  <Text style={styles.amenLabel}>{item?.name}</Text>
                </View>
              )
            })}

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
              <Text style={styles.vehicleSpecLabel}>Fuel Type </Text>
              <Text style={styles.vehicleSpecValue}>{busData?.bus?.fuel_type}  </Text>
            </View>

            {/* Gear System */}
            <View style={styles.vehicleSpecCard}>
              <MaterialCommunityIcons
                name="cog"
                size={24}
                color="#FF6B00"
              />
              <Text style={styles.vehicleSpecLabel}>Gear System </Text>
              <Text style={styles.vehicleSpecValue}>{busData?.bus?.gear_system} </Text>
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
              <Text style={styles.vehicleSpecLabel}>Type </Text>
              <Text style={styles.vehicleSpecValue}>{busData?.bus?.vehicle_type} </Text>
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
      <FooterSection />
    </SafeAreaView>
  )
}

export default BusDetailPage