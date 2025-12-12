import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from './SignupStyleSheets'
import { router } from 'expo-router';
import { registerUser } from '../../../axios/userAuth'
import { SafeAreaView } from 'react-native-safe-area-context';
import PasswordStrengthChecker from './PasswordStrengthChecker'
import Toast from 'react-native-toast-message'


export default function Signup() {

  const [checked, isChecked] = useState(false)

  // useState For user Authentication
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  //Password Strength
  function isPasswordStrong(password) {
    const hasMinLength = password.length >= 8;
    const hasUppercase = password.toLowerCase() !== password;
    const hasNumber = password.split("").some((ch) => "0123456789".includes(ch));
    const specialChars = "!@#$%^&*()_+=-{}[]|:;'<>,.?/~`";
    const hasSpecial = password.split("").some((ch) => specialChars.includes(ch));
    if (hasMinLength && hasUppercase && hasNumber && hasSpecial)
      return false
    else
      return true
  }

  function checkUserData(data) {
    if (
      data.name.length === 0 ||
      data.email.length === 0 ||
      data.contact.length !== 10 ||
      data.password.length === 0 ||
      data.password_confirmation.length === 0
    ) {
      Toast.show({
        type: "error",
        text1: "Invalid Input",
        text2: "Please fill all required fields.",
      });
      return true;
    }

    if (data.password !== data.password_confirmation) {
      Toast.show({
        type: "error",
        text1: "Invalid Confirm Password",
        text2: "Password and Confirm Password must be same.",
      });
      return true;
    }

    if (isPasswordStrong(data.password)) {
      Toast.show({
        type: "error",
        text1: "Weak Password",
        text2: "Must include uppercase, number & special character.",
      });
      return true;
    }

    return false;
  }
  async function handleRegisterUser() {
    const data = {
      name,
      contact,
      email,
      password,
      password_confirmation : confirmPassword
    }

    if (checkUserData(data)) return
    console.log(data)
    const response = await registerUser(data)
    console.log(response?.data?.user)
  }

  return (
    <>
    <SafeAreaView>
      <ScrollView >
        <View style={styles.container}>
          <Text style={styles.title}>Create an account</Text>
          <Text style={styles.subtitle}>Welcome back to the app</Text>

          {/* Name */}
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="John Doe"
            placeholderTextColor="#999" />

          {/* Email */}
          <Text style={styles.label}>Email Address</Text>
          <TextInput style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="hello@example.com"
            placeholderTextColor="#999" />

          {/* Contact */}
          <Text style={styles.label}>Contact Number</Text>
          <TextInput style={styles.input}
            value={contact}
            onChangeText={(text) => setContact(text)}
            placeholder="+91 9876543210"
            placeholderTextColor="#999" />

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordRow}>
            <PasswordStrengthChecker password={password} setPassword={setPassword} />
          </View>

          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordRow}>
            <TextInput
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              style={styles.passwordInput}
              placeholder="•••••••••••••"
              placeholderTextColor="#999"
            />

          </View>

          {/* Checkbox Row */}
          <View style={styles.checkboxRow}>
            <Checkbox
              value={checked}
              style={styles.checkbox}
              onValueChange={isChecked}
              color={checked ? "#FF9800" : undefined}  // optional orange theme
            />
            <Text style={styles.checkboxText}>
              By continuing, you agree to our <Text style={styles.link}>terms of service</Text>.
            </Text>
          </View>

          {/* Signup Button */}
          <TouchableOpacity
            onPress={handleRegisterUser}
            style={styles.signupBtn} >
            <Text style={styles.signupBtnText}>Sign up</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or sign up with </Text>
            <View style={styles.line} />
          </View>

          {/* Google Button */}
          <TouchableOpacity style={styles.googleBtn}>
            <Image
              source={{ uri: "https://imgs.search.brave.com/WLFrkfXuPUNV3EJu_ROkxWVin1CUHQZ04BqHJ67iPoo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaW1pbGFycG5n/LmNvbS9maWxlL3Np/bWlsYXJwbmcvdmVy/eS10aHVtYm5haWwv/MjAyMC8wNi9Mb2dv/LWdvb2dsZS1pY29u/LVBORy5wbmc" }}
              style={styles.googleIcon}
            />
            <Text style={styles.googleText}>Continue with Google </Text>
          </TouchableOpacity>

          <Text style={styles.bottomText}>
            Already have an account? <Text
              style={styles.signInLink}
              onPress={() => router.push('/login')}
            >Sign in here</Text>
          </Text>
        </View>
      </ScrollView>
      </SafeAreaView>
    </>


  )
}
