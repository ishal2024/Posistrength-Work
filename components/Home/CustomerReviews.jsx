import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

// Mock Data matching the required structure
const REVIEW_DATA = [
  {
    "id": 6,
    "name": "Rohit Sharma",
    "user_img": "https://i.pravatar.cc/150?u=rohit", // Placeholder for assets/images/review_img/1737725419.jpg
    "review": "<p>best place to book the bus with good price list. The seats were comfortable and the staff was very helpful throughout the journey.</p>",
    "created_at": "2025-01-24T08:00:19.000000Z",
    "updated_at": "2025-01-24T08:00:19.000000Z"
  },
  {
    "id": 7,
    "name": "Sneha Kapoor",
    "user_img": "https://i.pravatar.cc/150?u=sneha",
    "review": "<div>Excellent service! The bus was on time and very clean. Highly recommend for long distance travel.</div>",
    "created_at": "2025-02-12T10:30:00.000000Z",
    "updated_at": "2025-02-12T10:30:00.000000Z"
  },
  {
    "id": 8,
    "name": "Arjun Varma",
    "user_img": "https://i.pravatar.cc/150?u=arjun",
    "review": "<p>Very easy to use app interface. Booked my tickets in under 2 minutes. Great discounts too!</p>",
    "created_at": "2025-03-01T14:15:45.000000Z",
    "updated_at": "2025-03-01T14:15:45.000000Z"
  }
];

const CustomerReviews = () => {

    const {customerFeedback} = useSelector((state) => state.home)
 
  return (
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>What Our Clients Say</Text>
        <Text style={styles.subtitle}>Real feedback from our happy travelers</Text>
      </View>

      {/* Horizontal List */}
      <FlatList
        data={customerFeedback}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderReviewCard}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listPadding}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={width * 0.8 + 20} // Card width + margin
      />
    </View>
  );
};

// Helper function to strip HTML tags
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, '').trim();
  };

  // Helper to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const renderReviewCard = ({ item }) => (
    <View style={styles.card}>
      {/* Top Section: Avatar & Name */}
      <View style={styles.cardHeader}>
        <Image source={{ uri: "https://www.dev.pssplbooking.com/" + item.user_img }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.dateText}>{formatDate(item.created_at)}</Text>
        </View>
        <View style={styles.quoteIcon}>
          <FontAwesome name="quote-right" size={20} color="#FFE0B2" />
        </View>
      </View>

      {/* Star Rating Section */}
      <View style={styles.ratingRow}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Ionicons key={star} name="star" size={16} color="#FF9F43" style={{ marginRight: 2 }} />
        ))}
      </View>

      {/* Review Content */}
      <Text style={styles.reviewText} numberOfLines={4}>
        "{stripHtml(item.review)}"
      </Text>
      
      {/* Visual Indicator */}
      <View style={styles.verifiedRow}>
        <Ionicons name="checkmark-circle" size={14} color="#4CAF50" />
        <Text style={styles.verifiedText}>Verified Traveler</Text>
      </View>
    </View>
  );

export default CustomerReviews

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 25,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2D3436',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#636E72',
    marginTop: 4,
    fontWeight: '500',
  },
  listPadding: {
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 15, // Space for shadow
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: width * 0.8,
    borderRadius: 20,
    padding: 20,
    marginRight: 20,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Elevation for Android
    elevation: 5,
    borderWidth: 1,
    borderColor: '#F1F3F5',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#F1F3F5',
  },
  userInfo: {
    marginLeft: 12,
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2D3436',
  },
  dateText: {
    fontSize: 12,
    color: '#9E9E9E',
    marginTop: 2,
  },
  quoteIcon: {
    opacity: 0.8,
  },
  ratingRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  reviewText: {
    fontSize: 14,
    color: '#4A4A4A',
    lineHeight: 22,
    fontStyle: 'italic',
    minHeight: 66, // Keeps cards uniform
  },
  verifiedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F1F3F5',
  },
  verifiedText: {
    fontSize: 11,
    color: '#4CAF50',
    fontWeight: '700',
    marginLeft: 4,
    textTransform: 'uppercase',
  },
});
