import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HelpAndSupportScreen = ({ navigation }) => {
  const handleNavigation = (screenName) => {
    console.log(`Navigating to: ${screenName}`);
    navigation.navigate(screenName);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Help & Support</Text>
          <View style={{ width: 24 }} />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.menuSection}>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('SendFeedback')}>
              <View style={styles.menuItemContent}>
                <MaterialIcons name="send" size={24} color="#555" />
                <Text style={styles.menuItemText}>Send Feedback</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('FAQs')}>
              <View style={styles.menuItemContent}>
                <MaterialIcons name="question-answer" size={24} color="#555" />
                <Text style={styles.menuItemText}>FAQ's</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('ContactUs')}>
              <View style={styles.menuItemContent}>
                <MaterialIcons name="phone" size={24} color="#555" />
                <Text style={styles.menuItemText}>Contact Us</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' }, container: { flex: 1, backgroundColor: '#f7f7f7' }, header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee' }, headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' }, scrollView: { paddingTop: 15 }, menuSection: { backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 15, marginBottom: 15, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }, menuItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 15, paddingHorizontal: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }, menuItemContent: { flexDirection: 'row', alignItems: 'center', flex: 1 }, menuItemText: { fontSize: 16, marginLeft: 15, color: '#000' },
});
export default HelpAndSupportScreen;