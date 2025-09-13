import React, { useState } from 'react';
import {
  
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Modal, // Gender selection ke liye Modal import kiya gaya hai
  Platform, // Platform (iOS/Android) check karne ke liye
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// SVG icons ke liye, aapko 'react-native-svg' install karna hoga
import { Svg, Path } from 'react-native-svg';
// Date picker ke liye, aapko yeh library install karni hogi
// npm install @react-native-community/datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';


// --- SVG Icons --- //
const BackArrowIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </Svg>
);
const UserIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </Svg>
);
const EnvelopeIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <Path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </Svg>
);
const CalendarIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <Path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12h18" />
    </Svg>
);
const DropdownArrowIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
      <Path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </Svg>
);

const ProfileSetupScreen = ({ navigation }) => {
  // Form ki saari values ko ek state me manage karna
  const [form, setForm] = useState({
    fullName: '',
    gender: '',
    email: '',
    dob: '',
    disability: 'no', // Default value 'no' set kar di hai
  });

  // Modals/Pickers ko control karne ke liye states
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Input change ko handle karne ke liye ek function
  const handleInputChange = (name, value) => {
    setForm(prevForm => {
      const updatedForm = { ...prevForm };
      updatedForm[name] = value;
      return updatedForm;
    });
  };
  
  // Date picker se date select hone par
  const onDateChange = (event, selectedDate) => {
    // Android par picker ko hide karna
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      // Date ko DD/MM/YYYY format me set karna
      const formattedDate = new Date(selectedDate).toLocaleDateString('en-GB');
      handleInputChange('dob', formattedDate);
    }
  };

  const genderOptions = ['Male', 'Female', 'Other'];

  // Check karein ki zaroori fields bhari hain ya nahi
  const isFormValid = form.fullName.trim() !== '' && form.gender !== '';

  const handleSubmit = async () => {
    navigation.navigate("HomeScreen");
    await AsyncStorage.setItem("userDetails", "true");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      
      <View className="p-6">
        <TouchableOpacity className="mb-6 w-10 h-10 justify-center items-center bg-white rounded-full border border-gray-200">
          <BackArrowIcon className="w-6 h-6 text-gray-800" />
        </TouchableOpacity>
        <View className="flex-row gap-2"> 
          <View className="flex-1 h-1.5 bg-gray-200 rounded-full" />
          <View className="flex-1 h-1.5 bg-gray-200 rounded-full" />
          <View className="flex-1 h-1.5 bg-blue-600 rounded-full" />
        </View>
      </View>
      
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="px-6">
            <Text className="text-3xl font-extrabold text-gray-900 mb-8">
                Tell us about you!
            </Text>

            {/* --- Full Name Input --- */}
            <View className="mb-5">
                <Text className="text-base font-semibold text-gray-700 mb-2">Full name</Text>
                <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-4">
                    {/* <UserIcon className="w-5 h-5 text-gray-400"/> */}
                    <TextInput 
                        className="flex-1 py-4 pl-3 text-base text-gray-800"
                        placeholder="Enter your name"
                        placeholderTextColor="#9CA3AF"
                        value={form.fullName}
                        onChangeText={(text) => handleInputChange('fullName', text)}
                        editable={true}
                    />
                </View>
            </View>

            {/* --- Gender Input --- */}
            <View className="mb-5">
                <Text className="text-base font-semibold text-gray-700 mb-2">Gender</Text>
                <TouchableOpacity 
                    onPress={() => setShowGenderModal(true)}
                    className="flex-row items-center justify-between bg-white border border-gray-300 rounded-lg p-4">
                    <Text className={`text-base ${form.gender ? 'text-gray-800' : 'text-gray-400'}`}>
                        {form.gender || 'Select your gender'}
                    </Text>
                    <DropdownArrowIcon className="w-5 h-5 text-gray-500"/>
                </TouchableOpacity>
            </View>

            {/* --- Email Input (Optional) --- */}
            <View className="mb-5">
                <Text className="text-base font-semibold text-gray-700 mb-2">Email (Optional)</Text>
                 <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-4">
                    {/* <EnvelopeIcon className="w-5 h-5 text-gray-400"/> */}
                    <TextInput 
                        className="flex-1 py-4 pl-3 text-base text-gray-800"
                        placeholder="Enter your email"
                        placeholderTextColor="#9CA3AF"
                        keyboardType='email-address'
                        value={form.email}
                        onChangeText={(text) => handleInputChange('email', text)}
                    />
                </View>
            </View>
            
            {/* --- Date of Birth Input (Optional) --- */}
            <View className="mb-5">
                <Text className="text-base font-semibold text-gray-700 mb-2">Date of Birth (optional)</Text>
                <TouchableOpacity 
                    onPress={() => setShowDatePicker(true)}
                    className="flex-row items-center justify-between bg-white border border-gray-300 rounded-lg p-4">
                    <Text className={`text-base ${form.dob ? 'text-gray-800' : 'text-gray-400'}`}>
                        {form.dob || 'DD/MM/YYYY'}
                    </Text>
                    <CalendarIcon className="w-5 h-5 text-gray-500"/>
                </TouchableOpacity>
            </View>

            {/* --- Disability Radio Buttons --- */}
            <View>
                <Text className="text-base font-semibold text-gray-700 mb-3">Are you a person with disability?</Text>
                <View className="flex-row gap-4">
                    {['no', 'yes'].map((option) => (
                        <TouchableOpacity 
                            key={option}
                            onPress={() => handleInputChange('disability', option)}
                            className={`flex-1 flex-row items-center justify-center p-4 rounded-lg border-2 ${
                                form.disability === option ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-300'
                            }`}
                        >
                            <View className={`w-5 h-5 rounded-full border-2 mr-3 justify-center items-center ${
                                form.disability === option ? 'border-blue-600 bg-blue-600' : 'border-gray-400'
                            }`}>
                                {form.disability === option && <View className="w-2 h-2 rounded-full bg-white"/>}
                            </View>
                            <Text className={`text-base font-bold uppercase ${
                                form.disability === option ? 'text-blue-600' : 'text-gray-600'
                            }`}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
      </ScrollView>

      {/* --- Gender Selection Modal --- */}
      <Modal
        transparent={true}
        visible={showGenderModal}
        animationType="fade"
        onRequestClose={() => setShowGenderModal(false)}
      >
        <TouchableOpacity 
            className="flex-1 justify-center items-center bg-black/50"
            activeOpacity={1}
            onPressOut={() => setShowGenderModal(false)}
        >
          <View className="bg-white rounded-lg w-4/5">
            <Text className="text-lg font-bold text-center p-4 border-b border-gray-200">Select Gender</Text>
            {genderOptions.map((gender) => (
              <TouchableOpacity
                key={gender}
                onPress={() => {
                  handleInputChange('gender', gender);
                  setShowGenderModal(false);
                }}
                className="p-4 items-center"
              >
                <Text className="text-base text-blue-600">{gender}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      {/* --- Date Picker --- */}
      {showDatePicker && (
        <DateTimePicker
            value={new Date()} // Default date
            mode="date"
            display="default"
            onChange={onDateChange}
            maximumDate={new Date()} // User future date select nahi kar sakta
        />
      )}

      {/* --- Proceed Button --- */}
       <View className="p-6 border-t border-gray-200 bg-gray-50">
            <TouchableOpacity 
                onPress={()=> handleSubmit()}
                disabled={!isFormValid}
                className={`w-full py-4 rounded-xl items-center justify-center ${isFormValid ? 'bg-blue-600' : 'bg-blue-300'}`}
            >
                <Text className="text-white text-lg font-bold">Proceed</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default ProfileSetupScreen;