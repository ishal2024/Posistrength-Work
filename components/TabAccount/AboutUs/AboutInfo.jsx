import React from "react";
import { View, Text, Image } from "react-native";
import {styles} from './AboutInfoStyleSheet'

const AboutInfo = () => {
  return (
    <View style={styles.container}>
      <Image
        source=
        {{ uri: "https://imgs.search.brave.com/INlEiuBCnZS9in0s8mBrhMwl34uArsnZYL2PHUcUlzY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvcmVhbGlzdGlj/LWJ1cy12ZWN0b3It/aWxsdXN0cmF0aW9u/LWNvbmNlcHRfMTI1/MzIwMi0xOTE3Mi5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA" }}
        style={styles.logo}
      />

      <Text style={styles.text}>
        We are express bus - world's largest online bus-ticketing organization.
        At redBus, you can check bus schedules, select your favorite bus,
        view seat layout, pay and get your bus ticket - All with a few clicks
        of your mouse or a few taps on your phone! redBus has over 36 million
        happy customers with 3500+ operators and has sold more than 220 million
        tickets globally!{"\n"}
        Book with us for a quick and hassle-free bus booking experience!
      </Text>
    </View>
  );
};

export default AboutInfo;