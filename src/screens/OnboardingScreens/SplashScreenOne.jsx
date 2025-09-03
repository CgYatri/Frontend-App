// SplashScreen.js
import React from "react";
import { View, Image, StatusBar } from "react-native";

const SplashScreen = () => {
  return (
    <View className="flex-1  bg-white justify-between">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Center Logo */}
      <View className="flex-1 justify-center items-center">
        <Image
          source={require("../../assets/images/cg-yatri-logo.png")}
          className="w-40 h-40" // 160x160 px
          resizeMode="contain"
        />
      </View>

      {/* Bottom Logos inside Circles */}
      <View className="flex-row justify-center items-center mb-8">
        <View className="w-15 h-15 rounded-full bg-gray-300 justify-center items-center mx-2.5">
          <Image
            source={require("../../assets/images/logo4.png")}
            className="w-8 h-8"
            resizeMode="contain"
          />
        </View>

        <View className="w-15 h-15 rounded-full bg-gray-300 justify-center items-center mx-2.5">
          <Image
            source={require("../../assets/images/trevel-dept-logo.png")}
            className="w-8 h-8"
            resizeMode="contain"
          />
        </View>

        <View className="w-15 h-15 rounded-full bg-gray-300 justify-center items-center mx-2.5">
          <Image
            source={require("../../assets/images/cg-yatri-logo.png")}
            className="w-8 h-8"
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
