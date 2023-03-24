import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Help</Text>
      <Text style={styles.sectionText}>
        If you have any questions or issues with our app, please reach out to
        our customer support team at support@myshoppingapp.com.
      </Text>
      <Text style={styles.sectionTitle}>FAQs</Text>
      <View style={styles.faqContainer}>
        <Text style={styles.faqQuestion}>Q: How do I add items to my cart?</Text>
        <Text style={styles.faqAnswer}>
          A: To add an item to your cart, simply navigate to the product page and
          click the "Add to Cart" button.
        </Text>
        <Text style={styles.faqQuestion}>Q: How do I remove items from my cart?</Text>
        <Text style={styles.faqAnswer}>
          A: To remove an item from your cart, navigate to the cart screen and
          click the "Remove" button next to the item you want to remove.
        </Text>
        <Text style={styles.faqQuestion}>Q: How do I checkout?</Text>
        <Text style={styles.faqAnswer}>
          A: To checkout, navigate to the cart screen and click the "Checkout"
          button. Follow the prompts to enter your shipping and payment
          information.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
    sectionText: {
      marginBottom: 20,
      fontSize: 16,
      lineHeight: 24,
      color: '#555',
    },
    faqContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 20,
      backgroundColor: '#f7f7f7',
    },
    faqQuestion: {
      fontWeight: 'bold',
      marginBottom: 10,
      fontSize: 16,
      color: '#333',
    },
    faqAnswer: {
      marginBottom: 20,
      fontSize: 16,
      lineHeight: 24,
      color: '#555',
    },
  });
  

export default HelpScreen;
