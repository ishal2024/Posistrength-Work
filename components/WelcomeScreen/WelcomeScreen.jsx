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
        source={require('../../assets/images/appLogo.png')}
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

