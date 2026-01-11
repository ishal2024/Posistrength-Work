import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

/**
 * CORE SKELETON ITEM (Pulsing Block)
 */
const SkeletonItem = ({ style }) => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.3, duration: 800, useNativeDriver: true }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, [opacity]);

  return <Animated.View style={[styles.base, style, { opacity }]} />;
};

/**
 * FULL PAGE SKELETON COMPONENT
 * @param {string} screenType - 'search' or 'home'
 */
const SkeletonBlock = ({ screenType = 'search' }) => {
  
  // --- LAYOUT: BUS SEARCH RESULTS PAGE ---
  const SearchPageLayout = () => (
    <View style={styles.fullPage}>
      {/* Fake Header */}
      <View style={styles.headerPlaceholder}>
        <View style={styles.flexRowBetween}>
          <SkeletonItem style={{ width: 40, height: 40, borderRadius: 20 }} />
          <View style={{ flex: 1, marginHorizontal: 15 }}>
            <SkeletonItem style={{ width: '60%', height: 15, marginBottom: 8 }} />
            <SkeletonItem style={{ width: '40%', height: 10 }} />
          </View>
          <SkeletonItem style={{ width: 40, height: 40, borderRadius: 20 }} />
        </View>
      </View>

      {/* Date Filter Bar */}
      <View style={styles.filterBar}>
        <SkeletonItem style={styles.filterTab} />
        <SkeletonItem style={styles.filterTab} />
        <SkeletonItem style={styles.filterTab} />
      </View>

      {/* List of Bus Cards */}
      <ScrollView scrollEnabled={false} contentContainerStyle={{ padding: 16 }}>
        {[1, 2, 3, 4].map((_, i) => (
          <View key={i} style={styles.busCardSkeleton}>
            <View style={styles.flexRowBetween}>
              <SkeletonItem style={{ width: 120, height: 18 }} />
              <SkeletonItem style={{ width: 60, height: 20, borderRadius: 5 }} />
            </View>
            <View style={[styles.flexRowBetween, { marginTop: 20 }]}>
              <View style={{ alignItems: 'center' }}>
                <SkeletonItem style={{ width: 50, height: 15, marginBottom: 5 }} />
                <SkeletonItem style={{ width: 40, height: 10 }} />
              </View>
              <SkeletonItem style={{ width: '30%', height: 2 }} />
              <View style={{ alignItems: 'center' }}>
                <SkeletonItem style={{ width: 50, height: 15, marginBottom: 5 }} />
                <SkeletonItem style={{ width: 40, height: 10 }} />
              </View>
            </View>
            <View style={styles.cardFooter}>
                <SkeletonItem style={{ width: 80, height: 20 }} />
                <SkeletonItem style={{ width: 100, height: 35, borderRadius: 10 }} />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  // --- LAYOUT: APP HOME PAGE ---
  const HomePageLayout = () => (
    <View style={styles.fullPage}>
      {/* Hero Section / Search Box */}
      <View style={styles.homeHero}>
        <SkeletonItem style={styles.homeSearchBox} />
      </View>
      
      {/* Offers Section */}
      <View style={{ padding: 20 }}>
        <SkeletonItem style={{ width: 150, height: 20, marginBottom: 15 }} />
        <ScrollView horizontal scrollEnabled={false}>
          {[1, 2].map((_, i) => (
             <SkeletonItem key={i} style={styles.offerCard} />
          ))}
        </ScrollView>
      </View>

      {/* Vertical Content */}
      <View style={{ padding: 20 }}>
        <SkeletonItem style={{ width: 180, height: 20, marginBottom: 15 }} />
        {[1, 2].map((_, i) => (
           <View key={i} style={{ marginBottom: 15, flexDirection: 'row' }}>
             <SkeletonItem style={{ width: 80, height: 80, borderRadius: 10 }} />
             <View style={{ marginLeft: 15, flex: 1, justifyContent: 'center' }}>
                <SkeletonItem style={{ width: '80%', height: 15, marginBottom: 10 }} />
                <SkeletonItem style={{ width: '50%', height: 10 }} />
             </View>
           </View>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {screenType === 'search' ? <SearchPageLayout /> : <HomePageLayout />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  fullPage: {
    flex: 1,
  },
  base: {
    backgroundColor: '#E1E9EE',
    borderRadius: 6,
  },
  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  // --- Search Results Styles ---
  headerPlaceholder: {
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F5',
  },
  filterBar: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
    backgroundColor: '#F8F9FA',
  },
  filterTab: {
    width: '28%',
    height: 35,
    borderRadius: 20,
  },
  busCardSkeleton: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F1F3F5',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  cardFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      paddingTop: 15,
      borderTopWidth: 1,
      borderTopColor: '#F1F3F5',
  },

  // --- Home Page Styles ---
  homeHero: {
    height: 200,
    backgroundColor: '#FFF3E0', // Light orange tint to match theme
    padding: 20,
    justifyContent: 'center',
  },
  homeSearchBox: {
    width: '100%',
    height: 120,
    borderRadius: 15,
    backgroundColor: '#FFF',
  },
  offerCard: {
    width: 250,
    height: 120,
    borderRadius: 15,
    marginRight: 15,
  },
});

export default SkeletonBlock;