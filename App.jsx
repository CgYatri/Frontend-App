import { View, Text } from 'react-native'
import React from 'react'
import "./global.css"
import { SplashScreenFour, SplashScreenOne, SplashScreenThree, SplashScreenTwo } from './src/screens/OnboardingScreens';




const App = () => {
  return (
    <View className=' w-full h-screen '>
      {/* <Text className='text-red-500 text-4xl text-center mt-12' >App</Text> */}

      {/* <SplashScreenOne/> */}
      {/* <SplashScreenTwo/> */}
      {/* <SplashScreenThree/> */}
      <SplashScreenFour/>
  
    </View>
  )
}

export default App