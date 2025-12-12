import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { faqData } from './FAQData';
import FAQCard from './FAQCard';
import {styles} from './FAQStyleSheet'

const FAQ = () => {

  const categoryWiseData = {};

  faqData.map((item) => {
    if (item.category in categoryWiseData) {
      categoryWiseData[item.category].push({
        question: item.question,
        answer: item.answer,
      });
    } else {
      categoryWiseData[item.category] = [
        {
          question: item.question,
          answer: item.answer,
        },
      ];
    }
  });

  const topics = Object.keys(categoryWiseData);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Frequently Asked Questions</Text>

      {topics.map((cat) => (
        <View key={cat}>
          {/* Category Title */}
          <Text style={styles.category}>{cat}</Text>

          {/* Render all questions under this category */}
          {categoryWiseData[cat].map((faq, index) => (
            <FAQCard key={index} faq={faq} />
          ))}
        </View>
      ))}
    </View>
  );
};

export default FAQ;

