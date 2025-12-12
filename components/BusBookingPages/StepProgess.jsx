import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {styles} from './StepProgessStyleSheet'

export default function StepProgress({ activeSteps }) {
  const steps = ["Seats" , "Pickup" , "Details" , "Verify" , "Payment" , "Ticket"]

  return (
    <View style={styles.container}>
      {steps.map((step, index) => {
        const isActive = activeSteps.includes(step);

        return (
          <View key={index} style={styles.stepWrap}>
            
            {/* Circle */}
            <View
              style={[
                styles.circle,
                isActive && styles.activeCircle,
              ]}
            />

            {/* Label */}
            <Text
              style={[
                styles.label,
                isActive && styles.activeLabel,
              ]}
            >
              {step} </Text>

            {/* Connector line (hide after last step) */}
            {index < steps.length - 1 && (
              <View
                style={[
                  styles.line,
                  activeSteps.includes(steps[index + 1]) &&
                    styles.activeLine,
                ]}
              />
            )}
          </View>
        );
      })}
    </View>
  );
}
