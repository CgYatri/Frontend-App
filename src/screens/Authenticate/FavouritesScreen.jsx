import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FavouritesScreen = ({ navigation }) => {
  const favouriteRoutes = [
    { id: '1', type: 'Home', icon: 'home', route: 'Raipur City → GECR', lastUsed: 'July 1, 2025' },
    { id: '2', type: 'Daily College Route', icon: 'office-building', route: 'Raipur City → GECR', lastUsed: 'July 1, 2025' },
  ];

  const renderFavouriteItem = (item) => (
    <View key={item.id} style={styles.favouriteCard}>
      <View style={styles.cardIconContainer}>
        {item.icon === 'home' ? (
          <MaterialIcons name="home" size={28} color="#000" />
        ) : (
          <MaterialCommunityIcons name="office-building" size={28} color="#000" />
        )}
      </View>
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{item.type}</Text>
        <Text style={styles.cardRoute}>{item.route}</Text>
        <Text style={styles.cardLastUsed}>Last used: {item.lastUsed}</Text>
      </View>
      <View style={styles.cardActions}>
        <View style={styles.editDeleteIcons}>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={20} color="#666" style={styles.actionIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="delete" size={20} color="#666" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.bookAgainButton}>
          <Text style={styles.bookAgainText}>Book Again</Text>
        </TouchableOpacity>
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
          <Text style={styles.headerTitle}>Favourites</Text>
          <TouchableOpacity style={styles.helpButton}>
            <Ionicons name="help-circle-outline" size={20} color="#000" />
            <Text style={styles.helpText}>Help</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.filterTabs}>
          {['All', 'Bus', 'Routes'].map((tab, index) => (
            <TouchableOpacity key={index} style={[styles.tab, index === 0 && styles.activeTab]}>
              <Text style={[styles.tabText, index === 0 && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView style={styles.scrollView}>
          {favouriteRoutes.map(renderFavouriteItem)}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' }, container: { flex: 1, backgroundColor: '#f7f7f7' }, header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee' }, headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' }, helpButton: { flexDirection: 'row', alignItems: 'center', padding: 5, borderWidth: 1, borderColor: '#ccc', borderRadius: 20 }, helpText: { marginLeft: 5, fontSize: 14, color: '#000' }, filterTabs: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#eee' }, tab: { paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, backgroundColor: '#f0f0f0' }, activeTab: { backgroundColor: '#1e90ff' }, tabText: { fontSize: 14, color: '#000' }, activeTabText: { color: '#fff' }, scrollView: { paddingTop: 15 }, favouriteCard: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 15, marginBottom: 15, padding: 15, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }, cardIconContainer: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#e3f2fd', justifyContent: 'center', alignItems: 'center', marginRight: 15 }, cardTextContainer: { flex: 1 }, cardTitle: { fontSize: 16, fontWeight: 'bold' }, cardRoute: { fontSize: 14, color: '#666' }, cardLastUsed: { fontSize: 12, color: '#999' }, cardActions: { alignItems: 'flex-end' }, editDeleteIcons: { flexDirection: 'row', marginBottom: 5 }, actionIcon: { marginRight: 10 }, bookAgainButton: { backgroundColor: '#1e90ff', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 15 }, bookAgainText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
});
export default FavouritesScreen;