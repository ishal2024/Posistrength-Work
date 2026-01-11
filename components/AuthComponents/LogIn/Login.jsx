import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from './LoginStyleSheets'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useRouter } from 'expo-router';
import { loginUser } from '@/axios/userAuth';
import Toast from 'react-native-toast-message';
import Spinner from '../../../constants/Spinner/Spinner'
import { useDispatch } from 'react-redux';
import { addUserData } from '@/redux_store/UserDataSlicer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ErrorDialogBox from '@/constants/Dialogs/ErrorDialogBox';

const LoginScreen = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');

  // --- Error Dialog Box ---
  const [errorTitle, setErrorTitle] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const [isSpinnerOpen, setSpinnerOpen] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()

  // --- States ---
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // --- Simple Email Validation ---
  const handleEmailChange = (text) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (text.length > 0 && !emailRegex.test(text)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  async function handleLoginUser() {
    try {
      
      if(email.length == 0 || password.length == 0 || emailError.length != 0){
        setErrorTitle("Input Field Error")
        setErrorMessage("Please fill all the required input fields")
        setSpinnerOpen(false)
        return
      }
      setSpinnerOpen(true)

      const data = {
        email, password
      }

      const response = await loginUser(data)

      if (response?.data?.status) {
        const user = {
          status : true,
          userData : response?.data?.user,
          token : response?.data?.token
        }
        await AsyncStorage.setItem('user', JSON.stringify(user))
        dispatch(addUserData(response?.data?.user))
        setSpinnerOpen(false)
        router.replace('/(tabs)/')
      }
      else
        setSpinnerOpen(false)

    } catch (error) {
      setSpinnerOpen(false)
      setErrorTitle("Internal Server Error")
      setErrorMessage(error?.response?.data?.message)
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      {/* Loading Spinner */}
      {isSpinnerOpen && <Spinner />}

      {/* Error Dilaog Box */}
      {errorTitle && <ErrorDialogBox title={errorTitle} message={errorMessage}
        onCancel={() => {
          setErrorMessage(false)
          setErrorTitle(false)
        }}
      />}

      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

          {/* Header Section (Matching Sign Up) */}
          <View style={styles.header}>
            <View style={styles.logoCircle}>
              <MaterialCommunityIcons name="bus-side" size={40} color="#FF5722" />
            </View>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Login to your GoBus account to continue</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>

            {/* Email Address */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
              <View style={[styles.inputWrapper, emailError ? styles.inputErrorBorder : null]}>
                <Ionicons name="mail-outline" size={20} color="#666" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="example@mail.com"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={handleEmailChange}
                />
              </View>
              {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            </View>

            {/* Password Field with Eye Toggle */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={22}
                    color="#9E9E9E"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Forgot Password Link */}
            <TouchableOpacity style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button (Matching Sign Up) */}
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={() => handleLoginUser()}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
              <Ionicons name="arrow-forward" size={20} color="#FFF" />
            </TouchableOpacity>

            {/* Bottom Navigation Link */}
            <View style={styles.footerLink}>
              <Text style={styles.footerText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/signup')}>
                <Text style={styles.signUpText}>Create Account</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

