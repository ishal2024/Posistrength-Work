import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Feather , FontAwesome , MaterialCommunityIcons} from '@expo/vector-icons'
import {styles} from './BusDetailPageStyleSheet'
import BusImagesSlider from './BusImagesSlider'
import PickAndDropPoints from './PickAndDropPoints'
import ReviewsSection from './ReviewsSection'
import FooterSection from './FooterSection'

const BusDetailPage = () => {
  return (
    <SafeAreaView style = {{flex : 1}}>
    <ScrollView style = {{paddingHorizontal : 15, paddingTop : 15 }}>
 
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
        source={{uri : "https://imgs.search.brave.com/pf7mOk_sXe7BgrEHCsmYFJ2uYXk8ANYY0H3UrQzX-rA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE2/MTY3NDY4NS9waG90/by90d28td2hpdGUt/YnVzZXMtdHJhdmVs/aW5nLW9uLXRoZS1h/c3BoYWx0LXJvYWQt/aW4tcnVyYWwtbGFu/ZHNjYXBlLWF0LXN1/bnNldC13aXRoLWRy/YW1hdGljLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1NbmZD/LUZSWDhxN3lILUxI/d1g0akY0ek9XcElt/MTFaeXhnejJqTExE/WndNPQ"}}  
        style={styles.image}
        resizeMode="cover"
      />
    </View>

    {/* Bus Detail Section */}

     <View style={styles.container}>
      
      {/* Title Row */}
      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.busName}>Express Lines</Text>
          <Text style={styles.typeText}>Premium Sleeper</Text>
        </View>

        <TouchableOpacity style={styles.ratingBadge}>
          <FontAwesome name="star" size={16} color="#FFA500" />
          <Text style={styles.ratingText}>4.8</Text>
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
            <Text style={styles.stationName}>New York Central Station</Text>
            <Text style={styles.durationLabel}>Duration</Text>
          </View>

          <View style={styles.stationRow}>
            <Text style={styles.timeText}>Jun 15, 07:00 AM</Text>
            <Text style={styles.durationText}>4h 30m</Text>
          </View>

          <View style={{ marginTop: 14 }}>
            <Text style={styles.stationName}>Boston South Station</Text>
            <Text style={styles.timeText}>Jun 15, 11:30 AM</Text>
          </View>
        </View>

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