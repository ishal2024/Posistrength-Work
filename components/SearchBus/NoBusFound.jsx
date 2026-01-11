import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Dimensions, 
  SafeAreaView 
} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const NoBusFound = ({ onModifySearch }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        {/* --- Illustration Section --- */}
        <View style={styles.illustrationContainer}>
          {/* Decorative background circles to create depth */}
          <View style={styles.circleOuter} />
          <View style={styles.circleMiddle} />
          <View style={styles.circleInner}>
            <MaterialCommunityIcons 
                name="bus-marker" 
                size={80} 
                color="#FF5722" 
            />
          </View>
          {/* Small accent floating icon */}
          <View style={styles.floatingIcon}>
            <Ionicons name="search" size={24} color="#FFFFFF" />
          </View>
        </View>

        {/* --- Text Content --- */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>No Buses Found</Text>
          <Text style={styles.subtitle}>
            We couldn't find any buses for your selected route and date. 
            Don't worry, try changing your travel date or check a nearby city.
          </Text>
        </View>


        {/* Helpful Tip */}
        {/* <TouchableOpacity style={styles.tipContainer}>
            <Text style={styles.tipText}>Try searching for tomorrow instead?</Text>
        </TouchableOpacity>
         */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: width * 0.85,
    alignItems: 'center',
    padding: 20,
  },
  illustrationContainer: {
    height: 220,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  circleOuter: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#FFF3E0',
    opacity: 0.4,
  },
  circleMiddle: {
    position: 'absolute',
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#FFF3E0',
    opacity: 0.7,
  },
  circleInner: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10, // Shadow for Android
    shadowColor: '#FF5722', // Shadow for iOS
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  floatingIcon: {
    position: 'absolute',
    right: 30,
    top: 30,
    backgroundColor: '#FF5722',
    padding: 10,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2D3436',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#636E72',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FF5722',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 16,
    elevation: 8,
    shadowColor: '#FF5722',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  btnIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  tipContainer: {
      marginTop: 25,
      paddingVertical: 10,
  },
  tipText: {
      color: '#FF5722',
      fontSize: 14,
      fontWeight: '600',
      textDecorationLine: 'underline',
  }
});

export default NoBusFound;