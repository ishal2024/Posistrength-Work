import { Tabs } from 'expo-router';
import React from 'react';
import {FontAwesome , Entypo , AntDesign} from '@expo/vector-icons'
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
 <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF7A00",      // Orange active color
        tabBarInactiveTintColor: "#808080",    // Gray inactive
        tabBarStyle: {
          backgroundColor: "#FFFFFF",          // White tab bar background
          borderTopWidth: 1,
          borderTopColor: "rgba(0,0,0,0.08)",
          height: 60 +  insets.bottom,  // Add safe area height
          paddingBottom:  insets.bottom, 
          paddingTop:  6 ,
          
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: -2,
        },
      }}
    >
      {/* HOME TAB */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol name="house.fill" size={24} color={color} />
          ),
        }}
      />

      {/* BOOKINGS TAB */}
      <Tabs.Screen
        name="bookings"
        options={{
          title: "Bookings",
          tabBarIcon: ({ color }) => (
            <AntDesign name="unordered-list" size={24} color={color} />
          ),
        }}
      />

      {/* HELP TAB */}
      <Tabs.Screen
        name="help"
        options={{
          title: "Help",
          tabBarIcon: ({ color }) => (
            <Entypo name="help-with-circle" size={24} color={color} />
          ),
        }}
      />

      {/* ACCOUNT TAB */}
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
