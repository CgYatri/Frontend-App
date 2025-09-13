import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen1 from "../screens/OnboardingScreens/SplashScreenOne";
import OnboardingScreen from "../screens/OnboardingScreens/OnboardingScreen"; 
import HomeScreen from "../screens/HomeScreens/HomeScreen";
import LocationSearch from "../screens/HomeScreens/LocationSearch";
import ServicesDetail from "../screens/HomeScreens/ServicesDetail";
import Referral from "../screens/HomeScreens/Referral";
import GoogleMap from "../components/GoogleMap";
import LoginScreen from "../screens/LoginScreens/LoginScreen";
import OtpScreen from "../screens/LoginScreens/OtpScreen";
import ProfileSetupScreen from "../screens/LoginScreens/ProfileSetupScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Always register all screens */}
      <Stack.Screen name="SplashScreen" component={SplashScreen1} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="ProfileSetupScreen" component={ProfileSetupScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LocationSearch" component={LocationSearch} />
      <Stack.Screen name="ServicesDetail" component={ServicesDetail} />
      <Stack.Screen name="Referral" component={Referral} />
      <Stack.Screen name="GoogleMap" component={GoogleMap} />
    </Stack.Navigator>
  );
}
