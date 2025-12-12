import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import {styles} from './HeaderStyleSheet'

const MyAccountHeader = () => {
  return (
    <View style = {styles.container}>
    <ImageBackground
      source={{uri : "https://imgs.search.brave.com/4bh24hkvvi5xtwVVfaXRUQq0V4y1NjFCcK-xR8l5r10/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/NDE2NDYzNC9waG90/by93aGl0ZS1idXMt/dHJhdmVsaW5nLW9u/LXRoZS1hc3BoYWx0/LXJvYWQtYXJvdW5k/LWxpbmUtb2YtdHJl/ZXMtaW4tcnVyYWwt/bGFuZHNjYXBlLWF0/LXN1bnNldC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZTdX/NG8yYWpSdUtXSUZr/ck83SW1rZ19hemw3/OWZPaTNzSjdlYWNE/RVVOUT0"}}  // ⭐ apni image lagao
      style={styles.headerBg}
      resizeMode="cover"
    >
      {/* Profile Row */}
      <View style={styles.profileRow}>
        <Image
          source={{uri : "https://imgs.search.brave.com/e4QmKWbrFaqFfK-lmElxn1v1VdMuaJMRK-Er4n0UOCQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzEv/NTMzLzc4OS9zbWFs/bC9hLXdoaXRlLXBh/c3Nlbmdlci1idXMt/dHJhdmVsaW5nLW9u/LWEtaGlnaHdheS1h/dC1zdW5zZXQtd2l0/aC10cmVlcy1pbi10/aGUtYmFja2dyb3Vu/ZC1vbi1hLWNsZWFy/LWRheS1mcmVlLXBo/b3RvLmpwZWc"}}   // ⭐ user profile image
          style={styles.avatar}
        />

        <View>
          <Text style={styles.userName}>Vishal Jha</Text>
          <Text style={styles.email}>jhav8422@gmail.com</Text>
        </View>
      </View>
    </ImageBackground>
    </View>
  );
};

export default MyAccountHeader;
