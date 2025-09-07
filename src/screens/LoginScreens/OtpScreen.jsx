import React, { useState, useEffect, useRef } from 'react';
import {

  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Keyboard, // Keyboard ko manage karne ke liye
} from 'react-native';
// SVG icons ke liye, aapko 'react-native-svg' install karna hoga
import { Svg, Path } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
// --- SVG Icons ---

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


const OtpScreen = () => {
  // OTP ko string ke roop me manage karne ke liye state
  const [otp, setOtp] = useState('');
  // Resend timer ke liye state
  const [timer, setTimer] = useState(30);
  // TextInput ko reference karne ke liye
  const inputRef = useRef(null);

  // Timer ke liye useEffect
  useEffect(() => {
    // Component mount hote hi keyboard open karein
    inputRef.current?.focus();

    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);
  
  // Resend button ke liye
  const handleResend = () => {
    console.log("Resending OTP...");
    setTimer(30); // Timer ko reset karein
  }

  const isOtpComplete = otp.length === 6;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Hidden TextInput jo keyboard input handle karega */}
      <TextInput
        ref={inputRef}
        className="absolute -left-full" // Ise screen se bahar rakhein
        keyboardType="number-pad"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />

      <View className="flex-1 justify-between">
        <View>
            {/* Top Section: Back Arrow & Progress */}
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

            {/* Middle Section: OTP Input */}
            <View className="p-6">
                <Text className="text-2xl font-bold text-gray-900 mb-6">
                Enter the 6 digit OTP sent to your Number
                </Text>
                
                {/* OTP Boxes - Inhe touch karne par keyboard khulega */}
                <TouchableOpacity onPress={() => inputRef.current?.focus()} activeOpacity={1}>
                    <View className="flex-row justify-between mb-6">
                    {[...Array(6)].map((_, index) => {
                        const digit = otp[index] || '';
                        // Current box ko highlight karne ke liye
                        const isFocused = index === otp.length; 

                        return (
                        <View
                            key={index}
                            className={`w-12 h-14 bg-gray-100 rounded-lg justify-center items-center border-2 ${
                                isFocused ? 'border-blue-500' : 'border-transparent'
                            }`}
                        >
                            <Text className="text-2xl font-bold text-gray-800">{digit}</Text>
                        </View>
                        );
                    })}
                    </View>
                </TouchableOpacity>

                {/* Resend Text */}
                <View className="flex-row items-center justify-center">
                    <Text className="text-sm text-gray-500">
                        didn't receive our SMS?{' '}
                    </Text>
                    {timer > 0 ? (
                        <Text className="text-sm text-gray-400">Resend in {timer}s</Text>
                    ) : (
                        <TouchableOpacity onPress={handleResend}>
                            <Text className="text-sm text-blue-600 font-semibold">Resend</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>

        {/* Bottom Section: Proceed Button */}
        <View className="p-6">
            <TouchableOpacity 
                disabled={!isOtpComplete}
                className={`w-full py-4 rounded-xl items-center justify-center ${isOtpComplete ? 'bg-blue-600' : 'bg-blue-300'}`}
            >
                <Text className="text-white text-lg font-bold">Proceed</Text>
            </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default OtpScreen;
