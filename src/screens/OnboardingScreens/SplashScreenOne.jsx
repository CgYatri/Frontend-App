// SplashScreen.js
import React, { useEffect } from "react";
import { View, Image, StatusBar, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkAppFlow = async () => {
      try {
        // Get all required data in parallel for better performance
        const [isOnboarded, isLoggedIn, userDetails] = await Promise.all([
          AsyncStorage.getItem("isOnboarded"),
          AsyncStorage.getItem("isLoggedIn"),
          AsyncStorage.getItem("userDetails")
        ]);

        // 1. Onboarding check - must be completed first
        if (!isOnboarded || isOnboarded !== "true") {
          navigation.replace("OnboardingScreen");
          return;
        }

        // 2. Login check - must be logged in
        if (!isLoggedIn || isLoggedIn !== "true") {
          navigation.replace("LoginScreen");
          return;
        }

        // 3. User detail check - must have valid user details
        if (!userDetails) {
          navigation.replace("ProfileSetupScreen");
          return;
        }

        // Validate userDetails is proper JSON (optional but recommended)
        try {
          const parsedUserDetails = JSON.parse(userDetails);
          if (!parsedUserDetails || typeof parsedUserDetails !== 'object') {
            throw new Error('Invalid user details format');
          }
        } catch (parseError) {
          console.warn('Invalid user details found, redirecting to user details screen');
          navigation.replace("ProfileSetupScreen");
          return;
        }

        // 4. All checks passed → Navigate to Home
        navigation.replace("HomeScreen");
      } catch (error) {
        // Log the specific error for debugging
        console.error("Error in checkAppFlow:", error);
        
        // Handle specific error cases
        if (error.name === 'InvalidAccessError') {
          // Handle storage access errors
          Alert.alert('Error', 'Unable to access app storage. Please ensure storage permissions are granted.');
        }
        
        // Default fallback - go to onboarding
        navigation.replace("OnboardingScreen");
      }
    };

    // Add minimal initial delay for splash screen visibility
    const timeout = setTimeout(checkAppFlow, 2000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View className="flex-1 bg-white justify-between">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Center Logo */}
      <View className="flex-1 justify-center items-center">
        <Image
          source={require("../../assets/images/cg-yatri-logo.png")}
          className="w-40 h-40"
          resizeMode="contain"
        />
      </View>

      {/* Bottom Logos inside Circles */}
      <View className="flex-row justify-center items-center mb-8">
        <View className="w-15 h-15 rounded-full bg-gray-300 justify-center items-center mx-2.5">
          <Image
            source={require("../../assets/images/logo4.png")}
            className="w-8 h-8"
            resizeMode="contain"
          />
        </View>

        <View className="w-15 h-15 rounded-full bg-gray-300 justify-center items-center mx-2.5">
          <Image
            source={require("../../assets/images/trevel-dept-logo.png")}
            className="w-8 h-8"
            resizeMode="contain"
          />
        </View>

        <View className="w-15 h-15 rounded-full bg-gray-300 justify-center items-center mx-2.5">
          <Image
            source={require("../../assets/images/cg-yatri-logo.png")}
            className="w-8 h-8"
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
