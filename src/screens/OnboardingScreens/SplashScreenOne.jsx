// SplashScreen.js
import React, { useEffect } from "react";
import { View, Image, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkAppFlow = async () => {
      try {
        // 1. Onboarding check
        const isOnboarded = await AsyncStorage.getItem("isOnboarded");
        if (!isOnboarded) {
          navigation.replace("OnboardingScreen");
          return;
        }

        // 2. Login check
        const isLoggedIn = await AsyncStorage.getItem("isLoggedIn"); // tum login pe ye set karoge
        if (!isLoggedIn) {
          navigation.replace("LoginScreen");
          return;
        }

        // 3. User detail check
        const userDetails = await AsyncStorage.getItem("userDetails"); // JSON string
        if (!userDetails) {
          navigation.replace("UserDetailScreen");
          return;
        }

        // 4. All ok → Home
        navigation.replace("HomeScreen");
      } catch (e) {
        console.log("Error checking app flow:", e);
        navigation.replace("OnboardingScreen"); // fallback
      }
    };

    // 2 sec splash delay
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
