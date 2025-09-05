import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreens/HomeScreen";
import LocationSearch from "../screens/HomeScreens/LocationSearch";
import ServicesDetail from "../screens/HomeScreens/ServicesDetail";
import Referral from "../screens/HomeScreens/Referral";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LocationSearch" component={LocationSearch} />
      <Stack.Screen name="ServicesDetail" component={ServicesDetail} />
      <Stack.Screen name="Referral" component={Referral} />
    </Stack.Navigator>
  );
}
