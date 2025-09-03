import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';


// App ke logo aur illustration ke liye assets
// NOTE: In paths ko apne project ke actual asset paths se replace karein
const AppLogo = require('../../assets/images/cg-yatri-logo.png');
const OnboardingIllustration = require('../../assets/images/logo4.png');

const SplashScreenTwo = () => {
  // Active slide/dot ko track karne ke liye state
  const [activeDot, setActiveDot] = React.useState(1);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#4b4b4bff" />
      
      {/* Top Section: Logo aur Skip Button */}
      <View className="flex-row justify-end items-center px-6 pt-4">
       
        
        {/* Skip Button */}
        <TouchableOpacity className="px-5 py-2 border border-gray-300 rounded-full">
          <Text className="text-gray-600 font-semibold">Skip &gt;</Text>
        </TouchableOpacity>
      </View>
    
      
   


      {/* Middle Section: Illustration aur Text */}
      <View className="flex-1 justify-center items-center px-4">
          <Image
          source={AppLogo}
          className="w-48 h-24 flex items-center mx-auto mt-10 "
        //   resizeMode="contain"
        />
        {/* Onboarding ki image */}
        <Image
          source={OnboardingIllustration}
          className="w-full h-[40vh]"
          resizeMode="contain"
        />
        
        {/* Headline Text */}
        <Text className="text-5xl font-bold text-center text-gray-800 mt-10 ">
          No Middleman...
          You & Driver
        </Text>

        {/* Sub-headline Text */}
        <Text className="text-lg text-center text-gray-500 mt-4 w-80">
          Book rides directly with drivers...100% goes to driver directly
        </Text>
      </View>

      {/* Bottom Section: Pagination dots aur Get Started Button */}
      <View className="px-6 pb-8">
        {/* Pagination Dots */}
        <View className="flex-row justify-center items-center mb-8">
          {[...Array(4)].map((_, index) => (
            <View
              key={index}
              className={`w-2.5 h-2.5 rounded-full mx-1 ${
                activeDot === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </View>

        {/* Get Started Button */}
        <TouchableOpacity className="bg-blue-600 w-full py-4 rounded-xl items-center justify-center">
          <Text className="text-white text-lg font-bold">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreenTwo;