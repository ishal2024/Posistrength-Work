import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from './AccountSettingStyleSheet'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import {removeUser} from '../../../redux_store/UserDataSlicer'

const AccountSettings = () => {

  const router = useRouter()
  const dispatch = useDispatch()
  async function handleUserLogout() {
    try {
      await AsyncStorage.removeItem("user")
      dispatch(removeUser())
      router.replace('/login')
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Internal Server Error',
        text2: error?.message
      });
    }
  }

  return (
    <View style={styles.container}>

      {/* Logout Row */}
      <TouchableOpacity style={styles.row} onPress={handleUserLogout}>
        <View style={styles.left}>
          <MaterialCommunityIcons name="logout" size={22} color="#000" />
          <Text style={styles.text}>Log out  </Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#444" />
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Delete Account */}
      <TouchableOpacity style={styles.row}>
        <View style={styles.left}>
          <MaterialCommunityIcons name="delete-outline" size={22} color="#D32F2F" />
          <Text style={styles.deleteText}>Delete account</Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#D32F2F" />
      </TouchableOpacity>

    </View>
  );
};

export default AccountSettings;

