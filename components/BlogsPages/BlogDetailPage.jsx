import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './BlogDetailPageStyleSheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';



const RenderHTML = ({ htmlString, baseStyle }) => {
  if (!htmlString) return null;

  const cleanContent = htmlString
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '') 
    .trim();

  return <Text style={[styles.descriptionText, baseStyle]}>{cleanContent}</Text>;
};

const BlogDetailPage = () => {

  const {blog} = useLocalSearchParams()
  const [blogData , setBlogData] = useState({})

  function handleBlogData(){
    setBlogData(JSON.parse(blog))
  }

  // Format Date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
     handleBlogData()
  } , [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {/* --- Hero Image Section --- */}
        <View style={styles.heroContainer}>
          <Image 
            source={{ uri: "https://www.dev.pssplbooking.com/" + blogData.blog_img }} 
            style={styles.heroImage} 
            resizeMode="cover"
          />
          <View style={styles.imageOverlay} />
          
          {/* Back Button Overlay */}
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>

          {/* Floating Category Tag */}
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{blogData.title}</Text>
          </View>
        </View>

        {/* --- Content Section --- */}
        <View style={styles.contentWrapper}>
          <View style={styles.headerInfo}>
            <Text style={styles.mainHeading}>{blogData.heading}</Text>
            
            <View style={styles.metaRow}>
              <View style={styles.authorSection}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>G</Text>
                </View>
                <Text style={styles.authorName}>Expressway Editorial</Text>
              </View>
              <View style={styles.dateSection}>
                <MaterialCommunityIcons name="clock-outline" size={16} color="#777" />
                <Text style={styles.dateText}>{formatDate(blogData.created_at)}</Text>
              </View>
            </View>

            {/* Sub-heading Section */}
            {blogData.sub_heading && (
              <View style={styles.subHeadingContainer}>
                <RenderHTML 
                  htmlString={blogData.sub_heading} 
                  baseStyle={styles.subHeadingText} 
                />
              </View>
            )}
          </View>

          {/* --- Description Section --- */}
          <View style={styles.articleBody}>
            <View style={styles.quoteBorder} />
            <RenderHTML htmlString={blogData.description} />
          </View>

          {/* Share / Interaction Section */}
          <View style={styles.footerActions}>
            <Text style={styles.shareTitle}>Enjoyed the story?</Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.actionBtn}>
                <Ionicons name="heart-outline" size={22} color="#FF5722" />
                <Text style={styles.actionBtnText}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <Ionicons name="share-social-outline" size={22} color="#FF5722" />
                <Text style={styles.actionBtnText}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default BlogDetailPage;