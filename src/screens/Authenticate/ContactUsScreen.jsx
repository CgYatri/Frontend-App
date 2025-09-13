import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ContactUsScreen = ({ navigation }) => {
  const contactInfo = [
    { label: 'Helpline number', value: '+91 8269434702' },
    { label: 'Support Email', value: 'cg.yatri@gmail.com' },
    { label: 'Office Address', value: 'Raipur,Sejbahar-CG' },
    { label: 'Support Hours', value: 'Everyday 9 AM - 5 PM' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Contact Us</Text>
          <TouchableOpacity style={styles.helpButton}>
            <Ionicons name="help-circle-outline" size={20} color="#000" />
            <Text style={styles.helpText}>Help</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Contact information</Text>
            {contactInfo.map((item, index) => (
              <View key={index} style={styles.infoItem}>
                <Text style={styles.infoLabel}>{item.label}</Text>
                <Text style={styles.infoValue}>{item.value}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' }, container: { flex: 1, backgroundColor: '#f7f7f7' }, header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee' }, headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' }, helpButton: { flexDirection: 'row', alignItems: 'center', padding: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 20 }, helpText: { marginLeft: 5, fontSize: 14, color: '#000' }, scrollView: { paddingTop: 15 }, infoSection: { backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 15, marginBottom: 15, padding: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }, sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#000', marginBottom: 15 }, infoItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }, infoLabel: { fontSize: 16, color: '#666' }, infoValue: { fontSize: 16, color: '#000', textAlign: 'right', flex: 1, marginLeft: 10 },
});
export default ContactUsScreen;