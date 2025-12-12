import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

const DepartureTime = () => {
  const options = [
    { title: "Morning", time: "6 AM - 12 PM" },
    { title: "Afternoon", time: "12 PM - 6 PM" },
    { title: "Evening", time: "6 PM - 12 AM" },
    { title: "Night", time: "12 AM - 6 AM" },
  ];

  const [selected, setSelected] = useState([]);

  function toggle(item) {
    if (selected.includes(item.title)) {
      setSelected(selected.filter((i) => i !== item.title));
    } else {
      setSelected([...selected, item.title]);
    }
  }

  return (
    <View style={styles.container}>
      {options.map((item, index) => {
        const active = selected.includes(item.title);

        return (
          <TouchableOpacity
            key={index}
            style={[styles.card, active && styles.activeCard]}
            onPress={() => toggle(item)}
            activeOpacity={0.9}
          >
            <Text style={[styles.title, active && styles.activeText]}>
              {item.title}
            </Text>
            <Text style={styles.time}>{item.time}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default DepartureTime;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal : 15
  },

  card: {
    width: "48%",
    borderWidth: 1.5,
    borderColor: "#E5E5E5",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "#fff",
  },

  activeCard: {
    borderColor: "#FF6B00",
    backgroundColor: "#FFF1E8",
  },

  title: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
    marginBottom: 4,
  },

  activeText: {
    color: "#FF6B00",
  },

  time: {
    fontSize: 13,
    color: "#777",
  },
});
