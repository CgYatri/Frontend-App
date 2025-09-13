import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({ name: 'User Name', rating: '5.00' });
  const [loading, setLoading] = useState(false);

  // In a real app, you would fetch data from an API here
  // useEffect(() => {
  //   setLoading(true);
  //   // Simulating API call
  //   setTimeout(() => {
  //     setUserData({ name: 'Tulsiram Gavde', rating: '4.85' });
  //     setLoading(false);
  //   }, 1500);
  // }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading profile data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.profileSection}>
        {/* Local image ko yahan use kiya gaya hai */}
        <Image source={require('../../assets/images/user.png')} style={styles.profileImage} />
        <Text style={styles.userName}>{userData.name}</Text>
        <TouchableOpacity>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ratingBox}>
        <MaterialIcons name="star" size={20} color="#FFD700" />
        <Text style={styles.ratingText}>{userData.rating} My Rating</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RideHistory')}>
          <MaterialIcons name="history" size={24} color="#555" />
          <Text style={styles.menuItemText}>My Rides</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Payments')}>
          <MaterialIcons name="payment" size={24} color="#555" />
          <Text style={styles.menuItemText}>Payments</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Favourites')}>
          <MaterialIcons name="favorite" size={24} color="#555" />
          <Text style={styles.menuItemText}>Favourites</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="security" size={24} color="#555" />
          <Text style={styles.menuItemText}>Safety</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
        </TouchableOpacity>
        <View style={styles.horizontalLine} />
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="language" size={24} color="#555" />
          <Text style={styles.menuItemText}>Language</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="notifications" size={24} color="#555" />
          <Text style={styles.menuItemText}>Notification</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
          <MaterialIcons name="settings" size={24} color="#555" />
          <Text style={styles.menuItemText}>Settings</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="share" size={24} color="#555" />
          <Text style={styles.menuItemText}>Share and Refer</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
        </TouchableOpacity>
        <View style={styles.horizontalLine} />
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('HelpAndSupport')}>
          <MaterialIcons name="help" size={24} color="#555" />
          <Text style={styles.menuItemText}>Help and Support</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="info" size={24} color="#555" />
          <Text style={styles.menuItemText}>About</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem, styles.logoutItem]}>
          <MaterialIcons name="logout" size={24} color="red" />
          <Text style={[styles.menuItemText, styles.logoutText]}>Logout</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="red" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  backButton: { marginBottom: 20 },
  profileSection: { alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: '#ccc' },
  userName: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  editProfileText: { color: 'blue', fontSize: 14, marginTop: 5 },
  ratingBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 10, padding: 15, marginBottom: 20 },
  ratingText: { fontSize: 16, marginLeft: 10 },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  menuItemText: { flex: 1, marginLeft: 15, fontSize: 16 },
  logoutItem: { marginTop: 20 },
  logoutText: { color: 'red' },
  horizontalLine: { height: 1, backgroundColor: 'transparent', marginVertical: 10 },
});

export default ProfileScreen;