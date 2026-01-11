import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, Entypo, FontAwesome } from "@expo/vector-icons";
import {styles} from './GetHelpStyleSheet'
import { contactPageData } from "../../axios/homePage";

const GetHelp = () => {

  const [contactData , setContactData] = useState({})

  async function handleContactFetch(){
    try {
      const res = await contactPageData()
      if(res?.data?.status){
        setContactData(res?.data?.data?.contact)
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    handleContactFetch()
  } , [])

  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>Get in Touch</Text>

      

      {/* Card */}
      <View style={styles.card}>

      {/* Phone Number */}
      <View style={styles.row}>
          <View style={styles.iconCircle}>
            <MaterialIcons name="phone" size={28} color="#FF8A00" />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.title}>Customer Care</Text>
            <Text style={styles.phone}>{contactData?.contact_no}</Text>
            <Text style={styles.subText}>Available 24/7</Text>
          </View>
        </View>

      {/* Email */}
      <View style={styles.row}>
          <View style={styles.iconCircle}>
            <MaterialIcons name="email" size={28} color="#FF8A00" />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.title}>Email Support</Text>
            <Text style={styles.email}>{contactData?.email}</Text>
            <Text style={styles.subText}>Response within 24 hours</Text>
          </View>
        </View>
        
        {/* Address */}
        <View style={styles.row}>
          <View style={styles.iconCircle}>
            <Entypo name="location-pin" size={28} color="#FF8A00" />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.title}>Head Office</Text>
            <Text style={styles.address}>
              {contactData?.address}
            </Text>
          </View>
        </View>
      </View>

      {/* Connect with us */}
      <Text style={styles.heading}>Connect With Us</Text>

      <View style={styles.socialCard}>
        <TouchableOpacity style={styles.socialItem}>
          <View style={styles.socialCircle}>
            <FontAwesome name="facebook" size={26} color="#FF8A00" />
          </View>
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialItem}>
          <View style={styles.socialCircle}>
            <FontAwesome name="twitter" size={26} color="#FF8A00" />
          </View>
          <Text style={styles.socialText}>Twitter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialItem}>
          <View style={styles.socialCircle}>
            <FontAwesome name="instagram" size={26} color="#FF8A00" />
          </View>
          <Text style={styles.socialText}>Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialItem}>
          <View style={styles.socialCircle}>
            <FontAwesome name="linkedin" size={26} color="#FF8A00" />
          </View>
          <Text style={styles.socialText}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default GetHelp