import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {styles} from './WelcomeScreenSheets'
import { router } from 'expo-router';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text 
      style = {styles.skip}
      onPress={() => router.replace('/(tabs)/')}
      >
      Skip</Text>
      <Image
        source={{uri : 'https://imgs.search.brave.com/INlEiuBCnZS9in0s8mBrhMwl34uArsnZYL2PHUcUlzY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvcmVhbGlzdGlj/LWJ1cy12ZWN0b3It/aWxsdXN0cmF0aW9u/LWNvbmNlcHRfMTI1/MzIwMi0xOTE3Mi5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA'}}
        style={styles.busImage}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome to the app</Text>

      <Text style={styles.subtitle}>
        An app for convenient bus seat booking, schedules, payments, and travel updates in Sri Lanka.
      </Text>

      <TouchableOpacity 
      style={styles.button}
      onPress={() => router.push('/login')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <Text onPress={() => router.push('/signup')} style={styles.createAccount}>Create an account</Text>

    </View>
  );
}

