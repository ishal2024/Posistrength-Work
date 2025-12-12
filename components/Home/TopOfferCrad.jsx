import { View, Text, ImageBackground , TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import {styles} from './TopOfferStyleSheet'
import { Feather } from '@expo/vector-icons'

const { width } = Dimensions.get("window");

const TopOfferCrad = ({data}) => {
  return (
    <View key={data.id} style={{ width }}>
      <ImageBackground
        source={{
          uri:
            "https://imgs.search.brave.com/zHFOZNFb_dplwmj897bGmAMIW8u5usgMtYhCTjppG9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzA3Lzc0LzQ3/LzM2MF9GXzYwNzc0/NDcwMl9GT0VIck1G/aUhZVnhFVkRmSWl4/MFo1N1BkRmRuSFVz/YS5qcGc",
        }}
        style={styles.cardBg}
        imageStyle={{ borderRadius: 16 }}
      >
        <View style={styles.overlay} />

        <Text style={styles.offerTitle}>{data.title}</Text>
        <Text style={styles.validText}>{data.valid}</Text>

        <TouchableOpacity style={styles.detailsBtn} activeOpacity={0.8}>
          <Feather name="tag" size={18} color="#fff" style={{ marginRight: 6 }} />
          <Text style={styles.detailsText}>View Details</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default TopOfferCrad