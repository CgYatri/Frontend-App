import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FAQsScreen = ({ navigation }) => {
  const faqsData = [
    "Bus fare related Issues",
    "How do i submit feedback?",
    "I didn't receive receipt on my history",
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>FAQ's</Text>
          <View style={{ width: 24 }} />
        </View>
        <View style={styles.searchBarContainer}>
          <MaterialIcons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search Help topics" />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.faqSection}>
            {faqsData.map((faq, index) => (
              <TouchableOpacity key={index} style={styles.faqItem}>
                <Text style={styles.faqText}>{faq}</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' }, container: { flex: 1, backgroundColor: '#f7f7f7' }, header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee' }, headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' }, searchBarContainer: { backgroundColor: '#fff', borderRadius: 8, margin: 15, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, }, searchIcon: { marginRight: 10 }, searchInput: { flex: 1, height: 40 }, scrollView: { flexGrow: 1 }, faqSection: { backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 15, marginBottom: 15, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }, faqItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 15, paddingHorizontal: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }, faqText: { fontSize: 16, color: '#000', flex: 1 },
});
export default FAQsScreen;