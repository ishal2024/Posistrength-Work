import { useRouter } from 'expo-router';
import {styles} from './LatestTravelStoriesStyleSheet'

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.75; // Shows part of the next card

const TravelStories = () => {
  
  const router = useRouter()
  const {blogData} = useSelector((state) => state?.home)

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Latest Travel Stories</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllBtn} onPress={() => router.push('/(blogs)/blogs')}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={blogData}
        renderItem={renderStoryCard}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={CARD_WIDTH + 20} // Card width + margin
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
};


export default TravelStories;



// Function to format the date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};
// Function to strip HTML tags for preview text
const stripHtml = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, '').trim();
};

 const renderStoryCard = ({ item }) => (
    <TouchableOpacity activeOpacity={0.9} style={styles.card}>
      <Image 
        source={{ uri: "https://www.dev.pssplbooking.com/" + item.blog_img }} 
        style={styles.cardImage} 
        resizeMode="cover"
      />
      
      <View style={styles.cardContent}>
        <Text style={styles.dateText}>{formatDate(item.created_at)}</Text>
        <Text style={styles.cardHeading} numberOfLines={1}>
          {item.heading}
        </Text>
        <Text style={styles.cardDescription} numberOfLines={2}>
          {stripHtml(item.sub_heading)}
        </Text>
        
        <View style={styles.footerRow}>
          <Text style={styles.readMoreText}>Read More</Text>
          <View style={styles.readMoreDot} />
        </View>
      </View>
    </TouchableOpacity>
  );

