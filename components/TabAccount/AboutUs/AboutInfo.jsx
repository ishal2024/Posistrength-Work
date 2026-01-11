import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from './AboutInfoStyleSheet'
import { useSelector } from "react-redux";

const AboutInfo = () => {
  const { aboutData } = useSelector((state) => state.home)

  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, '').trim();
  };

  console.log(aboutData.about_img[0])

  return (
    <View style={styles.container}>
      <Image
        source=
        {{ uri: aboutData?.about_img[0] }}
        style={styles.logo}
      />

      <Text style={styles.text}>
        {stripHtml(aboutData?.description)}
      </Text>
    </View>
  );
};

export default AboutInfo;