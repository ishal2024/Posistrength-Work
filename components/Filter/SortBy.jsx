import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const SortBy = () => {

    const [sortBy, setSortBy] = useState(null)
    const options = ["Price: Low to High", "Price: High to Low", "Duration", "Rating"];

    return (
        <View style={styles.container}>
            {options.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.row}
                    onPress={() => setSortBy(item)}
                >
                    <View style={styles.radioOuter}>
                        {sortBy == item && <View style={styles.radioInner} />}
                    </View>

                    <Text style={styles.label}>{item}   </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default SortBy

const styles = StyleSheet.create({
    container: {
    marginTop: 10,
    paddingHorizontal: 15,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },

  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ff6b00",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#ff6b00",
  },

})