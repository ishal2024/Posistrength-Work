import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Chec } from 'react-native';
import { styles } from './LoginStyleSheets'
import { router } from 'expo-router';
import { loginUser } from '@/axios/userAuth';
import Toast from 'react-native-toast-message';
import Spinner from '../../../constants/Spinner/Spinner'

const Login = () => {

  const [checked, isChecked] = useState(false)
  const [isSpinnerOpen , setSpinnerOpen] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function checkInputData() {
    if (email.length == 0 || password.length == 0) {
      Toast.show({
        type: "error",
        text1: "Invalid Input",
        text2: "Please fill all required fields.",
      })
      return true
    }
    return false
  }

  async function handleLoginUser() {
    if(checkInputData()) return
    setSpinnerOpen(true)
    const data = {
      email, password
    }
    console.log(data)
    const response = await loginUser(data)
    console.log(data , response?.data?.user)
    setSpinnerOpen(false)
  }

  return (
    <View style={styles.container}>

      {/* Loading Spinner */}
      {isSpinnerOpen && <Spinner />}
      {/* Heading */}
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subTitle}>Welcome back to the app</Text>

      {/* Email */}
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="hello@example.com"
        placeholderTextColor="#c9c9c9"
        style={styles.input}
      />

      {/* Password */}
      <View style={styles.passwordRow}>
        <Text style={styles.label}>Password  </Text>
        <Text style={styles.forgot}>Forgot Password ? </Text>
      </View>

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
        placeholderTextColor="#c9c9c9"
        secureTextEntry
        style={styles.input}
      />

      {/* Keep me signed in */}
      <View style={styles.checkRow}>
        <Checkbox
          value={checked}
          style={styles.checkbox}
          onValueChange={isChecked}
          color={checked ? "#FF9800" : undefined}  // optional orange theme
        />
        <Text style={styles.checkText}>Keep me signed in</Text>
      </View>

      {/* Login Button */}
      <TouchableOpacity 
      onPress={handleLoginUser}
      style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <Text style={styles.or}>or sign in with </Text>
        <View style={styles.line} />
      </View>

      {/* Google Button */}
      <TouchableOpacity style={styles.googleBtn}>
        <Image
          source={{ uri: "https://imgs.search.brave.com/WLFrkfXuPUNV3EJu_ROkxWVin1CUHQZ04BqHJ67iPoo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaW1pbGFycG5n/LmNvbS9maWxlL3Np/bWlsYXJwbmcvdmVy/eS10aHVtYm5haWwv/MjAyMC8wNi9Mb2dv/LWdvb2dsZS1pY29u/LVBORy5wbmc" }}
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Create account */}
      <TouchableOpacity
        onPress={() => router.push('/signup')}
      >
        <Text style={styles.createAccount}>Create an account</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Login;

