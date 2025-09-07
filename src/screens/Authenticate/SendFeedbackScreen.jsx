import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, ScrollView, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SendFeedbackScreen = ({ navigation }) => {
  const [feedbackType, setFeedbackType] = useState('complaint');
  const [feedbackDescription, setFeedbackDescription] = useState('');

  const handleSubmit = () => {
    console.log('Feedback submitted:', { feedbackType, feedbackDescription });
    navigation.navigate('FeedbackSubmitted'); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Send Feedback</Text>
          <View style={{ width: 24 }} />
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.label}>Feedback Type</Text>
          <View style={styles.dropdownContainer}>
            <Text style={styles.dropdownText}>{feedbackType}</Text>
          </View>
          <Text style={styles.label}>Feedback Description</Text>
          <TextInput
            style={styles.descriptionInput}
            multiline={true}
            value={feedbackDescription}
            onChangeText={setFeedbackDescription}
            placeholder="Enter your feedback here..."
            placeholderTextColor="#999"
          />
        </ScrollView>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' }, container: { flex: 1, backgroundColor: '#f7f7f7', padding: 20 }, header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }, headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' }, scrollViewContent: { flexGrow: 1 }, label: { fontSize: 16, color: '#000', marginBottom: 8 }, dropdownContainer: { backgroundColor: '#e9e9e9', borderRadius: 5, padding: 15, marginBottom: 20 }, dropdownText: { color: '#000' }, descriptionInput: { backgroundColor: '#e9e9e9', borderRadius: 5, padding: 15, height: 150, textAlignVertical: 'top', fontSize: 16, color: '#000' }, submitButton: { backgroundColor: '#1e90ff', borderRadius: 8, padding: 15, alignItems: 'center', marginTop: 20 }, submitButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
export default SendFeedbackScreen;