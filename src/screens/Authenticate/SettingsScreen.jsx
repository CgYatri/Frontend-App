import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = ({ navigation }) => {
  const handleNavigation = (screenName) => {
    switch (screenName) {
      case 'Preferences':
        navigation.navigate('ComingSoon');
        break;
      case 'Share and Refer':
        navigation.navigate('Referral');
        break;
      case 'Help & Supports':
        navigation.navigate('HelpAndSupport');
        break;
      case 'About':
        navigation.navigate('ComingSoon');
        break;
      case 'General':
        navigation.navigate('ComingSoon');
        break;
      case 'Logout':
        navigation.navigate('LogoutModal');
        break;
      case 'Delete Account':
        // You might want to show a confirmation modal here
        Alert.alert(
          'Delete Account',
          'Are you sure you want to delete your account? This action cannot be undone.',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Delete',
              style: 'destructive',
              onPress: () => {
                // Add your delete account logic here
                console.log('Deleting account...');
              },
            },
          ]
        );
        break;
      default:
        console.log(`Navigation to ${screenName} not implemented yet`);
    }
  };

  const renderMenuItem = (label, iconComponent, isDestructive = false) => (
    <TouchableOpacity
      key={label}
      style={[styles.menuItem, isDestructive && styles.destructiveItem]}
      onPress={() => handleNavigation(label)}
    >
      <View style={styles.menuItemContent}>
        {iconComponent}
        <Text style={[styles.menuItemText, isDestructive && styles.destructiveText]}>{label}</Text>
      </View>
      <MaterialIcons name="keyboard-arrow-right" size={24} color={isDestructive ? 'red' : '#999'} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={{ width: 24 }} /> {/* Spacer to align title */}
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={styles.menuSection}>
            {renderMenuItem(
              'Preferences',
              <MaterialIcons name="tune" size={24} color="#555" />,
              false,
              'Customize your app preferences'
            )}
            {renderMenuItem(
              'Share and Refer',
              <MaterialIcons name="share" size={24} color="#555" />,
              false,
              'Share the app with friends'
            )}
            {renderMenuItem(
              'Help & Supports',
              <Icon name="help-circle-outline" size={24} color="#555" />,
              false,
              'Get help and support'
            )}
            {renderMenuItem(
              'About',
              <MaterialIcons name="info-outline" size={24} color="#555" />,
              false,
              'About CG Yatri'
            )}
            {renderMenuItem(
              'General',
              <MaterialIcons name="settings-outline" size={24} color="#555" />,
              false,
              'General settings'
            )}
          </View>

          <View style={styles.destructiveSection}>
            {renderMenuItem(
              'Logout',
              <MaterialIcons name="logout" size={24} color="red" />,
              true,
              'Log out of your account'
            )}
            {renderMenuItem(
              'Delete Account',
              <MaterialCommunityIcons name="delete-outline" size={24} color="red" />,
              true,
              'Permanently delete your account'
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  scrollView: {
    paddingTop: 15,
  },
  menuSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  destructiveSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  destructiveItem: {
    borderBottomColor: '#eee',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#000',
  },
  destructiveText: {
    color: 'red',
  },
});

export default SettingsScreen;