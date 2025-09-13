import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreens/HomeScreen";
import LocationSearch from "../screens/HomeScreens/LocationSearch";
import ServicesDetail from "../screens/HomeScreens/ServicesDetail";
import Referral from "../screens/HomeScreens/Referral";
import GoogleMap from "../components/GoogleMap";
import SplashScreen1 from "../screens/OnboardingScreens/SplashScreenOne";
import OnboardingScreen1 from "../screens/OnboardingScreens/OnboardingScreen1";
import OnboardingScreen2 from "../screens/OnboardingScreens/OnboardingScree2";
import OnboardingScreen3 from "../screens/OnboardingScreens/OnboardingScreen3";
import OnboardingScreen4 from "../screens/OnboardingScreens/OnboardingScreen4";
import ComingSoon from "../components/LoadingScreens/ComingSoon";

import FaqsScreen from "../screens/FaqsScreen";
import BusTracking from "../screens/HomeScreens/BusTracking";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen1} />
      <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
      <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} />
      <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} />
      <Stack.Screen name="OnboardingScreen4" component={OnboardingScreen4} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LocationSearch" component={LocationSearch} />
      <Stack.Screen name="ServicesDetail" component={ServicesDetail} />
      <Stack.Screen name="Referral" component={Referral} />
      <Stack.Screen name="GoogleMap" component={GoogleMap} />
      <Stack.Screen name="Faqs" component={FaqsScreen} />
       <Stack.Screen name="BusTracking" component={BusTracking} />
       <Stack.Screen name="ComingSoon" component={ComingSoon} />
    </Stack.Navigator>
  );
}
