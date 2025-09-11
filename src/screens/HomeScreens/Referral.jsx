

import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"; // react-native-vector-icons use

const ReferScreen = () => {
  const navigation = useNavigation();
  const [showTerms, setShowTerms] = useState(false);

  return (

    <>
     {/* Top StatusBar Black */}
    <StatusBar backgroundColor="white" barStyle="dark-content" />

     <ScrollView className="flex-1 bg-white px-4 py-8 pt-10 ">
     


      {/* Header */}
      <View className="flex-row justify-between items-center mb-2">
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="p-2"
        >
         <View className="flex-row gap-2">
           <Ionicons name="arrow-back" size={24} color="black" />
         </View>
        </TouchableOpacity>

        <Text className="text-xl font-semibold text-black mr-32">Refer Friends</Text>

        {/* FAQ Button */}
         <TouchableOpacity
      onPress={() => navigation.navigate("Faqs")}
      activeOpacity={0.8}
      hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
      className="bg-white rounded-full border border-black px-4 py-2"
    >
      <View className="flex-row items-center">
        <Ionicons name="help-circle-outline" size={18} color="#000000" />
        <Text className="ml-2 text-[15px] text-black">FAQ's</Text>
      </View>
    </TouchableOpacity>
      </View>

      {/* Horizontal Line below Refer Friends */}
      <View className="border-b border-gray-300 mb-5" />

      {/* Refer Banner */}
      <View className="bg-purple-200 rounded-xl p-4 flex-row items-center justify-between mb-6 h-28">
        {/* Left Image */}
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
          className="w-16 h-16 mr-3"
        />
        <View className="flex-1">
          <Text className="text-lg font-bold text-purple-700">REFER A FRIEND</Text>
          <Text className="text-gray-700">Get free Bus ride on one refer</Text>
        </View>
        <TouchableOpacity className="bg-purple-600 px-4 py-2 rounded-lg">
          <Text className="text-white font-semibold">Refer</Text>
        </TouchableOpacity>
      </View>

      {/* Referral Code */}
      <View className="bg-gray-100 rounded-xl p-5 flex-row justify-between items-center mb-6 h-20">
        <Text className="text-lg font-mono font-bold">ABCBAB1121</Text>
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg">
          <Text className="text-white font-semibold">Copy Link</Text>
        </TouchableOpacity>
      </View>

      {/* Invite Friends */}
      <View className="bg-gray-100 rounded-xl p-5 flex-row justify-between items-center mb-6 h-20">
        <Text className="text-gray-800">Invite Friends to CG-Yatri</Text>
        <TouchableOpacity className="px-4 py-2">
          <Text className="text-blue-600 font-semibold">INVITE</Text>
        </TouchableOpacity>
      </View>

      {/* How it works */}
      <View className="mb-6">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="font-semibold text-gray-700">HOW IT WORKS?</Text>
          <TouchableOpacity onPress={() => setShowTerms(!showTerms)}>
            <Text className="text-blue-600 font-semibold">T&Cs</Text>
          </TouchableOpacity>
        </View>

        {showTerms && (
          <View className="bg-gray-100 rounded-xl p-5 h-24">
            <Text className="text-gray-700">
              Your friend completes 1 order within 7 days of registration.
            </Text>
            <Text className="mt-2 text-green-600 font-semibold">
              ✅ You earn 50 coins!
            </Text>
          </View>
        )}
      </View>

      {/* Invite 250 Friends */}
      <TouchableOpacity className="border border-gray-400 rounded-xl py-4 mb-4 h-16 justify-center">
        <Text className="text-center font-semibold text-gray-700">
          Invite 250 Friends to CG-Yatri
        </Text>
      </TouchableOpacity>

      {/* Refer Now */}
      <TouchableOpacity className="bg-blue-500 py-5 rounded-xl h-16 justify-center">
        <Text className="text-center text-white font-semibold text-lg">
          Refer Now
        </Text>
      </TouchableOpacity>
    </ScrollView>
    </>
   
  );
};

export default ReferScreen;
