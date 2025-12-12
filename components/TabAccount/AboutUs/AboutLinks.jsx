import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {Entypo, Ionicons, MaterialIcons , MaterialCommunityIcons, FontAwesome, Feather} from '@expo/vector-icons'
import {styles} from './AboutLinksStyleSheets'

const AboutLinks = () => {
  const links = [
    { title: "Blog", icon: <MaterialIcons name="article" size={22} color="#000" /> },
    { title: "Share with friends", icon: <Entypo name="share" size={22} color="#000" /> },
    { title: "Privacy policy", icon: <MaterialIcons name="privacy-tip" size={22} color="#000" /> },
    { title: "Terms and conditions", icon: <Ionicons name="information-circle" size={22} color="#000" /> },
    { title: "User Agreement", icon: <Ionicons name="document-lock" size={22} color="#000" /> },
    { title: "Licenses", icon: <FontAwesome name="drivers-license-o" size={22} color="#000" /> },
  ];

  return (
    <View style={styles.container}>
      {links.map((item, index) => (
        <TouchableOpacity key={index} style={styles.row}>
          <View style={styles.left}>
            {item.icon}
            <Text style={styles.title}>{item.title}  </Text>
          </View>
          <Feather name="chevron-right" size={22} color="#444" />
        </TouchableOpacity>
      ))}

      <Text style={styles.version}>V81.1.51</Text>
    </View>
  );
};

export default AboutLinks;


