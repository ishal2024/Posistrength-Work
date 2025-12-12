import React from "react";
import { View, Text, TextInput,  TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import {styles} from './HelpHeaderBoxStyleSheet'

const HelpHeaderBox = () => {

  

  return (
       <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Help & Support</Text>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          placeholder="Search for help..."
          style={styles.searchInput}
          placeholderTextColor="#9E9E9E"
        />
      </View>

      {/* Options Row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.iconCircle}>
            <Ionicons name="call-outline" size={28} color="#FF8A00" />
          </View>
          <Text style={styles.cardText}>Call Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.iconCircle}>
            <MaterialIcons name="email" size={28} color="#FF8A00" />
          </View>
          <Text style={styles.cardText}>Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.iconCircle}>
            <Entypo name="chat" size={28} color="#FF8A00" />
          </View>
          <Text style={styles.cardText}>Live Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HelpHeaderBox