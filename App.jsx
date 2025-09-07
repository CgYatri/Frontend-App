import { View, Text } from 'react-native'
import React from 'react'
import "./global.css"
import { SplashScreenFour, SplashScreenOne, SplashScreenThree, SplashScreenTwo } from './src/screens/OnboardingScreens';

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const StackNavigator = AppNavigator;

const App = () => {
  return (

    // <View className=' w-full h-screen '>
    //   {/* <Text className='text-red-500 text-4xl text-center mt-12' >App</Text> */}
    //   {/* <SplashScreenOne/> */}
    //   <SplashScreenTwo/>
    //   {/* <SplashScreenThree/> */}
    //   {/* <SplashScreenFour/> */}
  
    // </View>


     <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  ) 

}

export default App