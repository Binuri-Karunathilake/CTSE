import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');

  const handleSendFeedback = () => {
    // Send feedback to server or do something else with it
    console.log(feedback);
    setFeedback('');
    alert('Thank you for your feedback!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Feedback</Text>
      <TextInput
        style={styles.input}
        value={feedback}
        onChangeText={setFeedback}
        placeholder="Type your feedback here..."
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Send Feedback" onPress={handleSendFeedback} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
  },
});

export default FeedbackScreen;
