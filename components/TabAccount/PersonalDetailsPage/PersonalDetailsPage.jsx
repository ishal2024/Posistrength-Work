import React, { useState } from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity,ScrollView,Image,Switch,ActivityIndicator,Alert,KeyboardAvoidingView,Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './PersonalDetailStyleSheet';
import { useSelector } from 'react-redux';
import {updateUserDetails} from '../../../axios/userAuth'
import Toast from 'react-native-toast-message';

export default function PersonalDetailPage() {

  const {userData} = useSelector((state) => state?.user)

  // State for Form Fields
  const [name, setName] = useState(userData?.name || "");
  const [contact, setContact] = useState(userData?.contact || "");
  const [email, setEmail] = useState(userData?.email || "");
  const [password, setPassword] = useState(userData?.password || "");
  const [confirmPassword, setConfirmPassword] = useState(userData?.password_confirmation || "");
  
  // State for Switches
  const [muteNotifications, setMuteNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  // State for Profile Image
  const [image, setImage] = useState(userData?.profile_photo_url || "");
  
  // UI State
  const [loading, setLoading] = useState(false);

  // Function to pick image from gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  function isInputFieldValid(data){
    if (
      data.name.length === 0 ||
      data.email.length === 0 ||
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
    
    if(data.contact.length !== 10){
      Toast.show({
        type: "error",
        text1: "Invalid Phone Number",
        text2: "Phone Number should be of 10 digit",
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

    return false;
  }

 async function handleUpdateUser() {
  setLoading(true)
      const data = {
        name,
        contact,
        email,
        password,
        password_confirmation : confirmPassword,
        mute_notifications : muteNotifications,
        email_notifications : emailNotifications,
        profile_photo  : image
      }
      if(isInputFieldValid(data)){ 
        setLoading(false)
        return
      }
      setLoading(false)
      try {
        const res = await updateUserDetails(data)
      } catch (error) {
        
      }
 }





  return (
    <SafeAreaView style={styles.container}>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      > */}
        <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color='#333' />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Update Profile</Text>
            <View style={{ width: 40 }} /> 
          </View>

          {/* Profile Photo Section */}
          <View style={styles.imageContainer}>
            <View style={styles.imageWrapper}>
              <Image source={{ uri: image }} style={styles.profileImage} />
              <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
                <Ionicons name="camera" size={20} color='#FFF' />
              </TouchableOpacity>
            </View>
            <Text style={styles.imageHint}>Tap camera to change photo</Text>
          </View>

          {/* Form Fields */}
          <View style={styles.formCard}>
            
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color='#FF6F00' style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                placeholderTextColor="#6b6a6a"
              />
            </View>

            <Text style={styles.label}>Contact Number</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="call-outline" size={20} color='#FF6F00' style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={contact}
                onChangeText={setContact}
                placeholder="Enter contact number"
                keyboardType="numeric"
                placeholderTextColor="#6b6a6a"
              />
            </View>

            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color='#FF6F00' style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter email"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#6b6a6a"
              />
            </View>

            <Text style={styles.label}>New Password</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color='#FF6F00' style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="New Password"
                placeholderTextColor="#6b6a6a"
                secureTextEntry
              />
            </View>

            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="shield-checkmark-outline" size={20} color='#FF6F00' style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm Password"
                placeholderTextColor="#6b6a6a"
                secureTextEntry
              />
            </View>

            {/* Notification Toggles */}
            <View style={styles.switchSection}>
              <View style={styles.switchRow}>
                <View style={styles.switchLabelContainer}>
                  <MaterialCommunityIcons name="bell-off-outline" size={22} color='#333' />
                  <Text style={styles.switchText}>Mute Notifications</Text>
                </View>
                <Switch
                  trackColor={{ false: '#767577', true: '#FFCC80' }}
                  thumbColor={muteNotifications ? '#FF6F00' : '#f4f3f4'}
                  onValueChange={() => setMuteNotifications(prev => !prev)}
                  value={muteNotifications}
                />
              </View>

              <View style={styles.switchRow}>
                <View style={styles.switchLabelContainer}>
                  <MaterialCommunityIcons name="email-check-outline" size={22} color='#333' />
                  <Text style={styles.switchText}>Email Notifications</Text>
                </View>
                <Switch
                  trackColor={{ false: '#767577', true: '#FFCC80' }}
                  thumbColor={emailNotifications ? '#FF6F00' : '#f4f3f4'}
                  onValueChange={() => setEmailNotifications(prev => !prev)}
                  value={emailNotifications}
                />
              </View>
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity 
            style={styles.updateButton} 
            onPress={handleUpdateUser}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color='#FFF' />
            ) : (
              <Text style={styles.updateButtonText}>Update Profile</Text>
            )}
          </TouchableOpacity>

        </ScrollView>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
}

