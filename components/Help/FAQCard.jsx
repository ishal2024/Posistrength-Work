import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {styles} from './FAQStyleSheet'
import { Feather } from '@expo/vector-icons';

const FAQCard = ({faq}) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => setOpen(!open)}
        activeOpacity={0.8}
      >
        <Text style={styles.question}>{faq?.question}</Text>
        <Feather
          name={open ? "chevron-up" : "chevron-down"}
          size={20}
          color="#333"
        />
      </TouchableOpacity>

      {open && (
        <Text style={styles.answer}>
          {faq.answer}
        </Text>
      )}
    </View>
  );
}

export default FAQCard