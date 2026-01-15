import { View, Text, Image, TouchableOpacity, FlatList, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./PopularRoutesStyleSheet";
import { popularRoutes } from "@/axios/searchBus";
import { useDispatch } from "react-redux";
import { addFromPoint, addToPoint, addDate } from "@/redux_store/FindBusSlicer";
import { useRouter } from "expo-router";


const COLORS = {
  primary: '#FF5722', // Deep Orange
  secondary: '#FFCCBC',
  white: '#FFFFFF',
  background: '#F8F9FA',
  textDark: '#2D3436',
  textLight: '#636E72',
  accent: '#FF9F43',
  shadow: '#000000',
};

export default function PopularRoutes() {


  const [popRoutes, setPopRoutes] = useState([])
  const dispatch = useDispatch()
  const router = useRouter()

  async function fetchPopularRoutes() {
    try {
      const res = await popularRoutes()
      if (res?.data?.status)
        setPopRoutes(res?.data?.data)
    } catch (error) {
      console.log(error?.message)
    }
  }

  function handleSeachPopularRouteBus(route) {
    const date = new Date();
    const formatted =
      date.getDate().toString().padStart(2, "0") + "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") + "-" +
      date.getFullYear();

    dispatch(addFromPoint(route?.from_city))
    dispatch(addToPoint(route?.to_city))
    dispatch(addDate(formatted))
    router.push('/(search)/searchbus')
  }

  useEffect(() => {
    fetchPopularRoutes();
  }, []);

  console.log(popRoutes)

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.headerRow}>
          <Text style={styles.heading}>Popular Routes</Text>
          {/* <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity> */}
        </View>

        <FlatList
          horizontal
          data={popRoutes}
          keyExtractor={(item) => String(item?.id)}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => (
            <TouchableOpacity 
            onPress={() => handleSeachPopularRouteBus(item)}
            style={styles.routeCard}>
              <Image source={{ uri: item?.image_url }} style={styles.routeImage} />
              <View style={styles.routeInfo}>
                <Text style={styles.routeName}>{item?.route}</Text>
              </View>
            </TouchableOpacity>
          )}
        />

      </View>

    </>
  );
}
