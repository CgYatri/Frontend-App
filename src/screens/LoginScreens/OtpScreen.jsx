import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Back Arrow Icon
const BackArrowIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </Svg>
);

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef(Array(6).fill(null));

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Timer
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    console.log('Resending OTP...');
    setTimer(30);
  };

  const handleLogin = async () => {
    if (isLoading) return; // Prevent multiple submissions
    
    try {
      setIsLoading(true);
      
      // Check if OTP is complete
      if (!isOtpComplete) {
        Alert.alert('Error', 'Please enter the complete OTP');
        return;
      }

      // Get the entered OTP
      const enteredOTP = otp.join('');
      
      // Clear the isLoggedIn status first
      await AsyncStorage.removeItem("isLoggedIn");
      
      // Then set it to true
      await AsyncStorage.setItem("isLoggedIn", "true");
      
      navigation.replace("ProfileSetupScreen");
    } catch (error) {
      console.error('Error in handleLogin:', error);
      Alert.alert(
        'Error',
        'Failed to process login. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  }

  const isOtpComplete = otp.every(digit => digit !== '');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View className="flex-1 justify-between">
        <View>
          {/* Top Section */}
          <View className="p-6">
            <TouchableOpacity className="mb-6 w-10 h-10 justify-center items-center bg-gray-100 rounded-full">
              <BackArrowIcon className="w-6 h-6 text-gray-800" />
            </TouchableOpacity>
            <View className="flex-row gap-2">
              <View className="flex-1 h-1.5 bg-gray-200 rounded-full" />
              <View className="flex-1 h-1.5 bg-blue-600 rounded-full" />
              <View className="flex-1 h-1.5 bg-gray-200 rounded-full" />
            </View>
          </View>

          {/* OTP Input */}
          <View className="p-6">
            <Text className="text-2xl font-bold text-gray-900 mb-6">
              Enter the 6 digit OTP sent to your Number
            </Text>

            <View className="flex-row justify-between mb-6">
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  value={digit}
                  onChangeText={(text) => {
                    // Only allow numbers
                    if (!/^[0-9]*$/.test(text)) return;

                    const newOtp = [...otp];
                    newOtp[index] = text;
                    setOtp(newOtp);

                    // If a number is entered, move to next box
                    if (text.length === 1 && index < 5) {
                      const nextInput = inputRefs.current[index + 1];
                      if (nextInput) {
                        nextInput.focus();
                      }
                    }
                  }}
                  onKeyPress={({ nativeEvent }) => {
                    // Handle backspace
                    if (nativeEvent.key === 'Backspace' && !otp[index]) {
                      const newOtp = [...otp];
                      newOtp[index - 1] = '';
                      setOtp(newOtp);
                      
                      if (index > 0) {
                        const prevInput = inputRefs.current[index - 1];
                        if (prevInput) {
                          prevInput.focus();
                        }
                      }
                    }
                  }}
                  maxLength={1}
                  keyboardType="numeric"
                  style={{
                    width: 48,
                    height: 56,
                    backgroundColor: '#F3F4F6',
                    borderRadius: 8,
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#1F2937',
                    borderWidth: 2,
                    borderColor: digit ? '#2563EB' : 'transparent',
                  }}
                />
              ))}
            </View>

            {/* Resend */}
            <View className="flex-row items-center justify-center">
              <Text className="text-sm text-gray-500">
                didn't receive our SMS?{' '}
              </Text>
              {timer > 0 ? (
                <Text className="text-sm text-gray-400">Resend in {timer}s</Text>
              ) : (
                <TouchableOpacity onPress={handleResend}>
                  <Text className="text-sm text-blue-600 font-semibold">
                    Resend
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        {/* Proceed */}
        <View className="p-6">
          <TouchableOpacity
            disabled={!isOtpComplete || isLoading}
            onPress={handleLogin}
            className={`w-full py-4 rounded-xl items-center justify-center ${
              isOtpComplete && !isLoading ? 'bg-blue-600' : 'bg-blue-300'
            }`}
          >
            <Text className="text-white text-lg font-bold">
              {isLoading ? 'Processing...' : 'Proceed'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;
