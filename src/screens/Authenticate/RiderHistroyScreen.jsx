import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RideHistoryScreen = ({ navigation }) => {
  const rideHistoryData = [
    { id: '1', type: 'Auto Ride', from: 'Pandri', to: 'Railway Station', status: 'Cancelled', fare: '80', busNo: 'Bus CG10-4567', date: 'June 28, 2025', time: '10:00 AM | Reached: 10:20 AM' },
    { id: '2', type: 'Bus Ride', from: 'Raipur City', to: 'Pandri', status: 'Completed', fare: '50', busNo: 'Bus CG10-4567', date: 'June 28, 2025', time: '10:00 AM | Reached: 10:20 AM' },
    { id: '3', type: 'Cab Ride', from: 'Telibandha', to: 'Magneto Mall', status: 'Completed', fare: '120', busNo: 'Cab', date: 'September 05, 2025', time: '04:30 PM | Reached: 04:50 PM' },
  ];

  const renderRideItem = (item) => (
    <View key={item.id} style={styles.rideCard}>
      <View style={styles.rideHeader}>
        <View style={styles.rideInfoLeft}>
          <Ionicons name="location-sharp" size={18} color="#000" />
          <Text style={styles.rideLocation}>{item.from} → {item.to}</Text>
        </View>
        <Text style={[styles.rideStatus, item.status === 'Completed' ? styles.completedStatus : styles.cancelledStatus]}>
          {item.status}
        </Text>
      </View>
      <View style={styles.rideBody}>
        <Text style={styles.busInfo}>{item.busNo}</Text>
        <Text style={styles.fare}>₹{item.fare}</Text>
      </View>
      <View style={styles.rideFooter}>
        <Text style={styles.rideDate}>{item.date}</Text>
        <Text style={styles.rideTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Ride History</Text>
          <TouchableOpacity style={styles.helpButton}>
            <Ionicons name="help-circle-outline" size={20} color="#000" />
            <Text style={styles.helpText}>Help</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollViewContent}>
          <View style={styles.filterTabs}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {['All', 'Bus', 'Auto', 'Cab', 'Rickshaw'].map((tab, index) => (
                <TouchableOpacity key={index} style={[styles.tab, index === 0 && styles.activeTab]}>
                  <Text style={[styles.tabText, index === 0 && styles.activeTabText]}>{tab}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={styles.noticeContainer}>
            <Text style={styles.historyNotice}>
              Ride history is available for last 2 months.
            </Text>
            <TouchableOpacity style={styles.requestButton}>
              <MaterialIcons name="edit" size={16} color="blue" />
              <Text style={styles.requestButtonText}>Request Older History</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rideHistorySection}>
            {rideHistoryData.map(renderRideItem)}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' }, container: { flex: 1, backgroundColor: '#fff' }, header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee' }, headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' }, helpButton: { flexDirection: 'row', alignItems: 'center', padding: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 20 }, helpText: { marginLeft: 5, fontSize: 14, color: '#000' }, scrollViewContent: { backgroundColor: '#f7f7f7' }, filterTabs: { backgroundColor: '#fff', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#eee', marginBottom: 15 }, tab: { paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, backgroundColor: '#f0f0f0', marginHorizontal: 5 }, activeTab: { backgroundColor: '#1e90ff' }, tabText: { fontSize: 14, color: '#000' }, activeTabText: { color: '#fff' }, noticeContainer: { backgroundColor: '#f7f7f7', paddingVertical: 15, paddingHorizontal: 15, marginBottom: 15, alignItems: 'center' }, historyNotice: { textAlign: 'center', marginBottom: 15, color: '#666' }, requestButton: { flexDirection: 'row', alignSelf: 'center', alignItems: 'center', backgroundColor: '#e3f2fd', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, }, requestButtonText: { color: 'blue', marginLeft: 5, fontWeight: '500' }, rideHistorySection: { backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 15, paddingVertical: 15, marginBottom: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }, rideCard: { paddingHorizontal: 15, paddingVertical: 10, marginBottom: 10 }, rideInfoLeft: { flexDirection: 'row', alignItems: 'center' }, rideHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }, rideLocation: { fontSize: 16, fontWeight: 'bold', marginLeft: 5 }, rideStatus: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, fontSize: 12, fontWeight: 'bold', color: '#fff' }, completedStatus: { backgroundColor: '#4caf50' }, cancelledStatus: { backgroundColor: '#f44336' }, rideBody: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }, busInfo: { color: '#666' }, fare: { fontSize: 18, fontWeight: 'bold' }, rideFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, rideDate: { color: '#999', fontSize: 12 }, rideTime: { color: '#999', fontSize: 12 },
});
export default RideHistoryScreen;