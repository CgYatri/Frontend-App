// src/screens/Authenticate/EditProfileScreen.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const EditProfileScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('user name');
  const [userNumber, setUserNumber] = useState('+91XXXXXX');
  const [userEmail, setUserEmail] = useState('user@gmail.com');
  const [userGender, setUserGender] = useState('');
  const [userDob, setUserDob] = useState('');
  
  const handleSaveChanges = () => {
    console.log('Changes saved!', { userName, userNumber, userEmail, userGender, userDob });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header and Back Button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Profile</Text>
        </View>

        {/* Profile Picture Section */}
        <View style={styles.profileSection}>
          <Image 
            source={require('../../assets/images/user.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.changePhotoButton}>
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.formSection}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={userName}
            onChangeText={setUserName}
            placeholder="user name"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Number</Text>
          <TextInput
            style={styles.input}
            value={userNumber}
            onChangeText={setUserNumber}
            placeholder="+91XXXXXX"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={userEmail}
            onChangeText={setUserEmail}
            placeholder="user@gmail.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Gender</Text>
          <TextInput
            style={styles.input}
            value={userGender}
            onChangeText={setUserGender}
            placeholder=""
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            value={userDob}
            onChangeText={setUserDob}
            placeholder=""
            placeholderTextColor="#999"
          />
        </View>
        
        {/* Save Changes Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#000', marginLeft: 15 },
  profileSection: { alignItems: 'center', marginBottom: 30 },
  profileImage: { width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: '#ccc', marginBottom: 10 },
  changePhotoButton: { padding: 8 },
  changePhotoText: { fontSize: 16, color: 'blue' },
  formSection: { marginBottom: 30 },
  label: { fontSize: 16, color: '#555', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, fontSize: 16, marginBottom: 20, color: '#000' },
  saveButton: { backgroundColor: '#1e90ff', borderRadius: 8, padding: 15, alignItems: 'center' },
  saveButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default EditProfileScreen;