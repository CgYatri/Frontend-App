import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  Linking,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Modal,
  FlatList,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';

const countries = [
  { name: 'India', code: '+91', flag: require('../../assets/images/india-flag.jpg') },
  { name: 'USA', code: '+1' },
  { name: 'UK', code: '+44' },
  { name: 'Australia', code: '+61' },
];

const BackArrowIcon = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#1F2937" strokeWidth={2.5} {...props}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </Svg>
);

const DropdownArrowIcon = (props) => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth={2} {...props}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </Svg>
);


const handleContinue = ()=>{
  setModalVisible(false)
}

const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const isValidNumber = mobileNumber.length === 10;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', padding: 24 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Top Section */}
          <View>
            {/* Back Button */}
            <TouchableOpacity className="mb-6 w-8 h-8 justify-center items-center">
              <BackArrowIcon />
            </TouchableOpacity>

            {/* Progress Bar */}
            <View className="flex-row gap-2 mb-10">
              <View className="flex-1 h-1.5 bg-blue-600 rounded-full" />
              <View className="flex-1 h-1.5 bg-gray-200 rounded-full" />
              <View className="flex-1 h-1.5 bg-gray-200 rounded-full" />
            </View>

            {/* Title */}
            <Text className="text-3xl font-bold text-gray-900 mb-4">Let's get you started!</Text>
            <Text className="text-xl text-gray-600 mb-6 font-semibold">Enter your Mobile Number</Text>

            {/* Mobile Input with Country Dropdown */}
            <View className="flex-row items-center border border-gray-300 bg-gray-50 rounded-lg">
              <TouchableOpacity
                className="flex-row items-center p-3 border-r border-gray-300"
                onPress={() => setModalVisible(true)}
              >
                {selectedCountry.name === 'India' && selectedCountry.flag && (
                  <Image source={selectedCountry.flag} className="w-6 h-6 mr-2" />
                )}
                <Text className="mr-1">{selectedCountry.code}</Text>
                <DropdownArrowIcon />
              </TouchableOpacity>

              <TextInput
                className="flex-1 p-5 text-xl text-gray-800"
                placeholder="Enter Mobile Number"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
                maxLength={10}
              />
            </View>

            {/* Terms & Conditions */}
            <Text className="text-xs text-gray-500 mt-3 text-center">
              By Clicking continue you agree to our{' '}
              <Text
                className="text-blue-600 font-semibold"
                onPress={() => Linking.openURL('https://example.com/terms')}
              >
                T&Cs
              </Text>
            </Text>
          </View>

          {/* Bottom Section: Continue Button */}
          <View style={{ marginBottom: Platform.OS === 'ios' ? 20 : 0, flexShrink: 0 }}>
            <TouchableOpacity
              disabled={!isValidNumber}
              onPress={() => navigation.navigate("OtpScreen")}
              className={`w-full py-4 rounded-xl items-center justify-center ${isValidNumber ? 'bg-blue-600' : 'bg-blue-300'}`}
            >
              <Text className="text-white text-lg font-bold">Continue</Text>
            </TouchableOpacity>
          </View>

          {/* Country Modal */}
          <Modal visible={modalVisible} transparent animationType="slide">
            <View className="flex-1 justify-center items-center bg-black/50">
              <View className="w-80 bg-white rounded-lg p-4">
                <FlatList
                  data={countries}
                  keyExtractor={(item) => item.code}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      className="flex-row items-center p-3"
                      onPress={() => {
                        setSelectedCountry(item);
                        setModalVisible(false);
                      }}
                    >
                      {item.name === 'India' && item.flag && (
                        <Image source={item.flag} className="w-6 h-6 mr-3" />
                      )}
                      <Text className="text-gray-800 text-lg">{item.name === 'India' ? item.name + ' (' + item.code + ')' : item.name + ' (' + item.code + ')'}</Text>
                    </TouchableOpacity>
                  )}
                />
                <TouchableOpacity
                  className="mt-2 p-3 items-center"
                  onPress={() => setModalVisible(false)}
                >
                  <Text className="text-blue-600 font-semibold">Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
