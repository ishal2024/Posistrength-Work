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
import { styles } from './SignupStyleSheets'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { registerUser } from '../../../axios/userAuth'
import Toast from 'react-native-toast-message'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux'
import { addUserData } from '@/redux_store/UserDataSlicer';
import Spinner from '@/constants/Spinner/Spinner';
import ErrorDialogBox from '../../../constants/Dialogs/ErrorDialogBox'

export const SignUpScreen = () => {

  const [isSpinnerOpen, setSpinnerOpen] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()

  // --- Error Dialog Box ---
  const [errorTitle, setErrorTitle] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // --- Form States ---
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // --- Validation States ---
  const [emailError, setEmailError] = useState('');
  const [contactError, setContactError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmError, setConfirmError] = useState('');

  // --- Real-time Validation Logic ---

  const validateEmail = (text) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (text.length > 0 && !emailRegex.test(text)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validateContact = (text) => {
    setContact(text);
    // Standard 10-digit validation
    const contactRegex = /^[0-9]{10}$/;
    if (text.length > 0 && !contactRegex.test(text)) {
      setContactError('Enter a valid 10-digit mobile number');
    } else {
      setContactError('');
    }
  };

  const validatePassword = (text) => {
    setPassword(text);
    const hasUpper = /[A-Z]/.test(text);
    const hasLower = /[a-z]/.test(text);
    const hasNumber = /[0-9]/.test(text);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(text);
    const hasLength = text.length > 8;

    if (text.length > 0 && (!hasUpper || !hasLower || !hasNumber || !hasSpecial || !hasLength)) {
      setPasswordError('Must have 8+ chars, 1 uppercase, 1 number & 1 special char');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = (text) => {
    setConfirmPassword(text);
    if (text.length > 0 && text !== password) {
      setConfirmError('Passwords do not match');
    } else {
      setConfirmError('');
    }
  };


  async function handleRegisterUser() {
    try {
      const data = {
        name,
        contact,
        email,
        password,
        password_confirmation: confirmPassword
      }

      setSpinnerOpen(true)

      if (name.length == 0 || contact.length == 0 || email.length == 0 || password.length == 0 || confirmPassword.length == 0 ||
        emailError.length != 0 || contactError.length != 0 || passwordError.length != 0 || confirmError.length != 0) {
        setErrorTitle("Input Field Error")
        setErrorMessage("Please fill all the required input fields")
        setSpinnerOpen(false)
        return
      }

      const response = await registerUser(data)

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

          {/* Header Section */}
          <View style={styles.header}>
            <View style={styles.logoCircle}>
              <MaterialCommunityIcons name="bus-side" size={40} color="#FF5722" />
            </View>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Join GoBus and start your journey today</Text>
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>

            {/* Full Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="person-outline" size={20} color="#666" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="John Doe"
                  value={name}
                  onChangeText={setName}
                  placeholderTextColor="#6b6a6a"
                />
              </View>
            </View>

            {/* Contact Number */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Contact Number</Text>
              <View style={[styles.inputWrapper, contactError ? styles.inputErrorBorder : null]}>
                <Ionicons name="call-outline" size={20} color="#666" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="9876543210"
                  keyboardType="phone-pad"
                  maxLength={10}
                  value={contact}
                  onChangeText={validateContact}
                  placeholderTextColor="#6b6a6a"
                />
              </View>
              {contactError ? <Text style={styles.errorText}>{contactError}</Text> : null}
            </View>

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
                  onChangeText={validateEmail}
                  placeholderTextColor="#6b6a6a"
                />
              </View>
              {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            </View>

            {/* Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={[styles.inputWrapper, passwordError ? styles.inputErrorBorder : null]}>
                <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  secureTextEntry={!showPassword} // Toggles visibility
                  value={password}
                  onChangeText={validatePassword}
                  placeholderTextColor="#6b6a6a"
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
              {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            </View>

            {/* Confirm Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirm Password</Text>
              <View style={[styles.inputWrapper, confirmError ? styles.inputErrorBorder : null]}>
                <Ionicons name="shield-checkmark-outline" size={20} color="#666" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  secureTextEntry={!showConfirmPassword} // Toggles visibility
                  value={confirmPassword}
                  onChangeText={validateConfirmPassword}
                  placeholderTextColor="#6b6a6a"
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
                    size={22}
                    color="#9E9E9E"
                  />
                </TouchableOpacity>
              </View>
              {confirmError ? <Text style={styles.errorText}>{confirmError}</Text> : null}
            </View>
            {/* Create Account Button */}
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={handleRegisterUser}
            >
              <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
              <Ionicons name="arrow-forward" size={20} color="#FFF" />
            </TouchableOpacity>

            <View style={styles.footerLink}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => router.replace('/login')}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


export default SignUpScreen;
