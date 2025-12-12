import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
import React from "react";
import { styles } from "./PopularRoutesStyleSheet";

const sampleRoutes = [
  {
    id: "1", from: "Mumbai", to: "Pune", price: "27.00",
    image: "https://imgs.search.brave.com/KymQ7M7fQdnfBQWtgLEDmvvIxkWwQeOeTdV19hs0CyA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9yb3ctd2hpdGUt/Ymx1ZS1jaXR5LWJ1/c2VzLXBhcmtlZC11/cmJhbi1kZXBvdC1j/bGVhci1zdW1tZXIt/ZGF5LXRyYW5zcG9y/dGF0aW9uLWNvbmNl/cHRfMTU2NzE5LTQw/NTUuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw"
  },
  {
    id: "2", from: "Bangalore", to: "Chennai", price: "32.00",
    image: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg"
  },
  {
    id: "3", from: "Mumbai", to: "Goa", price: "37.00",
    image: "https://images.pexels.com/photos/21014/pexels-photo.jpg"
  },
];

export default function PopularRoutes() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Popular Routes</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={sampleRoutes}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <Text style={styles.route}>{item.from} to {item.to}</Text>
            <Text style={styles.price}>₹{item.price}</Text>

            <TouchableOpacity style={styles.bookBtn}>
              <Text style={styles.bookText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
