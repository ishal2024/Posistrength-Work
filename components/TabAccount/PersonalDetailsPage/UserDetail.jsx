import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5, Entypo } from "@expo/vector-icons";
import {styles} from './UserInfoStyleSheet'
import { useSelector } from "react-redux";

export default function UserDetail() {

  const {userData} = useSelector((state) => state?.user)

  // All fields stored in ONE object
  const formFields = [
    {
      key: "fullName",
      label: "Full Name",
      placeholder: "Enter full name",
      icon: <Ionicons name="person-outline" size={20} color="#FF7A00" />,
      value : userData?.name || ""
    },
    {
      key: "email",
      label: "Email Address",
      placeholder: "Enter email",
      icon: <MaterialIcons name="email" size={20} color="#FF7A00" />,
      value : userData?.email || ""
    },
    {
      key: "phone",
      label: "Phone Number",
      placeholder: "Enter phone",
      icon: <Ionicons name="call-outline" size={20} color="#FF7A00" />,
      value : userData?.contact || ""
    },
    {
      key: "dob",
      label: "Date of Birth",
      placeholder: "DD-MM-YYYY",
      icon: <Ionicons name="calendar-outline" size={20} color="#FF7A00" />,
      value : userData?.dob || ""
    },
    {
      key: "gender",
      label: "Gender",
      placeholder: "Male / Female",
      icon: <FontAwesome5 name="genderless" size={20} color="#FF7A00" />,
      value : userData?.gender || ""
    },
    {
      key: "address",
      label: "Address",
      placeholder: "Enter address",
      icon: <Entypo name="location-pin" size={22} color="#FF7A00" />,
      value : userData?.address || ""
    },
    {
      key: "emergency",
      label: "Emergency Contact",
      placeholder: "Enter emergency contact",
      icon: <Ionicons name="call" size={20} color="#FF7A00" />,
      value : userData?.contact || ""
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle = {{paddingBottom : 50}}>
        <Text style={styles.heading}>Personal Information</Text>

        {formFields.map((field) => (
          <View key={field.key} style={styles.inputWrapper}>
            <Text style={styles.label}>{field.label}</Text>

            <View style={styles.inputContainer}>
              {field.icon}
              <TextInput
                placeholder={field.placeholder}
                placeholderTextColor="#999"
                style={styles.input}
                value={field?.value}
              />
            </View>
          </View>
        ))}
      </ScrollView>

      
    </View>
  );
}

