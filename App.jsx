import { View, Text } from 'react-native'
import React from 'react'
import "./global.css"

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const StackNavigator = AppNavigator;

const App = () => {
  return (


     <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  ) 

}

export default App