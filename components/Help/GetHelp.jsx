import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, Entypo, FontAwesome } from "@expo/vector-icons";
import {styles} from './GetHelpStyleSheet'

const GetHelp = () => {
  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>Get in Touch</Text>

      {/* Card */}
      <View style={styles.card}>

        <View style={styles.row}>
          <View style={styles.iconCircle}>
            <Entypo name="location-pin" size={28} color="#FF8A00" />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.title}>Head Office</Text>
            <Text style={styles.address}>
              123, Business Tower, MG Road{"\n"}
              Bangalore, Karnataka - 560001{"\n"}
              India
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