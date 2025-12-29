import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyAccountHeader from "./Header";
import MyDetails from "./PersonalDetails";
import MoreSection from "./MoreSection";
import { useSelector } from "react-redux";
import LoginRequired from "../Bookings/LoginRequired";

const MyAccountHome = () => {

  const { status } = useSelector((state) => state?.user)

  if (!status) {
    return (
      <SafeAreaView style={{flex : 1, justifyContent : "center" }}>
        <LoginRequired
          message="Please sign in to access your account and manage your personal details. Log in to view and update your profile information securely."
        />
      </SafeAreaView>

    )
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }}
      >

        <MyAccountHeader />
        <MyDetails />
        <MoreSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyAccountHome;

const styles = StyleSheet.create({
  safe: {
    // flex: 1,

  },

  scroll: {
    // flex: 1,
  },

});
