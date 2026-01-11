import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './BlogsPageStyleSheet';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import {allBlogsData} from '../../axios/homePage'
import { useRouter } from 'expo-router';
import SkeletonBlock from '../../constants/SkeletonBlock'

const { width } = Dimensions.get('window');

// Helper function to strip HTML tags from the description
const stripHtml = (html = "") => {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
};



const BlogPage = () => {
  const [blogData , setBlogData] = useState([])
  // const router = useRouter()
  async function handleBlogData(){
      try {
        const res = await allBlogsData()
        if(res?.data?.blogs){
          console.log(res?.data?.blogs)
          setBlogData(res?.data?.blogs)
        }
      } catch (error) {
        console.log(error?.message)
      }
    }

    useEffect(() => {
       handleBlogData()
    } , [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={30} color="bla" />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>Travel Stories</Text>
          <Text style={styles.headerSubtitle}>Explore the world through our lens</Text>
        </View>
      </View>

      {/* Stories List */}
      {blogData.length == 0 ? <SkeletonBlock /> : <FlatList
        data={blogData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderStoryCard}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />}

      

    </SafeAreaView>
  );
};



export default BlogPage;

  const renderStoryCard = ({ item }) => {

    const router = useRouter()
    
    const date = new Date(item.created_at);
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    

    return (
      <TouchableOpacity activeOpacity={0.95} style={styles.card} onPress={() => router.push({
        pathname : '/(blogs)/blogDetail',
        params : {
          blog : JSON.stringify(item)
        }
      })}>
        {/* Story Image */}
        <Image 
          source={{ uri: "https://www.dev.pssplbooking.com/" + item.blog_img }} 
          style={styles.cardImage} 
        />
        
        {/* Content Container */}
        <View style={styles.cardContent}>
          <View style={styles.metaRow}>
            <View style={styles.dateContainer}>
              <MaterialCommunityIcons name="calendar-month-outline" size={14} color="#FF5722" />
              <Text style={styles.dateText}>{formattedDate}</Text>
            </View>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>Adventure</Text>
            </View>
          </View>

          <Text style={styles.heading}>{item.heading}</Text>
          
          <Text style={styles.description} numberOfLines={3}>
            {stripHtml(item.description)}
          </Text>

          <View style={styles.cardFooter}>
            <Text style={styles.readMore}>Read Full Story</Text>
            <Ionicons name="arrow-forward-circle" size={24} color="#FF5722" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };