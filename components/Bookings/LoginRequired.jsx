import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from './LoginRequiredStyleSheet'
import {useRouter} from 'expo-router'

const LoginRequired = () => {

  const router = useRouter()

  return (
    <View style={styles.card}>

      {/* Icon */}
      <View style={styles.iconCircle}>
        <Ionicons name="lock-closed-outline" size={55} color="#FF6600" />
      </View>

      {/* Heading */}
      <Text style={styles.title}>Login Required</Text>

      {/* Description */}
      <Text style={styles.desc}>
        Please log in to view your booking history and manage your trips.
        Sign in to access all your past and upcoming journeys.
      </Text>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginBtn} onPress={() => router.push('/login')}>
        <Ionicons name="arrow-forward-outline" size={18} color="#fff" />
        <Text style={styles.loginText}>Login to Continue</Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity style={styles.createBtn} onPress={() => router.push('/signup')}>
        <Text style={styles.createText}>Create Account</Text>
      </TouchableOpacity>

      {/* Footer Info */}
      <View style={{
        height: 1,
        backgroundColor: '#e0e0e0',
        width: '100%',
        marginBottom: 20
      }} />
      <View style={styles.footer}>
        <Ionicons name="calendar-outline" size={18} color="#FF6600" />
        <Text style={styles.footerText}>
          Track your bookings, view tickets, and manage your travel plans
        </Text>
      </View>
    </View>
  );
};

export default LoginRequired;


