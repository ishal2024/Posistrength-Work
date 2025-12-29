import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyAccountHeader from "./Header";
import MyDetails from "./PersonalDetails";
import MoreSection from "./MoreSection";

const MyAccountHome = () => {
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
