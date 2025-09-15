import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import OnboardingScreen from "../screens/OnboardingScreens/OnboardingScreen"; 
import HomeScreen from "../screens/HomeScreens/HomeScreen";
import LocationSearch from "../screens/HomeScreens/LocationSearch";
import ServicesDetail from "../screens/HomeScreens/ServicesDetail";
import Referral from "../screens/HomeScreens/Referral";
import GoogleMap from "../components/GoogleMap";
import SplashScreen1 from "../screens/OnboardingScreens/SplashScreenOne";
import LoginScreen from "../screens/LoginScreens/LoginScreen";
import OtpScreen from "../screens/LoginScreens/OtpScreen";
import ProfileSetupScreen from "../screens/LoginScreens/ProfileSetupScreen";
import FaqsScreen from "../screens/FaqsScreen";
import BusTracking from "../screens/HomeScreens/BusTracking";
import ComingSoon from "../components/LoadingScreens/ComingSoon";
import BottomTabs from "../navigation/BottomsTabs";
import ContactUsScreen from "../screens/Authenticate/ContactUsScreen";
import DeleteAccountScreen from "../screens/Authenticate/DeleteAccountModal";
import EditProfileScreen from "../screens/Authenticate/EditProfileScreen";
import FAQsScreen from "../screens/Authenticate/FAQsScreen";
import FavoritesScreen from "../screens/Authenticate/FavouritesScreen";
import SettingsScreen from "../screens/Authenticate/SettingsScreen";
import HelpSupportScreen from "../screens/Authenticate/HelpAndSupportScreen";
import FeedbackSubmittedScreen from "../screens/Authenticate/FeedbackSubmittedScreen";
import LogoutModal from "../screens/Authenticate/LogoutModal";
import PaymentScreen from "../screens/Authenticate/PaymentsScreen";
import RideHistoryScreen from "../screens/Authenticate/RiderHistoryScreen";


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
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
       <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="LocationSearch" component={LocationSearch} />
      <Stack.Screen name="ServicesDetail" component={ServicesDetail} />
      <Stack.Screen name="Referral" component={Referral} />
      <Stack.Screen name="GoogleMap" component={GoogleMap} />
      <Stack.Screen name="Faqs" component={FaqsScreen} />
       <Stack.Screen name="BusTracking" component={BusTracking} />
       <Stack.Screen name="ComingSoon" component={ComingSoon} />
       <Stack.Screen name="ContactUs" component={ContactUsScreen} />
       <Stack.Screen name="DeleteAccount" component={DeleteAccountScreen} />
       <Stack.Screen name="EditProfile" component={EditProfileScreen} />
       <Stack.Screen name="FAQs" component={FAQsScreen} />
       <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="HelpAndSupport" component={HelpSupportScreen} />
      <Stack.Screen name="FeedbackSubmitted" component={FeedbackSubmittedScreen} />
      <Stack.Screen name="LogoutModal" component={LogoutModal} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="RideHistory" component={RideHistoryScreen} />

    </Stack.Navigator>
  );
}
