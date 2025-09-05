import { View, Text } from 'react-native'
import React from 'react'
import "./global.css"
import { SplashScreenFour, SplashScreenOne, SplashScreenThree, SplashScreenTwo } from './src/screens/OnboardingScreens';

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";


const App = () => {
  return (
    // <View className=' w-full h-screen '>
    //   {/* <Text className='text-red-500 text-4xl text-center mt-12' >App</Text> */}
    //   {/* <SplashScreenOne/> */}
    //   <SplashScreenTwo/>
    //   {/* <SplashScreenThree/> */}
    //   {/* <SplashScreenFour/> */}
  
    // </View>


     <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  ) 
}

export default App