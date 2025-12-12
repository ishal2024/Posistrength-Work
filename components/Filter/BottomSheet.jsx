import React, { useRef, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";

const BottomSheet = ({ visible, onClose, children }) => {
  const slideAnim = useRef(new Animated.Value(0)).current; // 0 = hidden
  const screenHeight = Dimensions.get("window").height;

  useEffect(() => {
    if (visible) {
      // slide up
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      // slide down
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  }, [visible]);

const bottom = slideAnim.interpolate({
  inputRange: [0, 1],
  outputRange: [-screenHeight * 0.85, 0],  // 85% sheet height
});

  return (
    <>
      {/* Background dim */}
      {visible && (
        <Pressable style={styles.backdrop} onPress={onClose} />
      )}

      {/* Bottom Sheet */}
      <Animated.View style={[styles.sheet, { bottom }]}>
        {children}
      </Animated.View>
    </>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 10,
  },

  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "85%", 
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    zIndex: 20,
  },
});
