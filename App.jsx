import { View, Text } from 'react-native'
import React from 'react'
import "./global.css"
import { SplashScreenFour, SplashScreenOne, SplashScreenThree, SplashScreenTwo } from './src/screens/OnboardingScreens';
// import ProfileScreen from './src/screens/Authenticate/ProfileScreen';
// import EditProfileScreen from './src/screens/Authenticate/EditProfileScreen';
// import RideHistoryScreen from './src/screens/Authenticate/RiderHistroyScreen';
// import FavouritesScreen from './src/screens/Authenticate/FavouritesScreen';
// import PaymentsScreen from './src/screens/Authenticate/PaymentsScreen';
// import SettingsScreen from './src/screens/Authenticate/SettingsScreen';
// import LogoutModal from './src/screens/Authenticate/LogoutModal';
// import DeleteAccountModal from './src/screens/Authenticate/DeleteAccountModal';
// import FeedbackSubmittedScreen from './src/screens/Authenticate/FeedbackSubmittedScreen';
// import HelpAndSupportScreen from './src/screens/Authenticate/HelpAndSupportScreen';
// import SendFeedbackScreen from './src/screens/Authenticate/SendFeedbackScreen';
// import FAQsScreen from './src/screens/Authenticate/FAQsScreen';
// import ContactUsScreen from './src/screens/Authenticate/ContactUsScreen';

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


    // <View className=' w-full h-screen '>
    //   {/* <Text className='text-red-500 text-4xl text-center mt-12' >App</Text> */}

    //   {/* <SplashScreenOne/> */}
    //   {/* <SplashScreenTwo/> */}
    //   {/* <SplashScreenThree/> */}
    //   {/* <SplashScreenFour/> */}
      // <ProfileScreen/>
    //   {/* <EditProfileScreen/> */}
    //   {/* <RideHistoryScreen/> */}
    //   {/* <FavouritesScreen/> */}
    //   {/* <PaymentsScreen/> */}
    //   {/* <SettingsScreen/> */}
    //   {/* <LogoutModal isVisible={true} onClose={()=>{}} onConfirm={()=>{}}/> */}
    //   {/* <DeleteAccountModal isVisible={true} onClose={()=>{}} /> */}
    //   {/* <FeedbackSubmittedScreen navigation={{goBack:()=>{}}} /> */}
    //   {/* <HelpAndSupportScreen/> */}
    //   {/* <SendFeedbackScreen navigation={{navigate:(screenName)=>{console.log(screenName)}}} /> */}
    //   {/* <FAQsScreen navigation={{navigate:(screenName)=>{console.log(screenName)}}} /> */}
    //   {/* <ContactUsScreen navigation={{navigate:(screenName)=>{console.log(screenName)}}} /> */}

    // </View>
  
}

export default App