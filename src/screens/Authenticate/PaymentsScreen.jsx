import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PaymentsScreen = ({ navigation }) => {
  const paymentHistoryData = [
    { id: '1', date: 'June 28, 2025', route: 'Raipur City → Pandri | Bus CG10-4567', amount: '34', paymentMethod: 'UPI', status: 'Success', txnId: 'P93Z456' },
    { id: '2', date: 'June 28, 2025', route: 'Raipur City → Pandri | Bus CG10-4567', amount: '34', paymentMethod: 'Wallet', status: 'Failed', txnId: 'P93Z456' },
    { id: '3', date: 'June 28, 2025', route: 'Raipur City → Pandri | Bus CG10-4567', amount: '34', paymentMethod: 'UPI', status: 'Success', txnId: 'P93Z456' },
    { id: '4', date: 'June 28, 2025', route: 'Raipur City → Pandri | Bus CG10-4567', amount: '34', paymentMethod: 'UPI', status: 'Success', txnId: 'P93Z456' },
  ];

  const renderPaymentItem = (item) => (
    <View key={item.id} style={styles.paymentCard}>
      <View style={styles.cardTop}>
        <Text style={styles.cardDate}>{item.date}</Text>
        <Text style={styles.cardAmount}>₹{item.amount}</Text>
      </View>
      <View style={styles.cardMiddle}>
        <Ionicons name="location-sharp" size={16} color="#000" />
        <Text style={styles.cardRoute}>{item.route}</Text>
      </View>
      <View style={styles.cardBottom}>
        <View style={styles.cardDetailsLeft}>
          <MaterialCommunityIcons name="wallet-outline" size={20} color="#666" />
          <Text style={styles.paymentMethod}>{item.paymentMethod}</Text>
          <Text style={styles.txnId}>Txn Id: {item.txnId}</Text>
        </View>
        <View style={styles.cardDetailsRight}>
          <Text style={[styles.statusText, item.status === 'Success' ? styles.successText : styles.failedText]}>
            {item.status}
          </Text>
          <MaterialCommunityIcons name="calendar-range" size={20} color="#666" style={{marginLeft: 10}} />
        </View>
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
          <Text style={styles.headerTitle}>Payments</Text>
          <TouchableOpacity style={styles.helpButton}>
            <Ionicons name="help-circle-outline" size={20} color="#000" />
            <Text style={styles.helpText}>Help</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          {paymentHistoryData.map(renderPaymentItem)}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' }, container: { flex: 1, backgroundColor: '#f7f7f7' }, header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee' }, headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' }, helpButton: { flexDirection: 'row', alignItems: 'center', padding: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 20 }, helpText: { marginLeft: 5, fontSize: 14, color: '#000' }, scrollView: { paddingTop: 15 }, paymentCard: { backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 15, marginBottom: 15, padding: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }, cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }, cardDate: { fontSize: 14, color: '#666' }, cardAmount: { fontSize: 18, fontWeight: 'bold' }, cardMiddle: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 }, cardRoute: { fontSize: 16, marginLeft: 5 }, cardBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, cardDetailsLeft: { flexDirection: 'row', alignItems: 'center' }, paymentMethod: { marginLeft: 5, color: '#666' }, txnId: { marginLeft: 15, fontSize: 12, color: '#999' }, cardDetailsRight: { flexDirection: 'row', alignItems: 'center' }, statusText: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, fontSize: 12, fontWeight: 'bold', color: '#fff' }, successText: { backgroundColor: '#4caf50' }, failedText: { backgroundColor: '#f44336' },
});
export default PaymentsScreen;