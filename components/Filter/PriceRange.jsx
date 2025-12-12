import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";

const PriceRange = () => {
  const MIN = 200;
  const MAX = 2000;

  const [price, setPrice] = useState(1550);

  return (
    <View style={styles.container}>
      {/* Top row values */}
      <View style={styles.row}>
        <Text style={styles.value}>₹{MIN}</Text>
        <Text style={styles.value}>₹{price}</Text>
      </View>

      {/* Slider */}
      <Slider
        style={{ width: "100%" }}
        minimumValue={MIN}
        maximumValue={MAX}
        value={price}
        onValueChange={(v) => setPrice(Math.floor(v))}
        minimumTrackTintColor="#FF6B00"
        maximumTrackTintColor="#FCEEE5"
        thumbTintColor="#FF6B00"
      />

      {/* Bottom min/max */}
      <View style={styles.row}>
        <Text style={styles.minmax}>Min: ₹{MIN}</Text>
        <Text style={styles.minmax}>Max: ₹{MAX}</Text>
      </View>
    </View>
  );
};

export default PriceRange;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal : 30
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },

  value: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },

  minmax: {
    fontSize: 13,
    color: "#777",
  },
});
