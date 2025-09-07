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
} from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const IndiaFlag = require('../../assets/images/india-flag.jpg');

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

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 80} // Android offset thoda bada rakha hai
      >
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 p-6 justify-between">
            <View>
              <TouchableOpacity className="mb-6 w-8 h-8 justify-center items-center">
                <BackArrowIcon />
              </TouchableOpacity>

              <View className="flex-row gap-2">
                <View className="flex-1 h-1.5 bg-blue-600 rounded-full" />
                <View className="flex-1 h-1.5 bg-gray-200 rounded-full" />
                <View className="flex-1 h-1.5 bg-gray-200 rounded-full" />
              </View>

              <View className="flex-1 justify-start pt-10">
                <Text className="text-3xl font-bold text-gray-900 mb-4">Let's get you started!</Text>
                <Text className="text-xl text-gray-600 mb-4 font-semibold">Enter your Mobile Number</Text>

                <View className="flex-row items-center border border-gray-300 bg-gray-50 rounded-lg">
                  <TouchableOpacity className="flex-row items-center p-3 border-r border-gray-300">
                    <Image source={IndiaFlag} className="w-6 h-6 mr-2" />
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

                <Text className="text-xs text-gray-500 mt-3 text-center">
                  By Clicking continue you agree to our{' '}
                  <Text className="text-blue-600 font-semibold" onPress={() => Linking.openURL('https://example.com/terms')}>
                    T&Cs
                  </Text>
                </Text>
              </View>
            </View>

            {/* Bottom Section: Continue Button with fixed space */}
            <View style={{ marginBottom: Platform.OS === 'ios' ? 20 : 0, flexShrink: 0 }}>
              <TouchableOpacity className="bg-blue-600 w-full py-4 rounded-xl items-center justify-center">
                <Text className="text-white text-lg font-bold">Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
