import React from "react";
import {Modal,View,Text,StyleSheet,TouchableOpacity} from "react-native";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ErrorDialogBox = ({title , message , onCancel}) => {

    const router = useRouter()

  return (
    <Modal transparent  animationType="fade">
      <BlurView intensity={40} tint="dark" style={styles.overlay}>
        <View style={styles.dialog}>
          
          {/* Icon */}
          <View style={styles.iconContainer}>
            <MaterialIcons name="error" size={28} color="#FF3B30" />
          </View>

          {/* Title */}
          <Text style={styles.title}>{title} </Text>

          {/* Message */}
          <Text style={styles.message}>{message} </Text>

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => onCancel()}
              activeOpacity={0.8}
            >
              <Text style={styles.cancelText}>Ok </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

export default ErrorDialogBox;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  dialog: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 10,
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFE5E5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },

  message: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },

  buttonRow: {
    flexDirection: "row",
    gap: 12,
  },

  cancelBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },

  cancelText: {
    color: "#333",
    fontSize: 16,
  },

  loginBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#FF3B30",
    alignItems: "center",
  },

  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
