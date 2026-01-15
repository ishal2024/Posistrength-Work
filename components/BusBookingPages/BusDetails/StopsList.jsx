import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

// Sample Data based on your requirements
const STOPS_DATA = [
  { city_name: "New Delhi", arrival_time: "10:00 PM", distance: "0.00" },
  { city_name: "Mathura", arrival_time: "12:30 AM", distance: "160.00" },
  { city_name: "Agra", arrival_time: "03:00 AM", distance: "60.00" },
  { city_name: "Lucknow", arrival_time: "08:30 AM", distance: "335.00" },
  { city_name: "Varanasi", arrival_time: "02:00 PM", distance: "320.00" },
];

const StopListSection = () => {
  const {busData} = useSelector((state) => state?.booking)
  
  const renderItem = ({ item, index }) => {


    return (
      <View style={styles.stopWrapper}>
        {/* --- Timeline Distance Segment --- */}
        {/* Only show distance ABOVE the stop, starting from the second stop */}
        {index !== 0 && (
          <View style={styles.distanceContainer}>
            <View style={styles.verticalLine} />
            <View style={styles.distanceBadge}>
              <Text style={styles.distanceText}>— {parseFloat(item.distance).toFixed(0)} km —</Text>
            </View>
          </View>
        )}

        {/* --- Stop Detail Row --- */}
        <View style={styles.stopRow}>
          {/* Arrival Time */}
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{item.arrival_time}</Text>
          </View>

          {/* Timeline Dot and Line */}
          <View style={styles.timelineColumn}>
            <View style={styles.orangeDot}>
                <View style={styles.innerDot} />
            </View>
            {/* If it's the last stop, we still show a small line segment to maintain the "Last stop must use orange line" requirement */}
            
          </View>

          {/* City Name */}
          <View style={styles.cityContainer}>
            <Text style={styles.cityNameText}>{item.city_name}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Stops List</Text>
      
      <FlatList
        data={busData?.stops_list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false} // Usually nested in a ScrollView in Bus Detail Pages
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
    // paddingHorizontal: 20,
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  listPadding: {
    paddingHorizontal: 20,
  },
  stopWrapper: {
    width: '100%',
  },
  stopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  timeContainer: {
    width: 80,
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  timeText: {
    fontSize: 13,
    color: '#666666',
    fontWeight: '600',
  },
  timelineColumn: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  orangeDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FF6B00', // Primary Orange
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    borderWidth: 3,
    borderColor: '#FFE0CC', // Light orange halo
  },
  innerDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
  },
  cityContainer: {
    flex: 1,
    paddingLeft: 15,
  },
  cityNameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222222',
  },
  distanceContainer: {
    height: 50, // Height of the space between stops
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalLine: {
    position: 'absolute',
    left: 80 + 15 - 1, // Matches timeContainer width + alignment
    width: 2,
    height: '100%',
    backgroundColor: '#FF6B00',
    zIndex: 1,
    marginLeft:0, // Center it with the dot
  },
  distanceBadge: {
    marginLeft: 110, // Positions text to the right of the line
    backgroundColor: '#FFF5EF',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFDABF',
  },
  distanceText: {
    fontSize: 11,
    color: '#FF6B00',
    fontWeight: '700',
    fontStyle: 'italic',
  },
});

export default StopListSection;