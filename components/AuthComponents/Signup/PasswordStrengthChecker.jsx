import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./PasswordStrengthCheckerStyleSheet";

export default function PasswordStrengthChecker({password , setPassword}) {

  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[\W_]/.test(password), 
  };

  return (
    <View style = {styles.container}>
      {/* Password Input */}
      <TextInput
        style={[
          styles.input,
        ]}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="•••••••••••••"
          placeholderTextColor="#999"
      />

      {/* Checker Box */}
      {password.length > 0 && (
        <View style={styles.checkBox}>
          <CheckItem label="Minimum 8 characters " ok={checks.length} />
          <CheckItem label="At least one uppercase letter " ok={checks.uppercase} />
          <CheckItem label="At least one number " ok={checks.number} />
          <CheckItem label="At least one special character " ok={checks.special} />
        </View>
      )}
    </View>
  );
}

/* Single Check Row */
function CheckItem({ label, ok }) {
  return (
    <View style={styles.row}>
      <Feather
        name={ok ? "check-circle" : "x-circle"}
        size={18}
        color={ok ? "green" : "red"}
      />
      <Text style={styles.rowText}>{label}</Text>
    </View>
  );
}
